import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite ,SQLiteObject} from '@ionic-native/sqlite';
import {GlobaldataProvider} from '../../providers/globaldata/globaldata';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/';

/**
 * Generated class for the MudraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mudra',
  templateUrl: 'mudra.html',
})
export class MudraPage {
  language : string;
  mudras : any[];

  constructor(public navCtrl: NavController,public global:GlobaldataProvider,private youtube: YoutubeVideoPlayer, private sqlite: SQLite, public navParams: NavParams,private fileOpener: FileOpener,private file: File) {
    this.language=global.language;
    this.get_mudra();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MudraPage');
  }

  get_mudra()
  {
    this.mudras=[];
    this.sqlite.create({
      name : 'HEALTH.db',
      location : 'default'
    })
      .then((db1: SQLiteObject) => {
     
        db1.executeSql('select * from mudras',[])
        .then(res2 => {
          if (this.language=="English")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).eng_name);
              this.mudras.push({
                mudraid:res2.rows.item(i).mudra_id, mudraname: res2.rows.item(i).eng_name});
            }
          }
          if (this.language=="Gujarati")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).guj_name);
              this.mudras.push({
                mudraid:res2.rows.item(i).mudra_id, mudraname: res2.rows.item(i).guj_name});
            }
          }
          if (this.language=="Hindi")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).hin_name);
              this.mudras.push({
                mudraid:res2.rows.item(i).mudra_id, mudraname: res2.rows.item(i).hin_name});
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
      this.fileOpener.open(this.file.dataDirectory+'Abhaya Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      
     // alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Akash Mudra eng .pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      
      //alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'_Rudra Mudra eng .pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Icha Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      
      //alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'ApanVayu Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Apana Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Dhyana Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Gyan Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      
      //alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Jalodar Nashak mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      
     // alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Lotus Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Prithvi Mudra eng .pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==11)
    {
      
     // alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'prana  mudra eng .pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==12)
    {
      
     // alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Linga Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==13)
    {
      
      //alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Sahaj Shankh mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==14)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Varun Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==15)
    {
      
  //    alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Vayu Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==16)
    {
      
    //  alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Surya Mudra eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }

  }
  if (this.language=="Gujarati")
  {
    if (i==0)
  {
    
 //   alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Abhaya Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==1)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Akash mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==2)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Rudra Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==3)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Icha Mudra Guj.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==4)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'ApanVayu Mudra  guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==5)
  {
    
  //  alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Apana Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==6)
  {
    
    //alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Dhyana Mudra guj.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==7)
  {
    
  //  alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Gyan Mudra Guj.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==8)
  {
    
  //  alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Jalodhar nashak mudra guj.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==9)
  {
    
    //alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Lotus Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==10)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Prithvi mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==11)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'prana mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==12)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Linga Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==13)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'_Sahaj Shankh mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==14)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Varun Mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==15)
  {
    
   // alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Vayu mudra guj .pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==16)
  {
    
    //alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'surya  mudra gujj.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }

}

if (this.language=="Hindi")
{
  if (i==0)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Abhaya Mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==1)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Akash mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==2)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Rudra Mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==3)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Icha Mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==4)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'ApanVayu Mudra  hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==5)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Apana Mudra hin.pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==6)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Dhyana Mudra hin.pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==7)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Gyan Mudra hin.pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==8)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Jalodhar nashak mudra hiin.pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==9)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Lotus Mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==10)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'prithvi mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==11)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Prana mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==12)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Linga Mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==13)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'_Sahaj Shankh mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==14)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Varun Mudra Hin.pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==15)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'Vayu mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
if (i==16)
{
  
  alert( "filepath= "+this.file.dataDirectory);
  this.fileOpener.open(this.file.dataDirectory+'surya mudra hin .pdf', 'application/pdf')
  .then(() => alert('File is opened'))
  .catch(e => alert('Error opening file' + JSON.stringify(e)));
}
}

}

videofile(i)
  {
    if(i==0)
    {
      this.youtube.openVideo('v6yGcPGTRY4');
    }
    if(i==1)
    {
      this.youtube.openVideo('xbx1yRp_V6o');
    }
    if(i==2)
    {
      this.youtube.openVideo('9ezRhpHiVKw');
    }
    if(i==3)
    {
      this.youtube.openVideo('E-YlrzxDWY8');
    }
    if(i==4)
    {
      this.youtube.openVideo('cbUhh-GpEEE');
    }
    if(i==5)
    {
      this.youtube.openVideo('8kI8wQZCp0c');
    }
    if(i==6)
    {
      this.youtube.openVideo('yW56sa9CVZ4');
    }
    if(i==7)
    {
      this.youtube.openVideo('fgSARD2hr_8');
    }
    if(i==8)
    {
      this.youtube.openVideo('lcDy7iad-0c');
    }
    if(i==9)
    {
      this.youtube.openVideo('FJA6j0LkJbk');
    }
    if(i==10)
    {
      this.youtube.openVideo('V0wCPV5pNqY');
    }
    if(i==11)
    {
      this.youtube.openVideo('nisvasoyyGw');
    }
    if(i==12)
    {
      this.youtube.openVideo('FL2NQEkcptk');
    }
    if(i==13)
    {
      this.youtube.openVideo('-wpza5F0iuE');
    }
    if(i==14)
    {
      this.youtube.openVideo('puvZ1XoeZAI');
    }
    if(i==15)
    {
      this.youtube.openVideo('ul3xOWlZZTY');
    }
    if(i==16)
    {
      this.youtube.openVideo('_ECymiI9ZII');
    }
  }

}

  
