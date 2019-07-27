import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPageShoppingCentrePage } from './main-page-shopping-centre.page';

const routes: Routes = [
  {
    path: '',
    component: MainPageShoppingCentrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPageShoppingCentrePage]
})
export class MainPageShoppingCentrePageModule {}
