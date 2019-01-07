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
  users: any;
  items: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get("https://randomuser.me/api/?results=25")
        .map(res => res.json())
        .subscribe(res => {
            this.items = res.results;
            this.users = this.items;
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
  initializeItems(){
    this.items = this.users;
  }
  filtrar(){

  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value.toUpperCase();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      var retorno= [];
      for(let item of this.items){
          var nome = item.name.first + " " + item.name.last;
          nome =  nome.toUpperCase();
          var email = item.email;
          email = email.toUpperCase();
          if(nome.indexOf(val)!= -1 || email.indexOf(val) != -1){
            retorno.push(item);
          }
      }
      this.items = retorno;   
    }
  }
}
