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

  constructor(private http: HttpClient) { }
  public isLoadedData=false;
  public itemsFakes=[1,2,3,4,5,6,7,8]
  ngOnInit() {

    try {
      this.getAllProducts().subscribe(result=>{
        this.productCollection=result;
      this.isLoadedData=true;

      })
    } catch (error) {
      console.log(error)
    }
    finally{
    }

  }
  productCollection=new Array<Product>();


public getAllProducts(): Observable<Product[]>{
  return this.http.get<Product[]>('http://www.mocky.io/v2/5d386c509f0000ab4e9b3ef0');
}

}
