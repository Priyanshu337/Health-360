import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../providers/globaldata/globaldata';
import { AddcategoryPage } from '../addcategory/addcategory';
import { YogaposesPage } from '../yogaposes/yogaposes';
import { YogaworkoutsPage } from '../yogaworkouts/yogaworkouts';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ReminderPage } from '../reminder/reminder';
import { HomePage } from '../home/home';
import { MudraPage } from '../mudra/mudra';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  email: string;
  language: string;
  yogaplans: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobaldataProvider, private sqlite: SQLite) {
    this.email = global.user_name;
    this.language = global.language;
    // alert("First User name = " + this.email + "Language="+ this.language);
    this.getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  getdata() {

    this.yogaplans = [];
    this.sqlite.create({
      name: 'HEALTH.db',
      location: 'default'
    })
      .then((db1: SQLiteObject) => {
        db1.executeSql('select * from yogaplans', [])
          .then(res2 => {
            //  alert ("yogaplans data = " + res2.rows.length);
            if (this.language == "English") {
              for (var i = 0; i < res2.rows.length; i++) {
                // alert(res2.rows.item(i).category_name);
                this.yogaplans.push({
                  categoryid: res2.rows.item(i).category_id, categoryname: res2.rows.item(i).eng_name
                });
              }
            }
            if (this.language == "Gujarati") {
              for (var i = 0; i < res2.rows.length; i++) {
                // alert(res2.rows.item(i).category_name);
                this.yogaplans.push({
                  categoryid: res2.rows.item(i).category_id, categoryname: res2.rows.item(i).guj_name
                });
              }
            }
            if (this.language == "Hindi") {
              for (var i = 0; i < res2.rows.length; i++) {
                // alert(res2.rows.item(i).category_name);
                this.yogaplans.push({
                  categoryid: res2.rows.item(i).category_id, categoryname: res2.rows.item(i).hin_name
                });
              }
            }
          })
          .catch(e => { });
      })
      .catch(e => alert("Create Database Error"));
  }

  signout() {
    this.navCtrl.setRoot(HomePage);
  }
  Addcategory() {
    this.navCtrl.push(AddcategoryPage, { flag: "Add" });
  }

  editcategory(cid) {
    this.navCtrl.push(AddcategoryPage, { flag: "Edit", category_id: cid });
  }

  openyogaplansInfo(cid) {
    // alert("Category id = "+cid);
    if (cid == 1) {
      this.navCtrl.push(YogaposesPage);
    }
    if (cid == 2) {
      this.navCtrl.push(YogaworkoutsPage);
    }
    if (cid == 3) {
      this.navCtrl.push(MudraPage);
    }



  }
  reminder() {
    this.navCtrl.push(ReminderPage);
  }



}
