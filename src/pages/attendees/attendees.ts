import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetreatData } from '../../providers/retreat-data';

/*
  Generated class for the Attendees page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html'
})
export class AttendeesPage {
  attendees = [];

  constructor(public navCtrl: NavController,
    public retreatData: RetreatData) {
  }

  ionViewDidLoad() {
    console.log('Hello AttendeesPage Page');
    this.retreatData.getAttendees().subscribe(attendees => {
      this.attendees = attendees;
    });
  }

}
