import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
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
  attendeeToShow = 0;
  @ViewChild(Content) content: Content;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public retreatData: RetreatData) {
  }

  ionViewDidLoad() {
    this.retreatData.getAttendees().subscribe(attendees => {
      this.attendees = attendees;
    });
  }

}
