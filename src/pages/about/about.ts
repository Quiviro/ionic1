import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from "../modal/modal";
import { TareaModelo } from '../../servicios/TareaModelo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public tareas:TareaModelo[];

  constructor(public navCtrl: NavController, public modCtrl: ModalController) {

  }

  ionViewDidLoad()
  {
    this.tareas = [
      new TareaModelo("Compras"),
      new TareaModelo("Deporte", true),
      new TareaModelo("Trabajo"),
      new TareaModelo("Médico"),
      new TareaModelo("Comida"),
      new TareaModelo("Ejercicio", true ),
      new TareaModelo("Departamento Q", true, true),
      new TareaModelo("Entrenar", true)
    ];
  }

  nuevaTarea()
  {
    const modal = this.modCtrl.create(ModalPage);
    modal.present();
    // vamos a ver si con el cierre de modal han venido datos
    modal.onDidDismiss(tarea => {
      if(tarea)
      {
        this.anadeTarea(tarea);
      }
    });
  }

  anadeTarea(tarea:TareaModelo)
  {
    this.tareas.push(tarea);
  }

  estiloNuevo(tarea:TareaModelo)
  {
    let estilos = {
      'font-weight': tarea.importante ? 600:'none',
      'color': tarea.realizada ? 'lightgray':'inherit'
    };
 /*    if(tarea.importante)
    {
      estilos = {'font-weight': '600'};
    }
    if(tarea.realizada)
    {
      estilos = {'text-decoration': 'line-through'};
    } */
    return estilos;
  }

}
