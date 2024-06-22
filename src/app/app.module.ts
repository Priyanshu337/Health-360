import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { health360 } from './app.component';
import { SliderPage } from '../pages/slider/slider';
import { HomePage } from '../pages/home/home';
import {SignupPage} from '../pages/signup/signup';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {AddcategoryPage} from '../pages/addcategory/addcategory';
import { YogaposesPage} from '../pages/yogaposes/yogaposes';
import {YogaworkoutsPage} from '../pages/yogaworkouts/yogaworkouts';
import {ReminderPage} from '../pages/reminder/reminder';
import {MudraPage} from '../pages/mudra/mudra';
import { MenuController } from 'ionic-angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy';
import { GlobaldataProvider } from '../providers/globaldata/globaldata';
import { HttpClientModule} from '@angular/common/http';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { LocalNotifications } from '@ionic-native/local-notifications';

// import { VideoPlayer } from '@ionic-native/video-player';
 import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';



@NgModule({
  declarations: [
    health360,
    SliderPage,
    HomePage,
    SignupPage,
    DashboardPage,
    AddcategoryPage,
    YogaposesPage,
    YogaworkoutsPage,
    ReminderPage,
    MudraPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(health360)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    health360,
    SliderPage,
    HomePage,
    SignupPage,
    DashboardPage,
    AddcategoryPage,
    YogaposesPage,
    YogaworkoutsPage,
    ReminderPage,
    MudraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SqliteDbCopy,
    GlobaldataProvider,
    File,
    FilePath,
    FileOpener,
    LocalNotifications,
    MenuController,
    // VideoPlayer
     YoutubeVideoPlayer 
    
  ]
})
export class AppModule {}
