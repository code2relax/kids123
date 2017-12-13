import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import NumberToWord from 'number-to-words';
import _ from 'lodash/fp'

@Component({
	templateUrl: 'numbers.html'
})


export class Numbers {
  counter: int = 0;
  word: string =  _.compose(_.startCase, NumberToWord.toWords)(this.counter);
  constructor(public navCtrl: NavController) {}

  increment() {
  	++this.counter;
  	this.word = _.compose(_.startCase, NumberToWord.toWords)(this.counter);
  }
 
  decrement() {
  	if (this.counter > 0) {
  		--this.counter;
  	}
  	this.word = _.compose(_.startCase, NumberToWord.toWords)(this.counter);
  }

}
