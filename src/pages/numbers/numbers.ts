import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import NumberToWord from 'number-to-words';
import _ from 'lodash/fp'

@Component({
	templateUrl: 'numbers.html'
})


export class Numbers {
  counter: number = 0;
  word: string =  _.compose(_.startCase, NumberToWord.toWords)(this.counter);
  playing: boolean = false;
  audio: HTMLAudioElement  = null;

  constructor(public navCtrl: NavController) {
     this.playAudio();
  }

  increment() {
  	++this.counter;
  	this.word = _.compose(_.startCase, NumberToWord.toWords)(this.counter);
     this.playAudio();
  }
 
  decrement() {
  	if (this.counter > 0) {
  		--this.counter;
       this.playAudio();
  	}
  	this.word = _.compose(_.startCase, NumberToWord.toWords)(this.counter);
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
    this.word = _.compose(_.startCase, NumberToWord.toWords)(this.counter);
    this.playAudio();
  }

  play() {
    this.playing = true;
    setTimeout( () => this.slideShow(), 1500 );
  }

  pause() {
    this.playing = false;
  }

  goToLast() {
    this.word =  _.compose(_.startCase, NumberToWord.toWords)(this.counter);
    this.playAudio();
  }

  playAudio() {
    if(this.audio) {
      this.audio.pause();
    }
    if(this.counter > 20) {
      return;
    }
    this.audio = new Audio('assets/audio/numbers/a'+this.counter+'.m4a');
    this.audio.play();
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

