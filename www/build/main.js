webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeraPaginaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/modal.module": [
		278,
		2
	],
	"../pages/primera-pagina/primera-pagina.module": [
		279,
		1
	],
	"../pages/segundaa-pagina/segundaa-pagina.module": [
		280,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareaModelo; });
var TareaModelo = (function () {
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__primera_pagina_primera_pagina__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__segundaa_pagina_segundaa_pagina__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tareas" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="mienlace" tabTitle="Bicister" tabIcon="bicycle"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__ = __webpack_require__(154);
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
    function AboutPage(navCtrl, modCtrl) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.tareas = [
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Compras"),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Deporte", true),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Trabajo"),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Médico"),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Comida"),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Ejercicio", true),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Departamento Q", true, true),
            new __WEBPACK_IMPORTED_MODULE_3__servicios_TareaModelo__["a" /* TareaModelo */]("Entrenar", true)
        ];
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
        this.tareas.push(tarea);
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
        var indice = this.tareas.indexOf(tarea);
        if (indice > -1) {
            // cambio el array quitando un elemento a partir de la posición 'índice'
            this.tareas.splice(indice, 1);
        }
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
        // el modal crea tareas, pero quiero modificar una ya creada
        // this.navCtrl.push(ModalPage);
        var modal = this.modCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { tarea: tarea });
        modal.present();
        // modal.onDidDismiss();
        /*     let posicion = this.tareas.indexOf(tarea);
            console.log(posicion);
            console.log(tarea);  */
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tareas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor = \'let tarea of tareas\'>\n      <ion-item ion-item [ngStyle]=\'estiloNuevo(tarea)\'>\n        <ion-label>{{tarea.descripcion}}</ion-label>\n        <ion-checkbox [checked]="tarea.realizada" (click)="comprobar(tarea)"></ion-checkbox>\n        <!-- <ion-checkbox [checked]="tarea.importante"></ion-checkbox> -->\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="micolor" margin (click)="borrarTarea(tarea)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n         &nbsp; &nbsp;\n        <button ion-button color="micolor" margin (click)="actualizarTarea(tarea)">\n          <ion-icon name="folder-open"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom (click)="nuevaTarea()">\n    <button ion-fab color="danger">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segundaa_pagina_segundaa_pagina__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(50);
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
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.primeraFuncion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__segundaa_pagina_segundaa_pagina__["a" /* SegundaaPaginaPage */]);
    };
    HomePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="micolor">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Botoneando again</h2>\n  <p>\n    <button ion-button color="micolor" round (click)=\'primeraFuncion()\'>\n      NIN\n    </button>\n    <button ion-button color="light">Light</button>\n    <button ion-button>Default</button>\n    <button ion-button color="secondary">\n      3\n      <ion-icon name="home" (click)="presentModal()"></ion-icon>\n      Q\n    </button>\n    <button ion-button color="danger">Danger</button>\n    <button ion-button color="dark">Dark</button>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_primera_pagina_primera_pagina__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_segundaa_pagina_segundaa_pagina__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/primera-pagina/primera-pagina.module#PrimeraPaginaPageModule', name: 'PrimeraPaginaPage', segment: 'primera-pagina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segundaa-pagina/segundaa-pagina.module#SegundaaPaginaPageModule', name: 'SegundaaPaginaPage', segment: 'segundaa-pagina', priority: 'low', defaultHistory: [] }
                    ]
                })
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
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_TareaModelo__ = __webpack_require__(154);
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
            selector: 'page-modal',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/modal/modal.html"*/`<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>{{titulo}}</ion-title>\n    <button ion-button (click)="cierreModal()" >\n      <ion-icon name="arrow-back" >\n          <span showWhen="ios">Back</span>\n      </ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form (ngSubmit)=\'enviarTarea()\'>\n      <ion-item>\n        <ion-input clearInput placeholder="Añada tarea..." name="descripcion" required [(ngModel)]="tarea.descripcion" #estadoCampo=\'ngModel\'>\n          {{tarea.descripcion}}\n        </ion-input>\n      </ion-item>\n      <!-- voy a mirar las clases que incluye ionic por sí mismo\n      si no hay nada escrito, muestra el mensaje de advertencia -->\n      <ion-item [hidden]=\'estadoCampo.valid || estadoCampo.untouched\'>\n        Campo obligatorio\n      </ion-item>\n      <ion-item>\n        <ion-label>¿Es importante?</ion-label>\n        <ion-checkbox [(ngModel)]="tarea.importante" name="importante">\n          {{tarea.importante}}\n        </ion-checkbox>\n      </ion-item>\n      <!-- el botón se activará cuando haya algo escrito -->\n      <button ion-button [disabled]="!estadoCampo.valid" type="submit">{{boton}}</button>\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegundaaPaginaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-segundaa-pagina',template:/*ion-inline-start:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/segundaa-pagina/segundaa-pagina.html"*/`<!--\n  Generated template for the SegundaaPaginaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nine Inch Nails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="../../assets/imgs/nin-live.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n      </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n      <br>\n      <ion-list>\n          <button ion-item *ngFor = \'let tarea of tareas\'>\n            <ion-icon name="{{tarea.icono}}" item-start \n            [ngStyle]="{\'color\':tarea.color}" ></ion-icon>\n            {{tarea.titulo}}\n          </button>\n      \n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/Dev2/Documents/201810-JavaScript_Ionic-CFTIC/Ionic/ionic1/src/pages/segundaa-pagina/segundaa-pagina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SegundaaPaginaPage);
    return SegundaaPaginaPage;
}());

//# sourceMappingURL=segundaa-pagina.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map