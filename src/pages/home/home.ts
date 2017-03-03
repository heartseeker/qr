import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  capture() {
  	BarcodeScanner.scan().then((barcodeData) => {
  		alert(JSON.stringify(barcodeData));
	 // Success! Barcode data is here
	}, (err) => {
	    // An error occurred
	});
  }

}
