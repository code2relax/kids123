import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash/fp'

@Component({
  templateUrl: 'shapes.html'
})


export class Shapes {
  colors: string[] = ['circle', 'square', 'triangle','diamond','oval', 'pentagon', 'star','moon','heart'];
  length: number = _.size(this.colors)
  counter: number = 0;
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
    }
    this.word =  _.compose(_.startCase, _.get(this.counter))(this.colors);
  }

}
