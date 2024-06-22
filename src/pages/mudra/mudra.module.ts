import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MudraPage } from './mudra';

@NgModule({
  declarations: [
    MudraPage,
  ],
  imports: [
    IonicPageModule.forChild(MudraPage),
  ],
})
export class MudraPageModule {}
