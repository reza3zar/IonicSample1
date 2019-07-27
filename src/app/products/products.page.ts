import { ToastController } from '@ionic/angular';
import { Product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private http: HttpClient, private toastController:ToastController) { }
  public isLoadedData=false;
  public itemsFakes=[1,2,3,4,5,6,7,8]
  ngOnInit() {

    try {
      this.getTopProducts().subscribe(result=>{
        this.productCollection=result;
        this.isLoadedData=true;
      },
      err =>{
        this.errorConnectTOApi()
        this.isLoadedData=true;
      } ,
      )
    } catch (error) {
        console.log(error)
    }
    finally{
      
    }

  }
  productCollection=new Array<Product>();


public getTopProducts(): Observable<Product[]>{
  try {
  return this.http.get<Product[]>('http://www.mocky.io/v2/5d386c509f0000ab4e9b3ef0');
    
  } catch (error) {
console.log('123')
    
  }
}

doRefresh(event) {

  this.getAllProducts().subscribe(result=>{
    this.productCollection=result;
    this.isLoadedData=true;
    event.target.complete();
  },
  err =>{
    this.errorConnectTOApi()
    this.isLoadedData=true;
    event.target.complete();
  } ,)
  //console.log('Begin async operation');
  // setTimeout(() => {
  //   console.log('Async operation has ended');
  //   event.target.complete();
  // }, 2000);
}

public getAllProducts(): Observable<Product[]>{
  try {
  return this.http.get<Product[]>('http://www.mocky.io/v2/5d3bf1c5300000bda6a2a160') ;
    
  } catch (error) {
 
    
  }
}
async errorConnectTOApi() {
  const toast = await this.toastController.create({
    header: 'هشدار',
    message:'خطا در اتصال به سرویس، لطفا از دسترسی به اینترنت خود مطمئن شوید!',
    position: 'bottom',
    color: 'danger',
    duration: 3000,
  });
  toast.present();
}

}
