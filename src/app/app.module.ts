import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PrimeraPaginaPage } from '../pages/primera-pagina/primera-pagina';
import { SegundaaPaginaPage } from '../pages/segundaa-pagina/segundaa-pagina';
import { ModalPage } from "../pages/modal/modal";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { IonicStorageModule } from '@ionic/storage';
import { ServiciotareaProvider } from '../servicios/serviciotarea';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// credenciales de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBqV6WaG2DBv4mEdvL5AZOamA5HOL_8Ygs",
  authDomain: "q-conex-fuego.firebaseapp.com",
  databaseURL: "https://q-conex-fuego.firebaseio.com",
  projectId: "q-conex-fuego",
  storageBucket: "q-conex-fuego.appspot.com",
  messagingSenderId: "629939915754"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrimeraPaginaPage,
    SegundaaPaginaPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrimeraPaginaPage,
    SegundaaPaginaPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    Geolocation,
    GoogleMaps,
    ServiciotareaProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
