import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameviewPageRoutingModule } from './gameview-routing.module';

import { GameviewPage } from './gameview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameviewPageRoutingModule
  ],
  declarations: [GameviewPage]
})
export class GameviewPageModule {}
