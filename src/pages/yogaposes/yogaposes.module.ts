import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YogaposesPage } from './yogaposes';

@NgModule({
  declarations: [
    YogaposesPage,
  ],
  imports: [
    IonicPageModule.forChild(YogaposesPage),
  ],
})
export class YogaposesPageModule {}
