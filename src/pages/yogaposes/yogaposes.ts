import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite ,SQLiteObject} from '@ionic-native/sqlite';
import {GlobaldataProvider} from '../../providers/globaldata/globaldata';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
// import { VideoPlayer } from '@ionic-native/video-player';
 import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/';

/**
 * Generated class for the YogaposesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yogaposes',
  templateUrl: 'yogaposes.html',
})
export class YogaposesPage {
  language : string;
  asan : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer, public global:GlobaldataProvider, private sqlite: SQLite,private fileOpener: FileOpener,private file: File) {
    this.language=global.language;
    // alert("Language :-"+this.language + "====");
    this.get_asan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YogaposesPage');
  }

  get_asan()
  {
    this.asan=[];
    this.sqlite.create({
      name : 'HEALTH.db',
      location : 'default'
    })
      .then((db1: SQLiteObject) => {
     
        db1.executeSql('select * from yogaposes',[])
        .then(res2 => {
          // alert ("yogaposes = " + res2.rows.length);
          if (this.language=="English")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).eng_name);
              this.asan.push({
                asanid:res2.rows.item(i).yoga_id, asanname: res2.rows.item(i).eng_name});
            }
          }
          if (this.language=="Gujarati")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).guj_name);
              this.asan.push({
                asanid:res2.rows.item(i).yoga_id, asanname: res2.rows.item(i).guj_name});
            }
          }
          if (this.language=="Hindi")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).hin_name);
              this.asan.push({
                asanid:res2.rows.item(i).yoga_id, asanname: res2.rows.item(i).hin_name});
            }
          }
         
        })
        .catch(e => { });
      })
      .catch(e => alert("Create Database Error"));
  }

  openfile(i)
  {
    if (this.language=="English")
    {
    if (i==0)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'SunSalutation.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Padmsana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Tadasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chakrasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Dhanurasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Bhujangasans.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Halasanas.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Trikonasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Paschimottanasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'vakrasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'sasangasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==11)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'vajrasana.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
  

  }
  if (this.language=="Gujarati")
  {
    
    if (i==0)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'san salutation in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Padmasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Tadasana in gujjarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chakrasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Dhanurasana in gujaati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Bhujjanagasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Halasana ini gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Trikonasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'paschimottanasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Vakrasana in guarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'sasangasana in gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==11)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'vajrasana iin gujarati.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
  
  }
  if (this.language=="Hindi")
  {
    if (i==0)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'sun salutation in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Padmasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Tadasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chakrasana in h indi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Dhanurasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Bhujangasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'halasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Trikonasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Pachimottanasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Vakrasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Sasangassana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==11)
    {
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Vajrasana in hindi.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
  }
  
  }

  videofile(i)
  {
    if(i==0)
    {
      this.youtube.openVideo('_eCHrcq5wRY');
    }
    if(i==1)
    {
      this.youtube.openVideo('XXs0ssi0jy4');
    }
    if(i==2)
    {
      this.youtube.openVideo('ZQKLKwscLVE');
    }
    if(i==3)
    {
      this.youtube.openVideo('coTV-Mh3dOA');
    }
    if(i==4)
    {
      this.youtube.openVideo('4P2mYcOGxbU');
    }
    if(i==5)
    {
      this.youtube.openVideo('5-1JaosvDEA');
    }
    if(i==6)
    {
      this.youtube.openVideo('qpuY0jXimtQ');
    }
    if(i==7)
    {
      this.youtube.openVideo('hxplnz9luAA');
    }
    if(i==8)
    {
      this.youtube.openVideo('T8sgVyF4Ux4');
    }
    if(i==9)
    {
      this.youtube.openVideo('qzscBZl2XPY');
    }
    if(i==10)
    {
      this.youtube.openVideo('AnJF0sF0sqs');
    }
    if(i==11)
    {
      this.youtube.openVideo('mvk_zYVaRMQ');
    }
  }
  


}
