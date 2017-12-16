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

  constructor(public navCtrl: NavController) {}

  increment() {

    if (this.counter < this.length-1) {
  	 ++this.counter;
  	 this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
     if (this.counter === this.length - 1)
      this.playing = false;
     
    } else {
      console.log('end')
      this.playing = false;
    }
  }
 
  decrement() {
  	if (this.counter > 0) {
  		--this.counter;
    	this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
     } else {
     this.playing = false;
     }
  }

  slideShow() {
    if (!this.playing)
      return;
    this.increment();
    if (this.playing)
      setTimeout( () => this.slideShow(), 500 );;
  }

  reset() { 
    this.counter = 0;
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
  }

  play() {
    if (this.length -1 === this.counter)
      this.reset();
    this.playing = true;
    setTimeout( () => { console.log('playing'); this.slideShow()}, 500 );
  }

  pause() {
    this.playing = false;
  }

  goToLast() {
    this.counter = this.length-1;
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
  }

}
