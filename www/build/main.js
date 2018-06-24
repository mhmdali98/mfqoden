webpackJsonp([11],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmfqod_addmfqod__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addmfqodh_addmfqodh__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypost_mypost__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_services_auth_services__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, authServicesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServicesProvider = authServicesProvider;
        this.goToAddMfqod;
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.goToAddMfqod = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addmfqod_addmfqod__["a" /* AddmfqodPage */]);
    };
    AddPage.prototype.goToAddMfqodh = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addmfqodh_addmfqodh__["a" /* AddmfqodhPage */]);
    };
    AddPage.prototype.goToMyPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mypost_mypost__["a" /* MypostPage */]);
    };
    AddPage.prototype.goToLogout = function () {
        this.authServicesProvider.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\add\add.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>اضافة</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button color="secondary" outline  large block (click)="goToAddMfqod()">اضافة شخص مفقود</button><br>\n\n  <button ion-button color="secondary" outline  large block (click)="goToAddMfqodh()">اضافة شئ مفقود</button><br>\n\n  <button ion-button color="" outline large  block (click)="goToMyPost()">منشوراتي</button><br>\n\n  <button ion-button color="danger" outline large block (click)="goToLogout()">تسجيل خروج</button><br>\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmfqodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddmfqodPage = /** @class */ (function () {
    function AddmfqodPage(navCtrl, navParams, serviceDataProvider, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.data = {
            namep: '',
            phone: '',
            namem: '',
            gander: '',
            age: '',
            commint: '',
            map: '',
            uid: ''
        };
        this.auth.authState.subscribe(function (au) {
            if (auth) {
                _this.data.uid = au.uid;
            }
        });
    }
    AddmfqodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddmfqodPage');
    };
    AddmfqodPage.prototype.addData = function (data) {
        var _this = this;
        this.serviceDataProvider.addData(data).then(function (ref) { return _this.showAlert(); });
    };
    AddmfqodPage.prototype.end = function () {
        this.navCtrl.pop();
    };
    AddmfqodPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'تم الاضافة',
            subTitle: 'شكرا لمساعدكم ',
            buttons: ['تم'],
        });
        alert.present();
        this.end();
    };
    AddmfqodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmfqod',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\addmfqod\addmfqod.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>اضافة شخص مفقود</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>اسم صاحب المنشور</ion-label>\n\n      <ion-input [(ngModel)]="data.namep" type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>رقم الهاتف</ion-label>\n\n      <ion-input [(ngModel)]="data.phone" type="text"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label floating>اسم الشخص المفقود</ion-label>\n\n      <ion-input [(ngModel)]="data.namem" type="text"></ion-input>\n\n    </ion-item>\n\n<br>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>الجنس</ion-label>\n\n        <ion-select [(ngModel)]="data.gander" multiple="false" okText="تم">\n\n          <ion-option value="ذكر" selected="true">ذكر</ion-option>\n\n          <ion-option value="انثى">انثى</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>لعمر</ion-label>\n\n        <ion-select [(ngModel)]="data.age" multiple="false" cancelText="الغاء" okText="تم!">\n\n          <ion-option value="0" selected="true"></ion-option>\n\n          <ion-option value="من 0 سنه الى 10 سنوات">من 0 سنه الى 10 سنوات</ion-option>\n\n          <ion-option value="من 11 سنه الى 20 سنه">من 11 سنه الى 20 سنه</ion-option>\n\n          <ion-option value="من 21 سنه الى 30 سنه">من 21 سنه الى 30 سنه</ion-option>\n\n          <ion-option value="من 31 سنه الى 40 سنه">من 31 سنه الى 40 سنه</ion-option>\n\n          <ion-option value="من 41 سنه فما فوق"> من 41 سنه فما فوق</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>اضف وصف عن المفقود</ion-label>\n\n      <ion-input [(ngModel)]="data.commint" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>موقع تواجد المفقود</ion-label>\n\n      <ion-input [(ngModel)]="data.map" type="text"></ion-input>\n\n    </ion-item>\n\n    \n\n    <button ion-button block (click)="addData(data)">اضافة</button>\n\n\n\n\n\n\n\n\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\addmfqod\addmfqod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AddmfqodPage);
    return AddmfqodPage;
}());

//# sourceMappingURL=addmfqod.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmfqodhPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddmfqodhPage = /** @class */ (function () {
    function AddmfqodhPage(navCtrl, navParams, serviceDataProvider, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.datah = {
            namep: '',
            phone: '',
            namem: '',
            type: '',
            commint: '',
            map: ''
        };
        this.auth.authState.subscribe(function (au) {
            if (auth) {
                _this.datah.uid = au.uid;
            }
        });
    }
    AddmfqodhPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddmfqodhPage');
    };
    AddmfqodhPage.prototype.addData = function (datah) {
        var _this = this;
        this.serviceDataProvider.addDatah(datah).then(function (ref) { return _this.showAlert(); });
    };
    AddmfqodhPage.prototype.end = function () {
        this.navCtrl.pop();
    };
    AddmfqodhPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'تم الاضافة',
            subTitle: 'شكرا لمساعدكم ',
            buttons: ['تم'],
        });
        alert.present();
        this.end();
    };
    AddmfqodhPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmfqodh',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\addmfqodh\addmfqodh.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>اضافه شئ مفقود</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>اسم صاحب المنشور</ion-label>\n\n      <ion-input [(ngModel)]="datah.namep" type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>رقم الهاتف</ion-label>\n\n      <ion-input [(ngModel)]="datah.phone" type="text"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label floating>اسم الشئ المفقود</ion-label>\n\n      <ion-input [(ngModel)]="datah.namem" type="text"></ion-input>\n\n    </ion-item>\n\n<br>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>النوع</ion-label>\n\n        <ion-select [(ngModel)]="datah.type" multiple="false" okText="تم">\n\n          <ion-option value="مجوهرات" selected="true">مجوهرات</ion-option>\n\n          <ion-option value="نقود">نقود</ion-option>\n\n          <ion-option value="مستمسكات">مستمسكات</ion-option>\n\n          <ion-option value="هاتف ">هاتف</ion-option>\n\n          <ion-option value="اخرى">اخرى</ion-option>\n\n\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n \n\n\n\n    <ion-item>\n\n      <ion-label floating>اضف وصف عن الشئ المفقود</ion-label>\n\n      <ion-input [(ngModel)]="datah.commint" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>موقع تواجد الشئ المفقود</ion-label>\n\n      <ion-input [(ngModel)]="datah.map" type="text"></ion-input>\n\n    </ion-item>\n\n    \n\n    <button ion-button block (click)="addData(datah)">اضافة</button>\n\n\n\n\n\n\n\n\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\addmfqodh\addmfqodh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AddmfqodhPage);
    return AddmfqodhPage;
}());

//# sourceMappingURL=addmfqodh.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MypostPage = /** @class */ (function () {
    function MypostPage(navCtrl, navParams, serviceDataProvider, alertCtrl, db, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.data = {
            key: '',
            namep: '',
            phone: '',
            namem: '',
            gander: '',
            age: '',
            commint: '',
            map: '',
            uid: ''
        };
        this.datah = {
            key: '',
            namep: '',
            phone: '',
            namem: '',
            type: '',
            commint: '',
            map: '',
            uid: ''
        };
        this.itemArray = [];
        this.myObject = [];
        this.itemArrayh = [];
        this.myObjecth = [];
        this.dataList = db.object('addmfqod');
        this.dataList.snapshotChanges().subscribe(function (action) {
            var y = action.payload.toJSON();
            y['key'] = action.key;
            _this.itemArray.push(action.payload.val());
            _this.myObject = Object.entries(_this.itemArray[0]);
            console.log(_this.myObject);
        });
        this.dataListh = db.object('addmfqodh');
        this.dataListh.snapshotChanges().subscribe(function (action) {
            if (action.payload.val() == null || action.payload.val() == undefined) {
                console.log('no data');
            }
            else {
                _this.itemArrayh.push(action.payload.val());
                _this.myObjecth = Object.entries(_this.itemArrayh[0]);
            }
        });
        this.auth.authState.subscribe(function (au) {
            if (auth) {
                _this.uiid = au.uid;
            }
        });
    }
    MypostPage.prototype.ionViewDidLoad = function () {
    };
    MypostPage.prototype.remove = function (data) {
        var _this = this;
        this.serviceDataProvider.remove(data).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */]);
            console.log('removed');
        });
    };
    MypostPage.prototype.removeh = function (datah) {
        var _this = this;
        this.serviceDataProvider.removeh(datah).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */]);
            console.log('removed');
        });
    };
    MypostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypost',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mypost\mypost.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>منشوراتي</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor=\'let data of myObject\'>\n\n    <ion-item-sliding *ngIf="data[1].uid === uiid">\n\n        \n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>{{data[1].namem}}</h2>\n\n      </ion-item>\n\n      \n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger"(click)="remove(data[0])">\n\n          <ion-icon name="md-trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n      \n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-list *ngFor=\'let dat of myObjecth\'>\n\n    \n\n    <ion-item-sliding *ngIf="dat[1].uid === uiid">\n\n      \n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>{{dat[1].namem}}</h2>\n\n      </ion-item>\n\n      \n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger"\n\n        (click)="removeh(dat[0])"\n\n        >\n\n          <ion-icon name="md-trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    \n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mypost\mypost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MypostPage);
    return MypostPage;
}());

//# sourceMappingURL=mypost.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfqodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MfqodPage = /** @class */ (function () {
    function MfqodPage(navCtrl, navParams, db, ServiceDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemArray = [];
        this.myObject = [];
        this.dataList = db.object('addmfqod');
        this.dataList.snapshotChanges().subscribe(function (action) {
            if (action.payload.val() == null || action.payload.val() == undefined) {
                console.log('no data');
            }
            else {
                _this.itemArray.push(action.payload.val());
                _this.myObject = Object.entries(_this.itemArray[0]);
                _this.initializeItems();
            }
        });
    }
    MfqodPage.prototype.ionViewDidLoad = function () {
    };
    MfqodPage.prototype.initializeItems = function () {
        this.items = this.myObject.reverse();
    };
    MfqodPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item[1]['namem'].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MfqodPage.prototype.getItemsgan = function (ev) {
        this.initializeItems();
        var valg = ev;
        if (valg && valg.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item[1]['gander'].toLowerCase().indexOf(valg.toLowerCase()) > -1);
            });
        }
    };
    MfqodPage.prototype.getItemsage = function (ev) {
        this.initializeItems();
        var vala = ev;
        if (vala && vala.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item[1]['age'].toLowerCase().indexOf(vala.toLowerCase()) > -1);
            });
        }
    };
    MfqodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mfqod',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mfqod\mfqod.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>المفقودين</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-right>\n\n    <ion-searchbar (ionInput)=\'getItems($event)\'></ion-searchbar>\n\n\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label>الجنس</ion-label>\n\n          <ion-select (ionChange)=\'getItemsgan($event)\'>\n\n              <ion-option value="">الكل</ion-option>\n\n            <ion-option value="ذكر">ذكر</ion-option>\n\n            <ion-option value="انثى">انثى</ion-option>\n\n           \n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>العمر</ion-label>\n\n          <ion-select (ionChange)=\'getItemsage($event)\'>\n\n              <ion-option value="">الكل</ion-option>\n\n              <ion-option value="من 0 سنه الى 10 سنوات">من 0 سنه الى 10 سنوات</ion-option>\n\n              <ion-option value="من 11 سنه الى 20 سنه">من 11 سنه الى 20 سنه</ion-option>\n\n              <ion-option value="من 21 سنه الى 30 سنه">من 21 سنه الى 30 سنه</ion-option>\n\n              <ion-option value="من 31 سنه الى 40 سنه">من 31 سنه الى 40 سنه</ion-option>\n\n              <ion-option value="من 41 سنه فما فوق"> من 41 سنه فما فوق</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n<div>\n\n  <ion-card *ngFor=\'let dat of items\'>\n\n    <img src="../../assets/imgs/logo.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title>اسم المفقود:\n\n    {{dat[1].namem}}\n\n      </ion-card-title>\n\n      <p>\n\n        الجنس: {{dat[1].gander}} , العمر: {{dat[1].age}}<br>تفاصل اخرى: {{dat[1].commint}}<br>موقع تواجده: {{dat[1].map}}<br>اسم صاحب المنشور: {{dat[1].namep}}<br>رقم الهاتف: {{dat[1].phone}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mfqod\mfqod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__["a" /* ServiceDataProvider */]])
    ], MfqodPage);
    return MfqodPage;
}());

//# sourceMappingURL=mfqod.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfqodhPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MfqodhPage = /** @class */ (function () {
    function MfqodhPage(navCtrl, navParams, db, ServiceDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemArrayh = [];
        this.myObjecth = [];
        this.dataListh = db.object('addmfqodh');
        this.dataListh.snapshotChanges().subscribe(function (action) {
            if (action.payload.val() == null || action.payload.val() == undefined) {
                console.log('no data');
            }
            else {
                _this.itemArrayh.push(action.payload.val());
                _this.myObjecth = Object.entries(_this.itemArrayh[0]);
                _this.initializeItems();
            }
        });
    }
    MfqodhPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MfqodhPage');
    };
    MfqodhPage.prototype.initializeItems = function () {
        this.items = this.myObjecth.reverse();
    };
    MfqodhPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item[1]['namem'].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MfqodhPage.prototype.getItemstype = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var valt = ev;
        // if the value is an empty string don't filter the items
        if (valt && valt.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item[1]['type'].toLowerCase().indexOf(valt.toLowerCase()) > -1);
            });
        }
    };
    MfqodhPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mfqodh',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mfqodh\mfqodh.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>المفقودات</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-right>\n\n   \n\n\n\n<div> <ion-searchbar (ionInput)=\'getItems($event)\'></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>النوع</ion-label>\n\n      <ion-select (ionChange)=\'getItemstype($event)\'>\n\n          <ion-option value="">الكل</ion-option>\n\n          <ion-option value="مجوهرات" >مجوهرات</ion-option>\n\n          <ion-option value="نقود">نقود</ion-option>\n\n          <ion-option value="مستمسكات">مستمسكات</ion-option>\n\n          <ion-option value="هاتف ">هاتف</ion-option>\n\n          <ion-option value="اخرى">اخرى</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-card *ngFor=\'let dat of items\'>\n\n     <img src="../../assets/imgs/logo.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title>اسم الشئ:\n\n    {{dat[1].namem}}\n\n      </ion-card-title>\n\n      <p>\n\n        النوع: {{dat[1].type}}<br>تفاصل اخرى: {{dat[1].commint}}<br>موقع تواجده: {{dat[1].map}}<br>اسم صاحب المنشور: {{dat[1].namep}}<br>رقم الهاتف: {{dat[1].phone}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\mfqodh\mfqodh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__["a" /* ServiceDataProvider */]])
    ], MfqodhPage);
    return MfqodhPage;
}());

//# sourceMappingURL=mfqodh.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(737);
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
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditemPage = /** @class */ (function () {
    function AdditemPage(navCtrl, navParams, afStorage, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afStorage = afStorage;
        this.db = db;
        this.data = {
            title: '',
            city: '',
            type: '',
            img: '',
            phone: '',
            details: '',
        };
        this.SelectedFile = null;
        this.submited = false;
        this.agenicy = false;
        this.abouts = false;
        this.items = db.list('items');
    }
    AdditemPage.prototype.OnFileSelected = function (event) {
        this.SelectedFile = event.target.files[0];
        //console.log(this.SelectedFile)
    };
    AdditemPage.prototype.addItem = function () {
        var _this = this;
        this.items.push({
            title: this.data.title,
            city: this.data.city,
            type: this.data.type,
            img: this.data.img,
            phone: this.data.phone,
            details: this.data.details,
        });
        this.submited = true;
        var id = Math.random().toString(36).substring(2);
        this.afStorage.upload(id, this.SelectedFile).then(function () {
            _this.ref = _this.afStorage.ref(id);
            _this.ref.getDownloadURL().subscribe(function (url) {
                console.log(url);
                if (url) {
                    if (_this.imageURL == "") {
                        _this.imageURL = "assets/imgs/logo.png";
                    }
                    _this.imageURL = url;
                    _this.submited = false;
                    _this.items.push({
                        title: _this.data.title,
                        city: _this.data.city,
                        type: _this.data.type,
                        img: _this.imageURL,
                        phone: _this.data.phone,
                        details: _this.data.details,
                    });
                    //this.router.navigate(['/home'])
                }
            });
        });
    };
    AdditemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-additem',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\additem\additem.html"*/'\n\n<ion-content padding>\n\n\n\n    <ion-list class="right" >\n        <ion-item>\n            <ion-label>  <ion-icon ios="ios-alert" md="md-alert" color="color1"> الحالة  </ion-icon></ion-label>\n            <ion-select [(ngModel)]="data.type" multiple="false" okText="تم" cancelText="اغلاق">\n              <ion-option value="lost">فقد</ion-option>\n              <ion-option value="found">عثر</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label><ion-icon ios="ios-pin" md="md-pin" color="color1"> المدينة </ion-icon></ion-label>\n              <ion-select [(ngModel)]="data.city" multiple="false" okText="تم" cancelText="اغلاق">\n                <ion-option value="baghdad">بغداد</ion-option>\n                <ion-option value="basra">البصرة</ion-option>\n                <ion-option value="sulimanya">السليمانية</ion-option>\n                <ion-option value="karbala">كربلاء</ion-option>\n                <ion-option value="najaf">النجف</ion-option>\n                <ion-option value="dyala">ديالى</ion-option>\n                <ion-option value="mayssan">ميسان</ion-option>\n                <ion-option value="nassrya">الناصرية</ion-option>\n                <ion-option value="kirkuk">كركوك</ion-option>\n              </ion-select>\n            </ion-item>\n        \n\n        <ion-item >\n          <ion-label> <ion-icon color="color1" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n          <ion-input [(ngModel)]=\'data.title\' type="text" placeholder="اسم العنصر"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label >  <ion-icon ios="ios-call" md="md-call" color="color1"></ion-icon></ion-label>\n          <ion-input [(ngModel)]=\'data.phone\' type="number" placeholder="رقم الهاتف" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label >  <ion-icon ios="ios-paper" md="md-paper" color="color1"></ion-icon></ion-label>\n            <ion-input [(ngModel)]=\'data.details\' type="text" placeholder="تفاصيل" ></ion-input>\n          </ion-item>\n        \n          <!-- <div class="uk-margin">\n              <textarea class="uk-textarea" rows="5" placeholder="Details" name="details"[(ngModel)]="data.details"></textarea>\n          </div>\n -->\n\n\n\n\n\n      \n      </ion-list>\n      \n      <div><button ion-button outline class="btn-login" (click)="addItem()"><ion-icon ios="ios-add" md="md-add"> اضف </ion-icon></button></div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\additem\additem.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], AdditemPage);
    return AdditemPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=additem.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authServicesProvider, alertCtrl, angularFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServicesProvider = authServicesProvider;
        this.alertCtrl = alertCtrl;
        this.angularFireAuth = angularFireAuth;
        this.data = {
            email: '',
            password: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    RegisterPage.prototype.Register = function () {
        var _this = this;
        var cred = {
            email: this.data.email,
            password: this.data.password
        };
        this.authServicesProvider.signup(cred).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'ادخال خاطئ',
                subTitle: 'الايميل او كلمه المرور غير صحيح',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="color1">\n\n   \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  \n\n<ion-list style="padding-top:70px">\n\n\n\n  <ion-item >\n\n    <ion-label> <ion-icon color="color1" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n    <ion-input [(ngModel)]=\'email\' type="text" placeholder="البريد"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label >  <ion-icon color="color1"  ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n    <ion-input [(ngModel)]=\'password\' type="password" placeholder="كلمة المرور" ></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label >  <ion-icon color="color1"  ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n    <ion-input [(ngModel)]=\'password\' type="password" placeholder="تأكيد كلمة المرور" ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<div><button ion-button outline class="btn-login" (click)="register()">تسجيل</button></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		722,
		10
	],
	"../pages/additem/additem.module": [
		723,
		9
	],
	"../pages/addmfqod/addmfqod.module": [
		724,
		8
	],
	"../pages/addmfqodh/addmfqodh.module": [
		725,
		7
	],
	"../pages/editprofile/editprofile.module": [
		726,
		6
	],
	"../pages/login/login.module": [
		727,
		5
	],
	"../pages/main/main.module": [
		728,
		4
	],
	"../pages/mfqod/mfqod.module": [
		729,
		3
	],
	"../pages/mfqodh/mfqodh.module": [
		730,
		2
	],
	"../pages/mypost/mypost.module": [
		731,
		1
	],
	"../pages/register/register.module": [
		732,
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
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\home\home.html"*/'\n\n\n\n\n\n<ion-content >\n\n \n\n  <ion-card>\n\n      <ion-card-header>\n\n          <ion-icon color="color6" ios="ios-alert" md="md-alert">  </ion-icon> مفقود\n\n        </ion-card-header>\n\n    <img class="imgcard" src="assets/imgs/download.jpg"/>\n\n    <ion-card-content >\n\n      <ion-card-title color="color3">\n\n        مبايل سامسونك\n\n        </ion-card-title>\n\n      <p color="color2">\n\n        فقد هاتف في محافظة البصرة قرب سوق العشار لون ابيض على من يعثر عليه الاتصال على 099989898989\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-header>\n\n          <ion-icon color="color5" ios="ios-alert" md="md-alert"></ion-icon> موجود\n\n        </ion-card-header>\n\n    <img class="imgcard" src="assets/imgs/download.jpg"/>\n\n    <ion-card-content >\n\n      <ion-card-title color="color3">\n\n        مبايل سامسونك\n\n        </ion-card-title>\n\n      <p color="color2">\n\n        فقد هاتف في محافظة البصرة قرب سوق العشار لون ابيض على من يعثر عليه الاتصال على 099989898989\n\n      </p>\n\n\n\n\n\n\n\n      <ion-list>\n\n          <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="img/thumbnail-totoro.png">\n\n            </ion-thumbnail>\n\n            <h2>My Neighbor Totoro</h2>\n\n            <p>Hayao Miyazaki • 1988</p>\n\n            <button ion-button clear item-end>View</button>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img src="img/thumbnail-totoro.png">\n\n              </ion-thumbnail>\n\n              <h2>My Neighbor Totoro</h2>\n\n              <p>Hayao Miyazaki • 1988</p>\n\n              <button ion-button clear item-end>View</button>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                  <img src="img/thumbnail-totoro.png">\n\n                </ion-thumbnail>\n\n                <h2>My Neighbor Totoro</h2>\n\n                <p>Hayao Miyazaki • 1988</p>\n\n                <button ion-button clear item-end>View</button>\n\n              </ion-item>\n\n        </ion-list>\n\n\n\n\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  \n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\editprofile\editprofile.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>تعدل حسابي</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(170);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MainPage.prototype.goToReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\main\main.html"*/'<ion-content padding class="background">\n\n\n\n  <img src="assets/imgs/logo.png" class="center">\n  <h4 class="text-center" >LOST AND FOUND</h4>\n  \n  \n  \n  <!-- <ion-list>\n  \n    <ion-item>\n      <ion-label> <ion-icon color="color2" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n      <ion-input [(ngModel)]=\'data.email\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>  <ion-icon color="color2"  ios="ios-key" md="md-key"></ion-icon></ion-label>\n      <ion-input [(ngModel)]=\'data.password\' type="password"></ion-input>\n    </ion-item>\n  \n  </ion-list> -->\n  <div ><button  ion-button outline class="btn-reg"(click)="goToReg()" >تسجيل</button></div>\n  <div><button ion-button outline class="btn-login" (click)="login()">دخول</button></div>\n  \n  \n  <!-- <h6 class="text-center" color="color4">او سجل دخول عبر</h6>\n  \n  <ion-grid>\n   \n    <ion-row>\n      <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-facebook.png" class="logo"></button></ion-col>\n      <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-twitter.png" class="logo"></button></ion-col>\n      <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-google.png" class="logo"></button></ion-col>\n    </ion-row>\n  </ion-grid> -->\n  \n  </ion-content>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  <!-- \n  \n  \n  \n  <ion-content padding class="">\n  \n    <ion-list>\n  \n      <ion-item >\n        <ion-label floating class="text-right">البريد الالكتروني </ion-label>\n        <ion-input [(ngModel)]=\'data.email\' type="text"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating class="text-right">كلمه المرور</ion-label>\n        <ion-input [(ngModel)]=\'data.password\' type="password"></ion-input>\n      </ion-item>\n    <br>\n      <button ion-button color="dark" block style="font-size: 20px" (click)="login()" >تسجيل الدخول </button>\n  <br>\n      <button ion-button color="dark" block outline style="font-size: 20px"(click)="goToReg()">او التسجيل بحساب جديد </button>\n      <br><hr><br>\n  <button ion-button block outline style="font-size: 20px"(click)="logFacebook()">  \n      <ion-grid>\n          <ion-row>\n              <ion-col col-2>\n    <ion-icon name="logo-facebook"></ion-icon> </ion-col>\n    <ion-col col-8>\n    تسجيل دخول بحساب فيسبوك</ion-col>\n  </ion-row>\n  </ion-grid>\n  </button>\n  <br>\n  <button ion-button block outline color="danger" style="font-size: 20px"(click)="logGoogle()">\n     <ion-grid>\n      <ion-row>\n          <ion-col col-2>\n              <ion-icon name="logo-google"></ion-icon>\n          </ion-col>\n  \n        <ion-col col-8>تسجيل دخول بحساب google</ion-col>\n  \n      </ion-row>\n    </ion-grid>\n    </button>\n  \n  \n    </ion-list>\n  \n  </ion-content> -->\n  '/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_add__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mfqod_mfqod__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mfqodh_mfqodh__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addmfqod_addmfqod__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addmfqodh_addmfqodh__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editprofile_editprofile__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mypost_mypost__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_main_main__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_additem_additem__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_service_data_service_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_services_auth_services__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_storage__ = __webpack_require__(737);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseConfig = {
    apiKey: "AIzaSyDI0mNGaFpBXegsMJi5_3r5TkyO0BN86Ek",
    authDomain: "test-58df1.firebaseapp.com",
    databaseURL: "https://test-58df1.firebaseio.com",
    projectId: "test-58df1",
    storageBucket: "test-58df1.appspot.com",
    messagingSenderId: "207732299957"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mfqodh_mfqodh__["a" /* MfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mfqod_mfqod__["a" /* MfqodPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addmfqod_addmfqod__["a" /* AddmfqodPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmfqodh_addmfqodh__["a" /* AddmfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mypost_mypost__["a" /* MypostPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_additem_additem__["a" /* AdditemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/additem/additem.module#AdditemPageModule', name: 'AdditemPage', segment: 'additem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmfqod/addmfqod.module#AddmfqodPageModule', name: 'AddmfqodPage', segment: 'addmfqod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmfqodh/addmfqodh.module#AddmfqodhPageModule', name: 'AddmfqodhPage', segment: 'addmfqodh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mfqod/mfqod.module#MfqodPageModule', name: 'MfqodPage', segment: 'mfqod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mfqodh/mfqodh.module#MfqodhPageModule', name: 'MfqodhPage', segment: 'mfqodh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypost/mypost.module#MypostPageModule', name: 'MypostPage', segment: 'mypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mfqodh_mfqodh__["a" /* MfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mfqod_mfqod__["a" /* MfqodPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addmfqod_addmfqod__["a" /* AddmfqodPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmfqodh_addmfqodh__["a" /* AddmfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mypost_mypost__["a" /* MypostPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_additem_additem__["a" /* AdditemPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_service_data_service_data__["a" /* ServiceDataProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_28_angularfire2_storage__["a" /* AngularFireStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceDataProvider = /** @class */ (function () {
    function ServiceDataProvider(db) {
        this.db = db;
        this.dataIn = this.db.list('addmfqod');
        this.dataInh = this.db.list('addmfqodh');
        console.log('Hello ServiceDataProvider Provider');
    }
    ServiceDataProvider.prototype.getDataList = function () {
        return this.dataIn;
    };
    ServiceDataProvider.prototype.addData = function (data) {
        return this.dataIn.push(data);
    };
    ServiceDataProvider.prototype.upData = function (data) {
        return this.dataIn.update(data.key, data);
    };
    ServiceDataProvider.prototype.remove = function (data) {
        return this.dataIn.remove(data);
    };
    ServiceDataProvider.prototype.getDataListh = function () {
        return this.dataInh;
    };
    ServiceDataProvider.prototype.addDatah = function (datah) {
        return this.dataInh.push(datah);
    };
    ServiceDataProvider.prototype.upDatah = function (datah) {
        return this.dataInh.update(datah.key, datah);
    };
    ServiceDataProvider.prototype.removeh = function (datah) {
        return this.dataInh.remove(datah);
    };
    ServiceDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceDataProvider);
    return ServiceDataProvider;
}());

//# sourceMappingURL=service-data.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthServicesProvider = /** @class */ (function () {
    function AuthServicesProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        console.log('Hello AuthServicesProvider Provider');
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthServicesProvider.prototype.signInWithEmail = function (cred) {
        return this.afAuth.auth.signInWithEmailAndPassword(cred.email, cred.password);
    };
    AuthServicesProvider.prototype.signup = function (cred) {
        return this.afAuth.auth.createUserWithEmailAndPassword(cred.email, cred.password);
    };
    AuthServicesProvider.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthServicesProvider);
    return AuthServicesProvider;
}());

//# sourceMappingURL=auth-services.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authServicesProvider) {
        this.authServicesProvider = authServicesProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.authServicesProvider.afAuth.authState.subscribe(user => {
        //   if(!user){
        //     this.rootPage= MainPage;
        //   }else{
        //     this.rootPage= MainPage;
        //   }
        // },
        // ()=>{this.rootPage= LoginPage})
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\app\app.html"*/'\n\n\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="color1" >\n\n        <ion-title>اعدادات</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n  \n\n    <ion-content >\n\n      <ion-list>\n\n        <button  menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            <ion-icon color="first" style="padding-left:5px;" ios={{p.icon}} md={{p.md}}></ion-icon>\n\n     {{p.title}}\n\n         \n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n  </ion-menu>\n\n  \n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n\n\n\n\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mfqod_mfqod__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mfqodh_mfqodh__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__additem_additem__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__mfqod_mfqod__["a" /* MfqodPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__mfqodh_mfqodh__["a" /* MfqodhPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__additem_additem__["a" /* AdditemPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\tabs\tabs.html"*/'<ion-tabs color="color1">\n\n  <ion-tab  [root]="tab1Root" tabTitle="الرئيسية" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="مفقودات" tabIcon="ios-information-circle-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="موجودات" tabIcon="ios-checkmark-circle-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="اضافة" tabIcon="ios-add-circle-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="اعدادات" tabIcon="ios-settings-outline"></ion-tab>\n\n</ion-tabs>\n\n<button ion-button menuToggle>\n\n  <ion-icon name="settings" color="color1"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authServicesProvider, alertCtrl, angularFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServicesProvider = authServicesProvider;
        this.alertCtrl = alertCtrl;
        this.angularFireAuth = angularFireAuth;
        this.data = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var cred = {
            email: this.data.email,
            password: this.data.password
        };
        this.authServicesProvider.signInWithEmail(cred).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'ادخال خاطئ',
                subTitle: 'الايميل او كلمه المرور غير صحيح',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Murtada\Desktop\mfqoden\src\pages\login\login.html"*/'<ion-header >\n\n  <ion-navbar color="color1">\n\n    \n\n  </ion-navbar></ion-header>\n\n<ion-content padding >\n\n\n\n\n\n\n\n<img src="assets/imgs/logo.png" class="lostlogo">\n\n\n\n\n\n\n\n\n\n<ion-list  padding>\n\n\n\n  <ion-item >\n\n    <ion-label> <ion-icon color="color1" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n    <ion-input [(ngModel)]=\'data.email\' type="text" placeholder="البريد"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label >  <ion-icon color="color1"  ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n    <ion-input [(ngModel)]=\'data.password\' type="password" placeholder="كلمة المرور" ></ion-input>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n<div><button ion-button outline class="btn-login" (click)="login()">دخول</button></div>\n\n <h6 class="text" color="color1"><b>او الدخول بحساب</b></h6>\n\n\n\n<ion-grid>\n\n  \n\n  <ion-row>\n\n    <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-facebook.png" class="logo"></button></ion-col>\n\n    <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-twitter.png" class="logo"></button></ion-col>\n\n    <ion-col col-4><button ion-button clear><img src="assets/imgs/logo-google.png" class="logo"></button></ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n\n\n\n<ion-content padding class="">\n\n\n\n  <ion-list>\n\n\n\n    <ion-item >\n\n      <ion-label floating class="text-right">البريد الالكتروني </ion-label>\n\n      <ion-input [(ngModel)]=\'data.email\' type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating class="text-right">كلمه المرور</ion-label>\n\n      <ion-input [(ngModel)]=\'data.password\' type="password"></ion-input>\n\n    </ion-item>\n\n  <br>\n\n    <button ion-button color="dark" block style="font-size: 20px" (click)="login()" >تسجيل الدخول </button>\n\n<br>\n\n    <button ion-button color="dark" block outline style="font-size: 20px"(click)="goToReg()">او التسجيل بحساب جديد </button>\n\n    <br><hr><br>\n\n<button ion-button block outline style="font-size: 20px"(click)="logFacebook()">  \n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n  <ion-icon name="logo-facebook"></ion-icon> </ion-col>\n\n  <ion-col col-8>\n\n  تسجيل دخول بحساب فيسبوك</ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</button>\n\n<br>\n\n<button ion-button block outline color="danger" style="font-size: 20px"(click)="logGoogle()">\n\n   <ion-grid>\n\n    <ion-row>\n\n        <ion-col col-2>\n\n            <ion-icon name="logo-google"></ion-icon>\n\n        </ion-col>\n\n\n\n      <ion-col col-8>تسجيل دخول بحساب google</ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  </button>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content> -->\n\n'/*ion-inline-end:"C:\Users\Murtada\Desktop\mfqoden\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map