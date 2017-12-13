import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Numbers } from '../numbers/numbers';
import { Alphabets } from '../alphabets/alphabets';
import { Shapes } from '../shapes/shapes';
import { Colors } from '../colors/colors'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAlphabets() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Alphabets);
  }

  goToNumbers() {
    this.navCtrl.push(Numbers);
  }

  goToColors() {
  	this.navCtrl.push(Colors);
  }

  goToShapes() {
  	this.navCtrl.push(Shapes);
  }

}
