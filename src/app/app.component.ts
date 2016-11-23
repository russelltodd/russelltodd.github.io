import { Component } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RetreatData } from '../providers/retreat-data';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;


  constructor(platform: Platform,
    public retreatData: RetreatData,
    public storage: Storage) {

    Splashscreen.show();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    retreatData.load();


  }
}
