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
    // navParams sirve para recoger valores de variables de otras páginas
    if(this.navParams.get('tarea'))
    {
      this.tarea = this.navParams.get('tarea');
      this.titulo = "Actualiza tarea";
      this.boton = "Aplica cambios";
    }
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

  public titulo:string = "Nueva tarea";
  public boton:string = "Añade tarea"
}
