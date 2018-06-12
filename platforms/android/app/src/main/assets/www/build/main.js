webpackJsonp([9],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmfqodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__ = __webpack_require__(46);
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
    function AddmfqodPage(navCtrl, navParams, serviceDataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.data = {
            namep: '',
            phone: '',
            namem: '',
            gander: '',
            age: '',
            commint: '',
            map: ''
        };
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
            selector: 'page-addmfqod',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/addmfqod/addmfqod.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>اضافة شخص مفقود</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>اسم صاحب المنشور</ion-label>\n      <ion-input [(ngModel)]="data.namep" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>رقم الهاتف</ion-label>\n      <ion-input [(ngModel)]="data.phone" type="text"></ion-input>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label floating>اسم الشخص المفقود</ion-label>\n      <ion-input [(ngModel)]="data.namem" type="text"></ion-input>\n    </ion-item>\n<br>\n    <ion-list>\n      <ion-item>\n        <ion-label>الجنس</ion-label>\n        <ion-select [(ngModel)]="data.gander" multiple="false" okText="تم">\n          <ion-option value="ذكر" selected="true">ذكر</ion-option>\n          <ion-option value="انثى">انثى</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>لعمر</ion-label>\n        <ion-select [(ngModel)]="data.age" multiple="false" cancelText="الغاء" okText="تم!">\n          <ion-option value="0" selected="true"></ion-option>\n          <ion-option value="من 0 سنه الى 10 سنوات">من 0 سنه الى 10 سنوات</ion-option>\n          <ion-option value="من 11 سنه الى 20 سنه">من 11 سنه الى 20 سنه</ion-option>\n          <ion-option value="من 21 سنه الى 30 سنه">من 21 سنه الى 30 سنه</ion-option>\n          <ion-option value="من 31 سنه الى 40 سنه">من 31 سنه الى 40 سنه</ion-option>\n          <ion-option value="من 41 سنه فما فوق"> من 41 سنه فما فوق</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>اضف وصف عن المفقود</ion-label>\n      <ion-input [(ngModel)]="data.commint" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>موقع تواجد المفقود</ion-label>\n      <ion-input [(ngModel)]="data.map" type="text"></ion-input>\n    </ion-item>\n    \n    <button ion-button block (click)="addData(data)">اضافة</button>\n\n\n\n\n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/addmfqod/addmfqod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddmfqodPage);
    return AddmfqodPage;
}());

//# sourceMappingURL=addmfqod.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmfqodhPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__ = __webpack_require__(46);
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
    function AddmfqodhPage(navCtrl, navParams, serviceDataProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.datah = {
            namep: '',
            phone: '',
            namem: '',
            type: '',
            commint: '',
            map: ''
        };
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
            selector: 'page-addmfqodh',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/addmfqodh/addmfqodh.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>اضافه شئ مفقود</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>اسم صاحب المنشور</ion-label>\n      <ion-input [(ngModel)]="datah.namep" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>رقم الهاتف</ion-label>\n      <ion-input [(ngModel)]="datah.phone" type="text"></ion-input>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label floating>اسم الشئ المفقود</ion-label>\n      <ion-input [(ngModel)]="datah.namem" type="text"></ion-input>\n    </ion-item>\n<br>\n    <ion-list>\n      <ion-item>\n        <ion-label>النوع</ion-label>\n        <ion-select [(ngModel)]="datah.type" multiple="false" okText="تم">\n          <ion-option value="مجوهرات" selected="true">مجوهرات</ion-option>\n          <ion-option value="نقود">نقود</ion-option>\n          <ion-option value="مستمسكات">مستمسكات</ion-option>\n          <ion-option value="هاتف ">هاتف</ion-option>\n          <ion-option value="اخرى">اخرى</ion-option>\n\n\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n \n\n    <ion-item>\n      <ion-label floating>اضف وصف عن الشئ المفقود</ion-label>\n      <ion-input [(ngModel)]="datah.commint" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>موقع تواجد الشئ المفقود</ion-label>\n      <ion-input [(ngModel)]="datah.map" type="text"></ion-input>\n    </ion-item>\n    \n    <button ion-button block (click)="addData(datah)">اضافة</button>\n\n\n\n\n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/addmfqodh/addmfqodh.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddmfqodhPage);
    return AddmfqodhPage;
}());

//# sourceMappingURL=addmfqodh.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-editprofile',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editprofile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(94);
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
    function MypostPage(navCtrl, navParams, platform, serviceDataProvider, alertCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.serviceDataProvider = serviceDataProvider;
        this.alertCtrl = alertCtrl;
        this.data = {
            key: '',
            namep: '',
            phone: '',
            namem: '',
            gander: '',
            age: '',
            commint: '',
            map: ''
        };
        this.datah = {
            key: '',
            namep: '',
            phone: '',
            namem: '',
            type: '',
            commint: '',
            map: ''
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
    }
    MypostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MfqodPage');
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
            selector: 'page-mypost',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/mypost/mypost.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>منشوراتي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngFor=\'let data of myObject\'>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/logo.png">\n        </ion-avatar>\n        <h2>{{data[1].namem}}</h2>\n      </ion-item>\n      \n      <ion-item-options side="right">\n        <button ion-button color="danger"(click)="remove(data[0])">\n          <ion-icon name="md-trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list *ngFor=\'let dat of myObjecth\'>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/logo.png">\n        </ion-avatar>\n        <h2>{{dat[1].namem}}</h2>\n      </ion-item>\n      \n      <ion-item-options side="right">\n        <button ion-button color="danger"\n        (click)="removeh(dat[0])"\n        >\n          <ion-icon name="md-trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/mypost/mypost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__["a" /* ServiceDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__["a" /* AngularFireDatabase */]])
    ], MypostPage);
    return MypostPage;
}());

//# sourceMappingURL=mypost.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfqodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(46);
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
                console.log(_this.myObject);
            }
        });
    }
    MfqodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MfqodPage');
    };
    MfqodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mfqod',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/mfqod/mfqod.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>المفقودين</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-right>\n<div>\n  <ion-card *ngFor=\'let dat of myObject\'>\n    <img src="../../assets/imgs/logo.png"/>\n    <ion-card-content>\n      <ion-card-title>اسم المفقود:\n    {{dat[1].namem}}\n      </ion-card-title>\n      <p>\n        الجنس: {{dat[1].gander}} , العمر: {{dat[1].age}}<br>تفاصل اخرى: {{dat[1].commint}}<br>موقع تواجده: {{dat[1].map}}<br>اسم صاحب المنشور: {{dat[1].namep}}<br>رقم الهاتف: {{dat[1].phone}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/mfqod/mfqod.html"*/,
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfqodhPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_data_service_data__ = __webpack_require__(46);
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
            }
        });
    }
    MfqodhPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MfqodhPage');
    };
    MfqodhPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mfqodh',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/mfqodh/mfqodh.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>المفقودات</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-right>\n<div>\n  <ion-card *ngFor=\'let dat of myObjecth\'>\n     <img src="../../assets/imgs/logo.png"/>\n    <ion-card-content>\n      <ion-card-title>اسم الشئ:\n    {{dat[1].namem}}\n      </ion-card-title>\n      <p>\n        النوع: {{dat[1].type}}<br>تفاصل اخرى: {{dat[1].commint}}<br>موقع تواجده: {{dat[1].map}}<br>اسم صاحب المنشور: {{dat[1].namep}}<br>رقم الهاتف: {{dat[1].phone}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/mfqodh/mfqodh.html"*/,
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(70);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authServicesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServicesProvider = authServicesProvider;
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
        this.authServicesProvider.signup(cred).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log('erorr'); });
    };
    RegisterPage.prototype.goToLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التسجيل في الموقع</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>البريد الالكتروني </ion-label>\n      <ion-input [(ngModel)]=\'data.email\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>كلمه المرور</ion-label>\n      <ion-input [(ngModel)]=\'data.password\' type="password"></ion-input>\n    </ion-item>\n  <br>\n    <button ion-button block style="font-size: 20px" (click)="Register()" >التسجيل في التطبيق</button>\n<br>\n    <button ion-button block outline style="font-size: 20px"(click)="goToLog()">تسجيل دخول</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		719,
		8
	],
	"../pages/addmfqod/addmfqod.module": [
		720,
		7
	],
	"../pages/addmfqodh/addmfqodh.module": [
		721,
		6
	],
	"../pages/editprofile/editprofile.module": [
		722,
		5
	],
	"../pages/login/login.module": [
		727,
		4
	],
	"../pages/mfqod/mfqod.module": [
		723,
		3
	],
	"../pages/mfqodh/mfqodh.module": [
		724,
		2
	],
	"../pages/mypost/mypost.module": [
		726,
		1
	],
	"../pages/register/register.module": [
		725,
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>مركز المفقودين</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  \n  </ion-slides>\n  <br>\n  <ion-slides pager>\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n  \n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  \n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_add_add__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mfqod_mfqod__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mfqodh_mfqodh__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addmfqod_addmfqod__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addmfqodh_addmfqodh__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mypost_mypost__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_service_data_service_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_services_auth_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(324);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mfqodh_mfqodh__["a" /* MfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mfqod_mfqod__["a" /* MfqodPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addmfqod_addmfqod__["a" /* AddmfqodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addmfqodh_addmfqodh__["a" /* AddmfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mypost_mypost__["a" /* MypostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmfqod/addmfqod.module#AddmfqodPageModule', name: 'AddmfqodPage', segment: 'addmfqod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmfqodh/addmfqodh.module#AddmfqodhPageModule', name: 'AddmfqodhPage', segment: 'addmfqodh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mfqod/mfqod.module#MfqodPageModule', name: 'MfqodPage', segment: 'mfqod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mfqodh/mfqodh.module#MfqodhPageModule', name: 'MfqodhPage', segment: 'mfqodh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypost/mypost.module#MypostPageModule', name: 'MypostPage', segment: 'mypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mfqodh_mfqodh__["a" /* MfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mfqod_mfqod__["a" /* MfqodPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_addmfqod_addmfqod__["a" /* AddmfqodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addmfqodh_addmfqodh__["a" /* AddmfqodhPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mypost_mypost__["a" /* MypostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_service_data_service_data__["a" /* ServiceDataProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(224);
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(324);
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(167);
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
    function LoginPage(navCtrl, navParams, authServicesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServicesProvider = authServicesProvider;
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
        this.authServicesProvider.signInWithEmail(cred).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log('erorr'); });
    };
    LoginPage.prototype.goToReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>تسجيل الدخول</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>البريد الالكتروني </ion-label>\n      <ion-input [(ngModel)]=\'data.email\' type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>كلمه المرور</ion-label>\n      <ion-input [(ngModel)]=\'data.password\' type="password"></ion-input>\n    </ion-item>\n  <br>\n    <button ion-button block style="font-size: 20px" (click)="login()" >تسجيل الدخول </button>\n<br>\n    <button ion-button block outline style="font-size: 20px"(click)="goToReg()">التسجيل في التطبيق</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(70);
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
        var _this = this;
        this.authServicesProvider = authServicesProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.authServicesProvider.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        }, function () { _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-about',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-contact',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/contact/contact.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mfqod_mfqod__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mfqodh_mfqodh__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(94);
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
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="الصغحة الرئيسيه" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="المفقودين" tabIcon="ios-people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="المفقوات" tabIcon="ios-filing"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="اضافة" tabIcon="md-add-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/tabs/tabs.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmfqod_addmfqod__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addmfqodh_addmfqodh__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mypost_mypost__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_services_auth_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(70);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mypost_mypost__["a" /* MypostPage */]);
    };
    AddPage.prototype.goToEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    AddPage.prototype.goToLogout = function () {
        this.authServicesProvider.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/home/3losh/Desktop/mfq/src/pages/add/add.html"*/'<!--\n  Generated template for the AddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>اضافة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button color="secondary" outline  large block (click)="goToAddMfqod()">اضافة شخص مفقود</button><br>\n  <button ion-button color="secondary" outline  large block (click)="goToAddMfqodh()">اضافة شئ مفقود</button><br>\n  <button ion-button color="secondary" outline large  block (click)="goToMyPost()">منشوراتي</button><br>\n  <button ion-button color="" outline large block (click)="goToEdit()">تعديل حسابي </button><br>\n  <button ion-button color="danger" outline large block (click)="goToLogout()">تسجيل خروج</button><br>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/3losh/Desktop/mfq/src/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_services_auth_services__["a" /* AuthServicesProvider */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map