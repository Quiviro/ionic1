import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// importo mi archivo creado a mano con el constructor de la clase
import { TareaModelo } from "../../servicios/TareaModelo";


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cierreModal()
  {
    this.viewCtrl.dismiss();
  }

  public tarea = new TareaModelo("");
  // estas dos formas de crear las tareas deberían funcionar igual
  // public tarea:TareaModelo = {descripcion: "mi tarea nueva", importante: true, realizada: false}

  enviarTarea()
  {
    this.viewCtrl.dismiss(this.tarea);
    
  }
}
