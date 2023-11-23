import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameviewPage } from './gameview.page';

const routes: Routes = [
  {
    path: '',
    component: GameviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameviewPageRoutingModule {}
