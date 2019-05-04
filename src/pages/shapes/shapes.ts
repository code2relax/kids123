import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import _ from 'lodash/fp'
import Home from '../home/home'
@Component({
  templateUrl: 'shapes.html'
})


export class Shapes {
  shapes: string[] = ['circle', 'square', 'triangle', 'pentagon', 'star','moon','heart'];
  length: number = _.size(this.shapes)
  counter: number = 0;
  word: string = _.compose(_.startCase, _.get(this.counter))(this.shapes);
  playing: boolean = false;
   @Input() home: Home; 
  constructor(public navCtrl: NavController) {
    this.playAudio();
  }

  increment() {
    if (this.counter < this.length-1) {
      ++this.counter;
      this.word =  _.compose(_.startCase, _.get(this.counter))(this.shapes);
     this.playAudio();
     if (this.counter === this.length - 1)
        this.playing = false;
      
    }else {
      this.playing = false;   
    }
  }
 
  decrement() {
    if (this.counter > 0) {
      --this.counter;
      this.word =  _.compose(_.startCase, _.get(this.counter))(this.shapes);
      this.playAudio();
     } else {
      this.playing = false;
     }
  }


  slideShow() {
    if (!this.playing)
      return;
    this.increment();
    if (this.playing)
      setTimeout( () => this.slideShow(), 1500 );;
  }

  reset() { 
    this.counter = 0;
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.shapes);
    this.playAudio();
  }

  play() {
    if (this.length -1 === this.counter)
      this.reset();
    this.playing = true;
    setTimeout( () => this.slideShow(), 1500 );
  }

  pause() {
    this.playing = false;
  }

  goToLast() {
    this.counter = this.length-1;
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.shapes);
    this.playAudio();
  }

  playAudio() {
    (new Audio('assets/audio/shapes/'+this.shapes[this.counter]+'.m4a')).play();
  }

  swipe(event) {    
    if (this.playing)
      return;
    switch(event.direction) {
      case 2:
        this.increment();
        break;
      case 4: 
        this.decrement();
        break;
    }
  }

  exit() {
  alert('shapes');
  }

}
