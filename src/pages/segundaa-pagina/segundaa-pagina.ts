import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaaPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segundaa-pagina',
  templateUrl: 'segundaa-pagina.html',
})
export class SegundaaPaginaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaaPaginaPage');
  }

  tareas:Array<any> = [
    {titulo:"Pádel", color:"red", icono:"baseball"},
    {titulo:"Hospital", color:"blue", icono:"medical"},
    {titulo:"Odio madrugar", color:"black", icono:"alarm"},
    {titulo:"Patrulla canina", color:"brown", icono:"paw"},
    {titulo:"B.A.R.", color:"orange", icono:"beer"},
    {titulo:"Urano", color:"lime", icono:"planet"}
  ];

}
