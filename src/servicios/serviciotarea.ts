import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TareaModelo } from './TareaModelo'


/*
  Generated class for the ServiciotareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciotareaProvider {

  public tareas:TareaModelo[] = [];

  constructor(public http: HttpClient,
    private storage: Storage) {
    this.dameLista();
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
  }

  public removeTarea(tarea:TareaModelo)
  {
    let indice = this.tareas.indexOf(tarea);
    if(indice > -1)
    {
      // cambio el array quitando un elemento a partir de la posición 'índice'
      this.tareas.splice(indice, 1);
    }
  }

}
