import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastLocation;
  locations = [];

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase) {
    this.afDB.list('a840418').valueChanges().subscribe((data) => {
      this.lastLocation = data[data.length-1];
      this.locations = data.reverse();
    });
  }

}
