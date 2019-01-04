import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { DomDebouncer } from 'ionic-angular/umd/platform/dom-controller';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  selectedUser: any;
  dob: Date;
  year: string;
  mt: string;
  day: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedUser = navParams.get('item');
    var teste = this.selectedUser.dob.date
    teste = teste.substring(0, teste.length -1);
    //var arr = teste.split(":");
    //"1958-08-20T06 :20 :21Z"
    //teste = arr[0] + ":" + arr[1] + ":" + arr[2];
    //console.log(typeof teste);
    //var dateStr = JSON.parse(teste); 
    //console.log(dateStr);
    this.dob = new Date(teste);
    this.year = this.dob.getFullYear().toString();
    //console.log(this.dob);
    //console.log(this.dob.getFullYear().toString());
    
  }
}
