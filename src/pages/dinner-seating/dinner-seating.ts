import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetreatData } from '../../providers/retreat-data';
import { AttendeesPage } from '../attendees/attendees';

/*
  Generated class for the DinnerSeating page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dinner-seating',
  templateUrl: 'dinner-seating.html'
})
export class DinnerSeatingPage {

  tables = []

  constructor(public navCtrl: NavController,
    public retreatData: RetreatData) {}

  ionViewDidLoad() {
    console.log('Hello DinnerSeatingPage Page');
    this.retreatData.getDinnerSeating().subscribe(seating => {
      this.tables = seating;
    });
  }

  goToAttendeePage(id) {
    this.navCtrl.push(AttendeesPage);
  }

}
