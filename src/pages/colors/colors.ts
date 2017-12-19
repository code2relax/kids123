import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash/fp'

@Component({
	templateUrl: 'colors.html'
})


export class Colors {
  colors: string[] = ['red', 'black', 'blue', 'brown','gray', 'green', 'orange','pink','yellow','white'];
  length: number = _.size(this.colors);
  counter: number = 0;
  word: string = _.compose(_.startCase, _.get(this.counter))(this.colors);
  kcolor: string = this.colors[this.counter];
  playing: boolean = false;

  constructor(public navCtrl: NavController) {
    this.playAudio();
  }

  increment() {

    if (this.counter < this.length-1) {
  	 ++this.counter;
  	 this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
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
    	this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
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
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
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
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
    this.playAudio();
  }

  playAudio() {
    (new Audio('assets/audio/colors/'+this.colors[this.counter]+'.m4a')).play();
  }

   ionViewWillLeave() {
    this.playing = false;
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

}
