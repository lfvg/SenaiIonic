import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { DomDebouncer } from 'ionic-angular/umd/platform/dom-controller';
import { GoogleMap, GoogleMaps, Environment, GoogleMapOptions} from '@ionic-native/google-maps';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  selectedUser: any;
  year: string;
  mt: string;
  day: string;
  map: GoogleMap;
  latitude: number;
  longitude: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedUser = navParams.get('item');
    var fullDate = this.selectedUser.dob.date
    fullDate = fullDate.substring(0, fullDate.length -1);
    var dob = new Date(fullDate);
    this.year = dob.getFullYear().toString();
    var tempDay = dob.getDate();
    if(tempDay<10)
      this.day = "0" + tempDay.toString();
    else
      this.day = tempDay.toString();
    
    var tempMt = (dob.getMonth()+1);
    if(tempMt<10)
      this.mt = "0" + tempMt.toString();
    else
      this.mt = tempMt.toString();
    console.log(typeof this.selectedUser.location.coordinates.latitude)
    this.latitude = parseFloat(this.selectedUser.location.coordinates.latitude);
    this.longitude = parseFloat(this.selectedUser.location.coordinates.longitude);
    console.log(typeof this.latitude);
    console.log(typeof 35.12345)
    //alert(this.latitude + "," + this.longitude)
  }
  
  ionViewDidEnter(){ 
    this.loadMap();
  }
  
  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyChQihRVsFR8rGDr1u2qBTfFGh6tXqWGiI',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyChQihRVsFR8rGDr1u2qBTfFGh6tXqWGiI'
    });
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 12,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}
