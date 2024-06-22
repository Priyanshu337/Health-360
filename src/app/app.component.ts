import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
//import {SignupPage} from '../pages/signup/signup';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy';
import {GlobaldataProvider} from '../providers/globaldata/globaldata';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { YogaworkoutsPage } from '../pages/yogaworkouts/yogaworkouts';
import { SliderPage } from '../pages/slider/slider';

//import { SliderPage } from '../pages/slider/slider';
@Component({
  templateUrl: 'app.html'
})
export class health360 {
  appstorage : any;
  rootPage:any;
  email: string;
  language : string;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqliteDbCopy: SqliteDbCopy,
    private sqlite: SQLite, public global: GlobaldataProvider,private filePath: FilePath,private file: File) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.appstorage = window.localStorage;

      let path = this.filePath.resolveNativePath(this.file.applicationDirectory + "www/SunSalutation.pdf");
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "SunSalutation.pdf", this.file.dataDirectory, "SunSalutation.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Padmsana.pdf", this.file.dataDirectory, "Padmsana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Tadasana.pdf", this.file.dataDirectory, "Tadasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chakrasana.pdf", this.file.dataDirectory, "Chakrasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhanurasana.pdf", this.file.dataDirectory, "Dhanurasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Bhujangasans.pdf", this.file.dataDirectory, "Bhujangasans.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Halasanas.pdf", this.file.dataDirectory, "Halasanas.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Trikonasana.pdf", this.file.dataDirectory, "Trikonasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Paschimottanasana.pdf", this.file.dataDirectory, "Paschimottanasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "vakrasana.pdf", this.file.dataDirectory, "vakrasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "sasangasana.pdf", this.file.dataDirectory, "sasangasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "vajrasana.pdf", this.file.dataDirectory, "vajrasana.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "san salutation in gujarati.pdf", this.file.dataDirectory, "san salutation in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Padmasana in gujarati.pdf", this.file.dataDirectory, "Padmasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Tadasana in gujjarati.pdf", this.file.dataDirectory, "Tadasana in gujjarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chakrasana in gujarati.pdf", this.file.dataDirectory, "Chakrasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhanurasana in gujaati.pdf", this.file.dataDirectory, "Dhanurasana in gujaati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Bhujjanagasana in gujarati.pdf", this.file.dataDirectory, "Bhujjanagasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Halasana ini gujarati.pdf", this.file.dataDirectory, "Halasana ini gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Trikonasana in gujarati.pdf", this.file.dataDirectory, "Trikonasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "paschimottanasana in gujarati.pdf", this.file.dataDirectory, "paschimottanasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vakrasana in guarati.pdf", this.file.dataDirectory, "Vakrasana in guarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "sasangasana in gujarati.pdf", this.file.dataDirectory, "sasangasana in gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "vajrasana iin gujarati.pdf", this.file.dataDirectory, "vajrasana iin gujarati.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "sun salutation in hindi.pdf", this.file.dataDirectory, "sun salutation in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Padmasana in hindi.pdf", this.file.dataDirectory, "Padmasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Tadasana in hindi.pdf", this.file.dataDirectory, "Tadasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chakrasana in h indi.pdf", this.file.dataDirectory, "Chakrasana in h indi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhanurasana in hindi.pdf", this.file.dataDirectory, "Dhanurasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Bhujangasana in hindi.pdf", this.file.dataDirectory, "Bhujangasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "halasana in hindi.pdf", this.file.dataDirectory, "halasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Trikonasana in hindi.pdf", this.file.dataDirectory, "Trikonasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Pachimottanasana in hindi.pdf", this.file.dataDirectory, "Pachimottanasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vakrasana in hindi.pdf", this.file.dataDirectory, "Vakrasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Sasangassana in hindi.pdf", this.file.dataDirectory, "Sasangassana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vajrasana in hindi.pdf", this.file.dataDirectory, "Vajrasana in hindi.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Child pose Eng.pdf", this.file.dataDirectory, "Child pose Eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Downward Facing Dog eng.pdf", this.file.dataDirectory, "Downward Facing Dog eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Rag doll eng.pdf", this.file.dataDirectory, "Rag doll eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "High plank eng.pdf", this.file.dataDirectory, "High plank eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chaturanga Pushups eng.pdf", this.file.dataDirectory, "Chaturanga Pushups eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Upwrd Facing DOg eng.pdf", this.file.dataDirectory, "Upwrd Facing DOg eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted squat eng.pdf", this.file.dataDirectory, "Weighted squat eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Oblique twist eng.pdf", this.file.dataDirectory, "Oblique twist eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Glute Bridge eng.pdf", this.file.dataDirectory, "Glute Bridge eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chest Fly eng.pdf", this.file.dataDirectory, "Chest Fly eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted lunges with bicep curl hin.pdf", this.file.dataDirectory, "Weighted lunges with bicep curl hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Child pose guj.pdf", this.file.dataDirectory, "Child pose guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Downward facing dog guj.pdf", this.file.dataDirectory, "Downward facing dog guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Rag doll guj.pdf", this.file.dataDirectory, "Rag doll guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "High plank guj.pdf", this.file.dataDirectory, "High plank guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chaturanga Pushups guj.pdf", this.file.dataDirectory, "Chaturanga Pushups guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Upwrd Facing DOg guj.pdf", this.file.dataDirectory, "Upwrd Facing DOg guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted squatguj.pdf", this.file.dataDirectory, "Weighted squatguj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Oblique twist guj.pdf", this.file.dataDirectory, "Oblique twist guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "GLute bridge guj.pdf", this.file.dataDirectory, "GLute bridge guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chest FLy guj.pdf", this.file.dataDirectory, "Chest FLy guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted lunges with bicep curl guj.pdf", this.file.dataDirectory, "Weighted lunges with bicep curl guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Child Pose Hin.pdf", this.file.dataDirectory, "Child Pose Hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Downward facing dog hin.pdf", this.file.dataDirectory, "Downward facing dog hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Rag doll hin.pdf", this.file.dataDirectory, "Rag doll hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "High plank hin.pdf", this.file.dataDirectory, "High plank hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chaturanga Pushups hin.pdf", this.file.dataDirectory, "Chaturanga Pushups hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Upwrd Facing DOg hin.pdf", this.file.dataDirectory, "Upwrd Facing DOg hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted squat hin.pdf", this.file.dataDirectory, "Weighted squat hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Oblique twist hin.pdf", this.file.dataDirectory, "Oblique twist hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Glute bridge hin.pdf", this.file.dataDirectory, "Glute bridge hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Chest Fly hin.pdf", this.file.dataDirectory, "Chest Fly hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Weighted lunges with bicep curl eng.pdf", this.file.dataDirectory, "Weighted lunges with bicep curl eng.pdf")

      
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Abhaya Mudra eng.pdf", this.file.dataDirectory, "Abhaya Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Akash Mudra eng .pdf", this.file.dataDirectory, "Akash Mudra eng .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "_Rudra Mudra eng .pdf", this.file.dataDirectory, "_Rudra Mudra eng .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Icha Mudra eng.pdf", this.file.dataDirectory, "Icha Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "ApanVayu Mudra eng.pdf", this.file.dataDirectory, "ApanVayu Mudra eng.pdf")     
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Apana Mudra eng.pdf", this.file.dataDirectory, "Apana Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhyana Mudra eng.pdf", this.file.dataDirectory, "Dhyana Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Gyan Mudra eng.pdf", this.file.dataDirectory, "Gyan Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Jalodar Nashak mudra eng.pdf", this.file.dataDirectory, "Jalodar Nashak mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Lotus Mudra eng.pdf", this.file.dataDirectory, "Lotus Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Prithvi Mudra eng .pdf", this.file.dataDirectory, "Prithvi Mudra eng .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Linga Mudra eng.pdf", this.file.dataDirectory, "Linga Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "prana  mudra eng .pdf", this.file.dataDirectory, "prana  mudra eng .pdf")

      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Sahaj Shankh mudra eng.pdf", this.file.dataDirectory, "Sahaj Shankh mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Varun Mudra eng.pdf", this.file.dataDirectory, "Varun Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vayu Mudra eng.pdf", this.file.dataDirectory, "Vayu Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Surya Mudra eng.pdf", this.file.dataDirectory, "Surya Mudra eng.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Abhaya Mudra guj .pdf", this.file.dataDirectory, "Abhaya Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Akash mudra guj .pdf", this.file.dataDirectory, "Akash mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Rudra Mudra guj .pdf", this.file.dataDirectory, "Rudra Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Icha Mudra Guj.pdf", this.file.dataDirectory, "Icha Mudra Guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "ApanVayu Mudra  guj .pdf", this.file.dataDirectory, "ApanVayu Mudra  guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Apana Mudra guj .pdf", this.file.dataDirectory, "Apana Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhyana Mudra guj.pdf", this.file.dataDirectory, "Dhyana Mudra guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Gyan Mudra Guj.pdf", this.file.dataDirectory, "Gyan Mudra Guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Jalodhar nashak mudra guj.pdf", this.file.dataDirectory, "Jalodhar nashak mudra guj.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Lotus Mudra guj .pdf", this.file.dataDirectory, "Lotus Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Prithvi mudra guj .pdf", this.file.dataDirectory, "Prithvi mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Linga Mudra guj .pdf", this.file.dataDirectory, "Linga Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "prana mudra guj  .pdf", this.file.dataDirectory, "prana mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "_Sahaj Shankh mudra guj .pdf", this.file.dataDirectory, "_Sahaj Shankh mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Varun Mudra guj .pdf", this.file.dataDirectory, "Varun Mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vayu mudra guj .pdf", this.file.dataDirectory, "Vayu mudra guj .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "surya  mudra gujj.pdf", this.file.dataDirectory, "surya  mudra gujj.pdf")

      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Abhaya Mudra hin .pdf", this.file.dataDirectory, "Abhaya Mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Akash mudra hin .pdf", this.file.dataDirectory, "Akash mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Rudra Mudra hin .pdf", this.file.dataDirectory, "Rudra Mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Icha Mudra hin .pdf", this.file.dataDirectory, "Icha Mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "ApanVayu Mudra  hin .pdf", this.file.dataDirectory, "ApanVayu Mudra  hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Apana Mudra hin.pdf", this.file.dataDirectory, "Apana Mudra hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Dhyana Mudra hin.pdf", this.file.dataDirectory, "Dhyana Mudra hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Gyan Mudra hin.pdf", this.file.dataDirectory, "Gyan Mudra hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Jalodhar nashak mudra hiin.pdf", this.file.dataDirectory, "Jalodhar nashak mudra hiin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Lotus Mudra hin .pdf", this.file.dataDirectory, "Lotus Mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "prithvi mudra hin .pdf", this.file.dataDirectory, "prithvi mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Linga Mudra hin .pdf", this.file.dataDirectory, "Linga Mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Prana mudra hin .pdf", this.file.dataDirectory, "Prana mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "_Sahaj Shankh mudra hin .pdf", this.file.dataDirectory, "_Sahaj Shankh mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Varun Mudra Hin.pdf", this.file.dataDirectory, "Varun Mudra Hin.pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "Vayu mudra hin .pdf", this.file.dataDirectory, "Vayu mudra hin .pdf")
      this.file.copyFile(this.file.applicationDirectory+ 'www/', "surya mudra hin .pdf", this.file.dataDirectory, "surya mudra hin .pdf")
     


      // this.file.copyFile(this.file.applicationDirectory+ 'www/', "ss.gif", this.file.dataDirectory, "ss.gif")
            .then(data=>{
            //  alert(" file copied ");
             
            })              
            .catch(err=>{
            alert("copy error");
            })


      this.sqliteDbCopy.copy('HEALTH.db',0)
      .then((res: any) => {
        //alert ("Copy Database successfully");


        this.sqlite.create({
          name: 'HEALTH.db',
          location: 'default'
        })

        .then((db1: SQLiteObject) => {

          //  db1.executeSql
          })
          .catch(e => alert("Create Database Error = " + JSON.stringify(e)));

        })

        .catch((error: any) => {
           //alert("Copy Database Error = " + + JSON.stringify(error));
        });

        
        this.email= this.appstorage.getItem("user_name");
     this.language=this.global.language;
        this.language= this.appstorage.getItem("language");
        //alert("language"+this.language);
        if(this.email == "undefined" || this.email  == "null" || this.email == null) 
      {
        //alert("Home User name = " + this.email);
        this.rootPage = SliderPage;
      }  
      else
      {
       // alert("First User name = " + this.email);
        this.global.user_name =this.email;
        this.global.language=this.language;
        this.rootPage = DashboardPage;  
      }
    
    });
  }
}

