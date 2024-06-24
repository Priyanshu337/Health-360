import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  myDate: any = "";
  birthdate: any = "";
  email: string;
  fname: string;
  gender: string;
  password: string;
  language: string;
  EMAIL_STRING: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  changeDate() {
    if (this.myDate != "")
      //  this.birthdate = this.myDate.toString().substr(0, 4) + "-" + this.myDate.toString().substr(5, 2) + "-" + this.myDate.toString().substr(8, 2);
      this.birthdate = this.myDate.toString().substr(8, 2) + "-" + this.myDate.toString().substr(5, 2) + "-" + this.myDate.toString().substr(0, 4);
    else
      this.birthdate = "";
  }
  doregister() {
    if (this.email == "" && this.password == "") {
      alert("Username and password can't be  null");
    }
    else if (!this.email.match(this.EMAIL_STRING)) {

      alert('Please Enter Valid Email ID ');
    }
    else {
      //alert( "Full Name="+this.fname+ "Email="+this.email+ "Birth Date="+this.birthdate+ "Gender="+ this.gender  +"Password="+this.password +"Language="+this.language+"===");
      this.sqlite.create({
        name: 'HEALTH.db',
        location: 'default'
      })
        .then((db1: SQLiteObject) => {
          db1.executeSql('INSERT INTO user VALUES(?,?,?,?,?,?)', [this.fname, this.email, this.birthdate, this.password, this.gender, this.language])

            .then(res1 => {
              alert("Data inserted");
              this.navCtrl.setRoot(HomePage);
            })
            .catch(e => alert("USER Insert Error = " + JSON.stringify(e)));

        })
        .catch(e => alert("SignUp Database Error = " + JSON.stringify(e)));


    }
  }
}