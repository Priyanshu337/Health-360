import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {

  data = { title:'', description:'', date:'', time:'' };
  

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams,public localNotifications: LocalNotifications,public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }
  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);

    alert("date  = " + this.data + "------" + date);
    this.localNotifications.schedule({
      id: 1,
      title : this.data.title,
      text: 'Its yoga time',
      trigger: {at: date},
      led: 'FF0000',
    //  trigger: {at: new Date(new Date().getTime() + 3600)},  
    //  sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    //  data: { secret: key }
    });

  //   this.localNotifications.schedule({
  //     text: 'Delayed ILocalNotification',
  //     at: date,
  //     led: 'FF0000',
  //     sound: this.setSound(),
  //  });
  //  let alert = this.alertCtrl.create({
  //    title: 'Congratulation!',
  //    subTitle: 'Notification setup successfully at '+date,
  //    buttons: ['OK']
  //  });
  //  alert.present();
  //  this.data = { title:'', description:'', date:'', time:'' };
    
    
  }
  // setSound()
  // {
  //   if (this.platform.is('android'))
  //   {

  //   }
  // }

}
