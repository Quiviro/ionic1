import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TareaModelo } from './TareaModelo';
import { ModalPage } from '../pages/modal/modal';
import { ModalController } from 'ionic-angular';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


/*
  Generated class for the ServiciotareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciotareaProvider {

  public tareas:TareaModelo[] = [];

  public coleccion: AngularFirestoreCollection<TareaModelo>;
  public observador: TareaModelo[];

  constructor(public http: HttpClient,
    private storage: Storage,
    public modCtrl: ModalController,
    public afd:AngularFirestore) {
    this.dameLista()
  }

  private dameLista()
  {
    // cuando el almacenaje esté listo, ejecuta algo...
    this.storage.ready().then(() => {
      // ¿Hay alguna tarea ya?
      this.storage.get('tareas').then(data => {
        let tareaLocal:TareaModelo[] = [];
        if(data)
        {
          for(let tarea of data)
          {
            tareaLocal.push(new TareaModelo(
              tarea.descripcion, 
              tarea.importante, 
              tarea.realizada
              ));
          }
        }
        this.tareas = tareaLocal;
      });
    });
  }

  public salvarLocal()
  {
    this.storage.ready().then(() => {
      // añade a tareas las nuevas tareas
      this.storage.set('tareas', this.tareas);
    });
  }

  public addTarea(tarea:TareaModelo)
  {
    this.tareas.push(tarea);
    // acude a la lista de tareas
    // y graba la nueva tarea como registro en Realtime Database
    this.afd.list('/tareas/').push(tarea);
  }

  public introduceLocal()
  {
    // revisa lo que tiene en local y luego lo sube a Firebase
    // aunque este método no es fiable 100%
    for (let i = 0; i < this.tareas.length; i++) {
      this.afd.list('/tareas/').push(this.tareas[i]);      
    }
  }

  public removeTarea(tarea:TareaModelo)
  {
    let indice = this.tareas.indexOf(tarea);
    if(indice > -1)
    {
      // cambio el array quitando un elemento a partir de la posición 'índice'
      this.tareas.splice(indice, 1);
      this.salvarLocal();
    }
  }

  public updateTarea(tarea:TareaModelo)
  {
    // el modal crea tareas, pero quiero modificar una ya creada
    const modal = this.modCtrl.create(ModalPage, {tarea});
    modal.present();
    modal.onDidDismiss(tarea => {
      if(tarea)
      {
        this.salvarLocal();
      }
    });

  }

}
