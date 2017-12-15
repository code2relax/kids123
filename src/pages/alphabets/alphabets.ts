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

  constructor(public navCtrl: NavController) {}

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
    (new Audio('assets/audio/'+this.lAlphabet+'.mp4')).play();
  }

}

