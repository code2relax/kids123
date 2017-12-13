import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import NumberToWord from 'number-to-words';
import _ from 'lodash/fp'

@Component({
	templateUrl: 'colors.html'
})


export class Colors {
  colors: array = ['red', 'black', 'blue','brown','gray', 'green', 'orange','pink','yellow','white'];
  length: int = _.size(this.colors);
  counter: int = 0;
  word: string = _.compose(_.startCase, _.get(this.counter))(this.colors);
  
  constructor(public navCtrl: NavController) {}

  increment() {
  if (this.counter < this.length-1) {

  	 ++this.counter;
  	 this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
    } 
  }
 
  decrement() {
  	if (this.counter > 0) {
  		--this.counter;
    	this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
     } 
  }

}
