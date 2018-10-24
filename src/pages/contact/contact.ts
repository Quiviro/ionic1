import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment, LatLng } from '@ionic-native/google-maps';
import { SegundaaPaginaPage } from "../segundaa-pagina/segundaa-pagina";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  base64Image:any;
  muestraFoto:any;
  map: GoogleMap;

  constructor(
    public navCtrl: NavController, 
    private camera: Camera, 
    private geolocation: Geolocation,
    public platform: Platform,
    public gooMapa: GoogleMaps
    ) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.platform.ready().then(() => {
      this.map = this.gooMapa.create('map_canvas');
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {
        this.geolocation.getCurrentPosition().then(resp => {
          let miPosicion = new LatLng(resp.coords.latitude,resp.coords.longitude);
          this.map.animateCamera({target:miPosicion, zoom:4});
          this.map.addMarker({position:miPosicion, title:'Ubicación'});
        });
      });
    });

  }

  foto()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // vamos a guardar automáticamente la foto en un álbum
      saveToPhotoAlbum: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  mostrarFoto()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.muestraFoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  localizar()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  cargaPagina()
  {
    this.navCtrl.push(SegundaaPaginaPage);
  }
  

}
