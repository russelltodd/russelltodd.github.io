import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { AttendeesPage } from '../attendees/attendees';
import { DinnerSeatingPage } from '../dinner-seating/dinner-seating';
import { DevotionalListPage } from '../devotional-list/devotional-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages = [];

  constructor(public navCtrl: NavController) {
      this.pages = [
        {
          title: 'Schedule',
          icon: 'calendar',
          description: 'This is the schedule',
          color: '#555555',
          page: SchedulePage,
        },
        {
          title: 'Attendees',
          icon: 'people',
          description: 'This is the attendees page',
          color: '#555555',
          page: AttendeesPage,
        },
        {
          title: 'Monday Dinner Seating',
          icon: 'restaurant',
          description: 'This is the dinner seating',
          color: '#555555',
          page: DinnerSeatingPage,
        },
        {
          title: 'Devotionals',
          icon: 'book',
          description: 'This is the devotionals page',
          color: '#555555',
          page: DevotionalListPage,
        },
      ]

  }

  openPage(item) {
    console.log('Change Page: ',item);
    this.navCtrl.push(item.page)
  }

}
