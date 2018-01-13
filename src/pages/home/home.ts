import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TradeProvider} from "../../providers/trade/trade";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trades: Observable<any>;

  constructor(public navCtrl: NavController, private tradeService: TradeProvider) {

  }

  ionViewDidLoad() {
    this.trades = this.tradeService.trades;
  }

}
