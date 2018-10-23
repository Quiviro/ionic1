webpackJsonp([4],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeraPaginaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrimeraPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrimeraPaginaPage = (function () {
    function PrimeraPaginaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrimeraPaginaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrimeraPaginaPage');
    };
    PrimeraPaginaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-primera-pagina',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/primera-pagina/primera-pagina.html"*/`<!--\n  Generated template for the PrimeraPaginaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bicister</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Las bicicletas son para el verano</h1>\n  <p>\n    En invierno llueve y pasas mucho frío.\n  </p>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/primera-pagina/primera-pagina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrimeraPaginaPage);
    return PrimeraPaginaPage;
}());

//# sourceMappingURL=primera-pagina.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivadoPage = (function () {
    function PrivadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivadoPage');
    };
    PrivadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privado',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/privado/privado.html"*/`<!--\n  Generated template for the PrivadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Página privada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Bienvenido, agente 004</h2>\n  <p text-center color="danger">Este contenido es confidencial y secreto.</p>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/privado/privado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrivadoPage);
    return PrivadoPage;
}());

//# sourceMappingURL=privado.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		529,
		3
	],
	"../pages/primera-pagina/primera-pagina.module": [
		530,
		2
	],
	"../pages/privado/privado.module": [
		531,
		1
	],
	"../pages/segundaa-pagina/segundaa-pagina.module": [
		532,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareaModelo; });
var TareaModelo = (function () {
    // toLowerCase:any;
    function TareaModelo(descripcion, importante, realizada) {
        if (importante === void 0) { importante = false; }
        if (realizada === void 0) { realizada = false; }
        this.descripcion = descripcion;
        this.importante = importante;
        this.realizada = realizada;
    }
    return TareaModelo;
}());

//# sourceMappingURL=TareaModelo.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primera_pagina_primera_pagina__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__segundaa_pagina_segundaa_pagina__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.mienlace = __WEBPACK_IMPORTED_MODULE_4__primera_pagina_primera_pagina__["a" /* PrimeraPaginaPage */];
        this.futbol = __WEBPACK_IMPORTED_MODULE_5__segundaa_pagina_segundaa_pagina__["a" /* SegundaaPaginaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tareas" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Foto" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="mienlace" tabTitle="Bicister" tabIcon="bicycle"></ion-tab>\n  <ion-tab [root]="futbol" tabTitle="Fútbol" tabIcon="football"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_serviciotarea__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    // public tareas:TareaModelo[];
    function AboutPage(navCtrl, modCtrl, servicioTarea) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
        this.servicioTarea = servicioTarea;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        /* this.tareas = [
          new TareaModelo("Compras"),
          new TareaModelo("Deporte", true),
          new TareaModelo("Trabajo"),
          new TareaModelo("Médico"),
          new TareaModelo("Comida"),
          new TareaModelo("Ejercicio", true ),
          new TareaModelo("Departamento Q", true, true),
          new TareaModelo("Entrenar", true)
        ]; */
    };
    AboutPage.prototype.nuevaTarea = function () {
        var _this = this;
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */]);
        modal.present();
        // vamos a ver si con el cierre de modal han venido datos
        modal.onDidDismiss(function (tarea) {
            if (tarea) {
                _this.anadeTarea(tarea);
            }
        });
    };
    AboutPage.prototype.anadeTarea = function (tarea) {
        this.servicioTarea.addTarea(tarea);
        this.servicioTarea.salvarLocal();
    };
    AboutPage.prototype.estiloNuevo = function (tarea) {
        var estilos = {
            'font-weight': tarea.importante ? 600 : 'none',
            'color': tarea.realizada ? 'lightgray' : 'inherit'
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
    };
    AboutPage.prototype.borrarTarea = function (tarea) {
        this.servicioTarea.removeTarea(tarea);
    };
    AboutPage.prototype.comprobar = function (tarea) {
        // este if se puede optimizar
        if (!tarea.realizada) {
            tarea.realizada = true;
        }
        else {
            tarea.realizada = false;
        }
    };
    AboutPage.prototype.actualizarTarea = function (tarea) {
        this.servicioTarea.updateTarea(tarea);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tareas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!-- <ion-item-sliding *ngFor = \'let tarea of this.servicioTarea.tareas\'> -->\n    <ion-item-sliding *ngFor = \'let tarea of this.servicioTarea.observador\'>\n      <ion-item ion-item [ngStyle]=\'estiloNuevo(tarea)\'>\n        <ion-label>{{tarea.descripcion}} (<small>{{tarea.id}}</small>)</ion-label>\n        <ion-checkbox [checked]="tarea.realizada" (click)="comprobar(tarea)"></ion-checkbox>\n        <!-- <ion-checkbox [checked]="tarea.importante"></ion-checkbox> -->\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="micolor" margin (click)="borrarTarea(tarea)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n         &nbsp; &nbsp;\n        <button ion-button color="micolor" margin (click)="actualizarTarea(tarea)">\n          <ion-icon name="folder-open"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom (click)="nuevaTarea()">\n    <button ion-fab color="danger">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_serviciotarea__["a" /* ServiciotareaProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciotareaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TareaModelo__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';

/*
  Generated class for the ServiciotareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciotareaProvider = (function () {
    function ServiciotareaProvider(http, storage, modCtrl, afd) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.modCtrl = modCtrl;
        this.afd = afd;
        this.tareas = [];
        this.coleccion = this.afd.collection('tareas');
        this.coleccion.snapshotChanges().subscribe(function (listaTareas) {
            _this.observador = listaTareas.map(function (item) {
                return {
                    descripcion: item.payload.doc.data().descripcion,
                    importante: item.payload.doc.data().importante,
                    realizada: item.payload.doc.data().realizada,
                    id: item.payload.doc.id
                };
            });
        });
        this.dameLista();
    }
    ServiciotareaProvider.prototype.dameLista = function () {
        var _this = this;
        // cuando el almacenaje esté listo, ejecuta algo...
        this.storage.ready().then(function () {
            // ¿Hay alguna tarea ya?
            _this.storage.get('tareas').then(function (data) {
                var tareaLocal = [];
                if (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var tarea = data_1[_i];
                        tareaLocal.push(new __WEBPACK_IMPORTED_MODULE_3__TareaModelo__["a" /* TareaModelo */](tarea.descripcion, tarea.importante, tarea.realizada));
                    }
                }
                _this.tareas = tareaLocal;
            });
        });
        console.log(this.tareas);
    };
    ServiciotareaProvider.prototype.salvarLocal = function () {
        var _this = this;
        this.storage.ready().then(function () {
            // añade a tareas las nuevas tareas
            _this.storage.set('tareas', _this.tareas);
        });
    };
    ServiciotareaProvider.prototype.addTarea = function (tarea) {
        this.tareas.push(tarea);
        // acude a la lista de tareas
        // y graba la nueva tarea como registro en Realtime Database
        // this.afd.list('/tareas/').push(tarea);
        this.afd.collection('tareas').add({
            descripcion: tarea.descripcion,
            importante: tarea.importante,
            realizada: tarea.realizada
        }).then();
    };
    /*  public introduceLocal()
     {
       // revisa lo que tiene en local y luego lo sube a Firebase
       // aunque este método no es fiable 100%
       for (let i = 0; i < this.tareas.length; i++) {
         this.afd.list('/tareas/').push(this.tareas[i]);
       }
     } */
    ServiciotareaProvider.prototype.removeTarea = function (tarea) {
        // LOCAL
        var indice = this.tareas.indexOf(tarea);
        if (indice > -1) {
            // cambio el array quitando un elemento a partir de la posición 'índice'
            this.tareas.splice(indice, 1);
            this.salvarLocal();
        }
        // FIREBASE
        this.afd.doc("tareas/" + tarea.id).delete().then();
    };
    ServiciotareaProvider.prototype.updateTarea = function (tarea) {
        var _this = this;
        // el modal crea tareas, pero quiero modificar una ya creada
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__["a" /* ModalPage */], { tarea: tarea });
        modal.present();
        modal.onDidDismiss(function (tarea) {
            if (tarea) {
                _this.salvarLocal();
            }
        });
    };
    ServiciotareaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"]])
    ], ServiciotareaProvider);
    return ServiciotareaProvider;
}());

//# sourceMappingURL=serviciotarea.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, camera, geolocation, platform, gooMapa) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.geolocation = geolocation;
        this.platform = platform;
        this.gooMapa = gooMapa;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    ContactPage.prototype.loadMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.map = _this.gooMapa.create('map_canvas');
            _this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function (data) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    var miPosicion = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
                    _this.map.animateCamera({ target: miPosicion, zoom: 4 });
                    _this.map.addMarker({ position: miPosicion, title: 'Ubicación' });
                });
            });
        });
    };
    ContactPage.prototype.foto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            // vamos a guardar automáticamente la foto en un álbum
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ContactPage.prototype.mostrarFoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: false,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.muestraFoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ContactPage.prototype.localizar = function () {
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Realiza foto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n  <ion-list>\n    <ion-item>\n      <ion-label>Texto 1</ion-label>\n      <ion-input placeholder="input 1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Texto 2</ion-label>\n      <ion-input placeholder="input 2"></ion-input>\n    </ion-item>\n  </ion-list>\n  \n  <hr>\n    <ion-item>\n      \n      <button large ion-button secondary (click)="foto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Sonríe\n      </button>\n    </ion-item>\n    <ion-item>\n      Mostrar foto\n      <button large ion-button secondary (click)="mostrarFoto()">\n        <ion-icon name="image"></ion-icon>\n      </button>\n    </ion-item>\n\n  <img *ngIf="base64Image" src=\'{{base64Image}}\'>\n  <img *ngIf="muestraFoto" src=\'{{base64Image}}\'>\n\n  <ion-item text-center>\n      Mapa\n    <button large ion-button (click)="localizar()" [ngStyle]="{\'display\': \'block\', \'margin\': \'auto\'}">\n    <ion-icon name="map" ></ion-icon>\n    </button>\n  </ion-item>\n  <div id="map_canvas"></div>\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segundaa_pagina_segundaa_pagina__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privado_privado__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, autFire) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.autFire = autFire;
        // privado para acceder sólo desde esta página
        this.user = {
            email: '',
            pass: ''
        };
    }
    // esto se ejecuta al cargar la página
    HomePage.prototype.ionViewDidLoad = function () {
        this.compruebaLogin();
    };
    HomePage.prototype.primeraFuncion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__segundaa_pagina_segundaa_pagina__["a" /* SegundaaPaginaPage */]);
    };
    HomePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
        modal.present();
    };
    HomePage.prototype.acceso = function () {
        var _this = this;
        this.autFire.auth.signInWithEmailAndPassword(this.user.email, this.user.pass).then(function () {
            console.log("usuario");
            // this.navCtrl.push(PrivadoPage);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__privado_privado__["a" /* PrivadoPage */]);
        }).catch(function (error) {
            return alert(error);
        });
    };
    HomePage.prototype.registro = function () {
        this.autFire.auth.createUserWithEmailAndPassword(this.user.email, this.user.pass).then(function () {
            alert("Usuario registrado correctamente");
            // this.navCtrl.push(PrivadoPage);
        }).catch(function (error) {
            return alert(error);
        });
    };
    HomePage.prototype.compruebaLogin = function () {
        this.autFire.auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("usuario con acceso");
                console.log("user");
                /*         var displayName = user.displayName;
                        var email = user.email;
                        var emailVerified = user.emailVerified;
                        var photoURL = user.photoURL;
                        var isAnonymous = user.isAnonymous;
                        var uid = user.uid;
                        var providerData = user.providerData; */
                // ...
            }
            else {
                // User is signed out.
                console.log("no hay sesión iniciada");
                // ...
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="micolor">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Botoneando</h2>\n  <p>\n    <button ion-button color="micolor" round (click)=\'primeraFuncion()\'>\n      NIN\n    </button>\n    <button ion-button color="light">Light</button>\n    <button ion-button>Default</button>\n    <button ion-button color="secondary">\n      3\n      <ion-icon name="home"></ion-icon>\n      Q\n    </button>\n    <button ion-button color="danger">Danger</button>\n    <button ion-button color="dark">Dark</button>\n  </p>\n  <br>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]=\'user.email\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]=\'user.pass\'></ion-input>\n    </ion-item>\n    <button ion-button (click)=\'acceso()\'>Acceso</button>\n    <button ion-button (click)=\'registro()\'>Registro</button>\n    <button ion-button (click)=\'borraUsuario()\' *ngIf=\'user\'>Borrar usuario</button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_primera_pagina_primera_pagina__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_segundaa_pagina_segundaa_pagina__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_privado_privado__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__servicios_serviciotarea__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_fire_database__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_fire_auth__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// credenciales de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBqV6WaG2DBv4mEdvL5AZOamA5HOL_8Ygs",
    authDomain: "q-conex-fuego.firebaseapp.com",
    databaseURL: "https://q-conex-fuego.firebaseio.com",
    projectId: "q-conex-fuego",
    storageBucket: "q-conex-fuego.appspot.com",
    messagingSenderId: "629939915754"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_primera_pagina_primera_pagina__["a" /* PrimeraPaginaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_segundaa_pagina_segundaa_pagina__["a" /* SegundaaPaginaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_privado_privado__["a" /* PrivadoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/primera-pagina/primera-pagina.module#PrimeraPaginaPageModule', name: 'PrimeraPaginaPage', segment: 'primera-pagina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privado/privado.module#PrivadoPageModule', name: 'PrivadoPage', segment: 'privado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segundaa-pagina/segundaa-pagina.module#SegundaaPaginaPageModule', name: 'SegundaaPaginaPage', segment: 'segundaa-pagina', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_22__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_primera_pagina_primera_pagina__["a" /* PrimeraPaginaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_segundaa_pagina_segundaa_pagina__["a" /* SegundaaPaginaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_privado_privado__["a" /* PrivadoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__angular_fire_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_18__servicios_serviciotarea__["a" /* ServiciotareaProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/app/app.html"*/`<ion-nav [root]="rootPage"> </ion-nav>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_TareaModelo__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importo mi archivo creado a mano con el constructor de la clase

var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tarea = new __WEBPACK_IMPORTED_MODULE_2__servicios_TareaModelo__["a" /* TareaModelo */]("");
        this.titulo = "Nueva tarea";
        this.boton = "Añade tarea";
        // navParams sirve para recoger valores de variables de otras páginas
        if (this.navParams.get('tarea')) {
            this.tarea = this.navParams.get('tarea');
            this.titulo = "Actualiza tarea";
            this.boton = "Aplica cambios";
        }
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.cierreModal = function () {
        this.viewCtrl.dismiss();
    };
    // estas dos formas de crear las tareas deberían funcionar igual
    // public tarea:TareaModelo = {descripcion: "mi tarea nueva", importante: true, realizada: false}
    ModalPage.prototype.enviarTarea = function () {
        this.viewCtrl.dismiss(this.tarea);
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/modal/modal.html"*/`<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>{{titulo}}</ion-title>\n    <button ion-button (click)="cierreModal()" >\n      <ion-icon name="arrow-back" >\n          <span showWhen="ios">Back</span>\n      </ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form (ngSubmit)=\'enviarTarea()\'>\n      <ion-item>\n        <ion-input clearInput placeholder="Añada tarea..." name="descripcion" required [(ngModel)]="tarea.descripcion" #estadoCampo=\'ngModel\'>\n          {{tarea.descripcion}}\n        </ion-input>\n      </ion-item>\n      <!-- voy a mirar las clases que incluye ionic por sí mismo\n      si no hay nada escrito, muestra el mensaje de advertencia -->\n      <ion-item [hidden]=\'estadoCampo.valid || estadoCampo.untouched\'>\n        Campo obligatorio\n      </ion-item>\n      <ion-item>\n        <ion-label>¿Es importante?</ion-label>\n        <ion-checkbox [(ngModel)]="tarea.importante" name="importante">\n          {{tarea.importante}}\n        </ion-checkbox>\n      </ion-item>\n      <!-- el botón se activará cuando haya algo escrito -->\n      <button ion-button [disabled]="!estadoCampo.valid" type="submit">{{boton}}</button>\n\n      <!-- hecho por Ángel -->\n      <button type="submit" *ngIf="" (click)=\'enviar()\'>Añade tarea</button>\n      <button type="submit" *ngIf="" (click)=\'actualiza()\'>Añade tarea</button>\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegundaaPaginaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SegundaaPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SegundaaPaginaPage = (function () {
    function SegundaaPaginaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tareas = [
            { titulo: "Pádel", color: "red", icono: "baseball" },
            { titulo: "Hospital", color: "blue", icono: "medical" },
            { titulo: "Odio madrugar", color: "black", icono: "alarm" },
            { titulo: "Patrulla canina", color: "brown", icono: "paw" },
            { titulo: "B.A.R.", color: "orange", icono: "beer" },
            { titulo: "Urano", color: "lime", icono: "planet" }
        ];
    }
    SegundaaPaginaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SegundaaPaginaPage');
    };
    SegundaaPaginaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-segundaa-pagina',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/segundaa-pagina/segundaa-pagina.html"*/`<!--\n  Generated template for the SegundaaPaginaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nine Inch Nails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="assets/imgs/nin-live.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n      </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n      <br>\n      <ion-list>\n          <button ion-item *ngFor = \'let tarea of tareas\'>\n            <ion-icon name="{{tarea.icono}}" item-start \n            [ngStyle]="{\'color\':tarea.color}" ></ion-icon>\n            {{tarea.titulo}}\n          </button>\n      \n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/segundaa-pagina/segundaa-pagina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SegundaaPaginaPage);
    return SegundaaPaginaPage;
}());

//# sourceMappingURL=segundaa-pagina.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map