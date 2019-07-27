import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

 

@NgModule({
  imports: [
  
    IonicModule,
 
  ],
  exports:[ProductDetailComponent],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule {}
