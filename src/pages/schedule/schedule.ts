import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetreatData } from '../../providers/retreat-data';

import moment from 'moment';

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  days = [];

  constructor(public navCtrl: NavController,
    public retreatData: RetreatData) {}

  ionViewDidLoad() {
    console.log('Hello SchedulePage Page');
    this.retreatData.getSchedule().subscribe(schedule => {
      this.days = schedule;
    });

  }

  displayDate(date) {
    return moment(date).format('dddd, MMMM D');
  }
}
