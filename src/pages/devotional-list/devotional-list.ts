import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetreatData } from '../../providers/retreat-data';
import { DevotionalPage } from '../devotional/devotional';

import moment from 'moment';
/*
  Generated class for the DevotionalList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-devotional-list',
  templateUrl: 'devotional-list.html'
})
export class DevotionalListPage {
  devotionals = [];

  constructor(public navCtrl: NavController,
    public retreatData: RetreatData) { }

  ionViewDidLoad() {
    console.log('Hello DevotionalPage Page');
    this.retreatData.getDevotionals().subscribe(devotionals => {
      this.devotionals = devotionals;
    });
  }

  goToDevo(devo) {
    this.navCtrl.push(DevotionalPage,devo);
  }

  displayDate(d) {
    return moment(d).format('dddd, MMMM D');
  }
}
