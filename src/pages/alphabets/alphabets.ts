import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'alphabets.html'
})


export class Alphabets {
  counter: number = 0;
  length: number = 26;
  charCode: number = 65;
  alphabet: string = String.fromCharCode(this.charCode);
  lAlphabet: string = String.fromCharCode(this.charCode+32);
  playing: boolean = false;

  constructor(public navCtrl: NavController) {
    this.playAudio();
  }

  increment() {
    if (this.charCode < 90) {
      ++this.counter;
    	++this.charCode;
      this.updateAlphabet();
    } 
  } 

  decrement() {
  	if (this.charCode > 65) {
      --this.counter;
  		--this.charCode;
      this.updateAlphabet();
  	}
  }

  updateAlphabet() {
    this.alphabet = String.fromCharCode(this.charCode);
    this.lAlphabet = String.fromCharCode(this.charCode+32); 
    this.playAudio();
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
    this.updateAlphabet(); 
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
    this.playAudio();
  }

  playAudio() {
    (new Audio('assets/audio/letters/'+this.lAlphabet+'.m4a')).play();
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

