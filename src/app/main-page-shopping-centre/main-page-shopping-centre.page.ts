import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-shopping-centre',
  templateUrl: './main-page-shopping-centre.page.html',
  styleUrls: ['./main-page-shopping-centre.page.scss'],
})
export class MainPageShoppingCentrePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { 
    setTimeout( () => { this.isLoadedpage=true; }, 3000 );
  } 

  // ionViewDidEnter(){
  //   console.log('ionViewDidLoad')

  // }

  navigateToCategoryDetails(catId:number){
    this.router.navigate(['/products']);
  }

 isLoadedpage=false;
 
  
 
 
 
}
