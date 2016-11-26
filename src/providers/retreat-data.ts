import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the RetreatData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RetreatData {

  data: any;

  constructor(public http: Http) {
    console.log('Hello RetreatData Provider');
  }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/data.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    /*
    // loop through each day in the schedule
    this.data.schedule.forEach(day => {
      // loop through each event in the day
      day.events.forEach(event => {
        console.log("Next event: "+event.name);
      });
    });

    */


    this.data.dinnerSeating.forEach(table => {
      table.guests = [];
      table.people.forEach(id => {
        let guest = this.data.attendees.find(a => a.id === id);
        if (guest) {
          table.guests.push(guest);
        }
      });
      console.log(table.table+" guests: ", table.guests);
    });
    return this.data;
  }

  getAttendee(id) {
    return this.load().map(data => {
      return data.attendees.find(a => {
        return a.id == id;
      })
    });
  }

  getAttendees() {
    return this.load().map(data => {
      return data.attendees.sort((a,b) => {
        return (a.name).localeCompare(b.name);
      });
    });
  }

  getSchedule() {
    return this.load().map(data => {
      return data.schedule;
    });
  }

  getDinnerSeating() {
    return this.load().map(data => {
      return data.dinnerSeating;
    });
  }

  getDevotionals() {
    return this.load().map(data => {
      return data.devotionals;
    });
  }
}
