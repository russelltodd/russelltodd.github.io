import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { AttendeesPage } from '../pages/attendees/attendees';
import { DinnerSeatingPage } from '../pages/dinner-seating/dinner-seating';
import { DevotionalPage } from '../pages/devotional/devotional';
import { DevotionalListPage } from '../pages/devotional-list/devotional-list';
import { Storage } from '@ionic/storage';
import { RetreatData } from '../providers/retreat-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    AttendeesPage,
    DinnerSeatingPage,
    DevotionalPage,
    DevotionalListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    AttendeesPage,
    DinnerSeatingPage,
    DevotionalPage,
    DevotionalListPage,
  ],
  providers: [
    RetreatData,
    Storage,
  ]
})
export class AppModule {}
