import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YogaworkoutsPage } from './yogaworkouts';

@NgModule({
  declarations: [
    YogaworkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(YogaworkoutsPage),
  ],
})
export class YogaworkoutsPageModule {}
