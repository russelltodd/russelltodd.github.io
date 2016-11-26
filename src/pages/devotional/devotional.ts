import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import moment from 'moment';
/*
  Generated class for the Devotional page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-devotional',
  templateUrl: 'devotional.html'
})
export class DevotionalPage {
  devotional: any;

  constructor(public navParams: NavParams) {
    this.devotional = navParams.data;
  }

  displayDate(d) {
    return moment(d).format('dddd, MMMM D');
  }
}
