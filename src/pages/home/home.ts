import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserDetailsPage } from '../user-details/user-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get("https://randomuser.me/api/?results=25")
        .map(res => res.json())
        .subscribe(res => {
            this.items = res.results;
            //alert(res.results);
        }, (err) => {
          alert("Falhou");
        });  
    
  }
  itemTapped(event, item) {
    this.navCtrl.push(UserDetailsPage, {
      item: item
    });
  }

}
