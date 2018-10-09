import { Component } from '@angular/core';
import { SegundaaPaginaPage } from '../segundaa-pagina/segundaa-pagina';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  primeraFuncion()
  {
    this.navCtrl.push(SegundaaPaginaPage);
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
