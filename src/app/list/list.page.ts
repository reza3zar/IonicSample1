import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  constructor(private storage: Storage) {
 
  }

  ngOnInit() {
  }

  userName='';
  saveUserstorege(){
    this.setData('userName', this.userName);
    console.log(this.userName);

  }
  loadDataUserstorege(){
    this.getData('userName');
  }

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  async getData(key) {
    this.userName = await this.storage.get(key);
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
