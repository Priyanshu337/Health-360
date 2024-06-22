import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SignupPage} from '../signup/signup';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {GlobaldataProvider} from '../../providers/globaldata/globaldata';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  email:string="";
  password:string="";
  appstorage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sqlite:SQLite, public global : GlobaldataProvider) {
    this.appstorage = window.localStorage;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
dologin()
{
 // alert("Username ="+this.email +"======"+this.password)
  this.sqlite.create({
    name : 'HEALTH.db',
    location : 'default'
  })
  .then((db1: SQLiteObject) => {
    db1.executeSql('SELECT * FROM user where user_name = ?', [this.email])
        .then(res1 => {

          // alert("User Record = " + res1.rows.length);
          if (res1.rows.length > 0) {
            if (this.password == res1.rows.item(0).password) {


              //alert("Welcome " + res1.rows.item(0).user_name);
              this.appstorage.setItem("user_name", res1.rows.item(0).user_name);
              this.global.user_name =  res1.rows.item(0).user_name;
              this.appstorage.setItem("language", res1.rows.item(0).language);
              this.global.language =  res1.rows.item(0).language;


              this.navCtrl.push(DashboardPage);
            }
            else {
              alert("Credentials are not valid! Please Enter Correct username and password");
              this.email = "";
              this.password = "";
            }
          }
         
        })
        .catch(e => alert("USER Insert Error = " + JSON.stringify(e)));
      })
      .catch(e => alert("SignUp Database Error = " + JSON.stringify(e)));

}
goregister()
{
  this.navCtrl.push(SignupPage);
}
}
