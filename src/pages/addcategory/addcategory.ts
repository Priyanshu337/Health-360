import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the AddcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcategory',
  templateUrl: 'addcategory.html',
})
export class AddcategoryPage {

  categoryname: string;
  flag: string;
  categoryid: string;
  language: string;
  yogaplans: any[];



  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite) {

    this.flag = navParams.get('flag');
    this.categoryid = navParams.get('categoryid');
    alert("Add category : " + this.flag + "===" + this.categoryid);
    if (this.flag == "Edit")
      this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcategoryPage');
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
            //alert ("yogaplans data = " + res2.rows.length);
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




  save() {

    this.sqlite.create({
      name: 'HEALTH.db',
      location: 'default'
    })
      .then((db1: SQLiteObject) => {

        if (this.flag == "Add") {
          db1.executeSql("insert into yogaplans values (?,?,?,?)", [this.categoryid, this.categoryname, ""])
            .then(res2 => {
              alert("Add Data successfully = " + this.categoryname);
            })
            .catch(e => alert("Insert Attachment Error"));
        }
        // if(this.flag == "Edit")
        // {
        //   db1.executeSql("update yogaplans set eng_name = ?  where category_id = ?", [this.categoryname, this.categoryid])
        //   .then(res2 => {
        //     alert("Edit Data successfully = " + this.categoryname + "===" + this.categoryid);
        //   })
        //   .catch(e => alert("Insert Attachment Error"));
        // }

        this.navCtrl.push(DashboardPage);


      }), (err) => {
        alert("Database Error = " + JSON.stringify(err));
      }
  }


}
