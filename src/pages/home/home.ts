import { Component } from '@angular/core';
import { SegundaaPaginaPage } from '../segundaa-pagina/segundaa-pagina';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from "../modal/modal";
import { AngularFireAuth } from '@angular/fire/auth';
import { PrivadoPage } from '../privado/privado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // privado para acceder sólo desde esta página
  private user = {
    email:'',
    pass:''
  }

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public autFire:AngularFireAuth){
  }

  primeraFuncion()
  {
    this.navCtrl.push(SegundaaPaginaPage);
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  acceso()
  {
    this.autFire.auth.signInWithEmailAndPassword(
      this.user.email, 
      this.user.pass).then(() => 
      {
        console.log("usuario");
        // this.navCtrl.push(PrivadoPage);
        this.navCtrl.setRoot(PrivadoPage);
      }).catch(error =>
        alert(error)
        );
    
  }
  registro()
  {
    this.autFire.auth.createUserWithEmailAndPassword(
      this.user.email, 
      this.user.pass).then(() => 
      {
        alert("Usuario registrado correctamente");
        // this.navCtrl.push(PrivadoPage);
      }).catch(error =>
        alert(error)
        );
    
  }
}
