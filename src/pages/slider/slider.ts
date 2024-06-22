import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    slider = [
      {
        title:'Ionic is Awesome!',
        description:'Ionic is built on top of Angular and Ionic team is consistently leap-frogging this.',
        image:"assets/imgs/3.png"
      },
      {
        title:'Ionic is fully native!',
        description:'Ionic also uses SAAS',
        image:"assets/imgs/10.jpg"
      },
      {
        title:'Ionic 3 is the best version!',
        description:'Angular 4 is the latest version',
        image:"assets/imgs/5.jpg"
      },
    
    ];

gohome()
{
  this.navCtrl.push(HomePage);
}
}
