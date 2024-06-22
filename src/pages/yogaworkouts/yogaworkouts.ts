import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite ,SQLiteObject} from '@ionic-native/sqlite';
import {GlobaldataProvider} from '../../providers/globaldata/globaldata';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/';

/**
 * Generated class for the YogaworkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yogaworkouts',
  templateUrl: 'yogaworkouts.html',
})
export class YogaworkoutsPage {
  language : string;
  workout : any[];

  constructor(public navCtrl: NavController,public global:GlobaldataProvider,private youtube: YoutubeVideoPlayer, private sqlite: SQLite, public navParams: NavParams,private fileOpener: FileOpener,private file: File) {
    this.language=global.language;
    // alert("Language :-"+this.language + "====");
    this.get_workouts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YogaworkoutsPage');
  }
  get_workouts()
  {
    this.workout=[];
    this.sqlite.create({
      name : 'HEALTH.db',
      location : 'default'
    })
      .then((db1: SQLiteObject) => {
     
        db1.executeSql('select * from yogaworkouts',[])
        .then(res2 => {
          if (this.language=="English")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).eng_name);
              this.workout.push({
                workoutid:res2.rows.item(i).workout_id, workoutname: res2.rows.item(i).eng_name});
            }
          }
          if (this.language=="Gujarati")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).guj_name);
              this.workout.push({
                workoutid:res2.rows.item(i).workout_id, workoutname: res2.rows.item(i).guj_name});
            }
          }
          if (this.language=="Hindi")
          {
            for (var i = 0; i < res2.rows.length; i++) {
              // alert("Yoga = " + res2.rows.item(i).hin_name);
              this.workout.push({
                workoutid:res2.rows.item(i).workout_id, workoutname: res2.rows.item(i).hin_name});
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
      this.fileOpener.open(this.file.dataDirectory+'Child pose Eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Downward Facing Dog eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Rag doll eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'High plank eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chaturanga Pushups eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Upwrd Facing DOg eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Weighted squat eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Oblique twist eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Glute Bridge eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chest Fly eng.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Weighted lunges with bicep curl hin.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }

  }
  if (this.language=="Gujarati")
    {
      if (i==0)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Child pose guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==1)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Downward facing dog guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==2)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Rag doll guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==3)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'High plank guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==4)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chaturanga Pushups guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==5)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Upwrd Facing DOg guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==6)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Weighted squatguj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==7)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Oblique twist guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==8)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'GLute bridge guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==9)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Chest FLy guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }
    if (i==10)
    {
      
      alert( "filepath= "+this.file.dataDirectory);
      this.fileOpener.open(this.file.dataDirectory+'Weighted lunges with bicep curl guj.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file' + JSON.stringify(e)));
    }

  }
  if (this.language=="Hindi")
  {
    if (i==0)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Child Pose Hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==1)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Downward facing dog hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==2)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Rag doll hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==3)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'High plank hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==4)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Chaturanga Pushups hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==5)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Upwrd Facing DOg hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==6)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Weighted squat hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==7)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Oblique twist hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==8)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Glute bridge hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==9)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Chest Fly hin.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }
  if (i==10)
  {
    
    alert( "filepath= "+this.file.dataDirectory);
    this.fileOpener.open(this.file.dataDirectory+'Weighted lunges with bicep curl eng.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file' + JSON.stringify(e)));
  }

}


  }
  videofile(i)
  {
    if(i==0)
    {
      this.youtube.openVideo('qYvYsFrTI0U');
    }
    if(i==1)
    {
      this.youtube.openVideo('Z3PtTMMwaHI');
    }
    if(i==2)
    {
      this.youtube.openVideo('RMkE7kyEWyg');
    }
    if(i==3)
    {
      this.youtube.openVideo('TvxNkmjdhMM');
    }
    if(i==4)
    {
      this.youtube.openVideo('TWrEwg-mCnA');
    }
    if(i==5)
    {
      this.youtube.openVideo('tbh0qyLJRaI');
    }
    if(i==6)
    {
      this.youtube.openVideo('YaXPRqUwItQ');
    }
    if(i==7)
    {
      this.youtube.openVideo('Trel-z3J3eo');
    }
    if(i==8)
    {
      this.youtube.openVideo('Q_Bpj91Yiis');
    }
    if(i==9)
    {
      this.youtube.openVideo('pKavoMRca_o');
    }
    if(i==10)
    {
      this.youtube.openVideo('m3Nsjdx-UY0');
    }
  }

}
