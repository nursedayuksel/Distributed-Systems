(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\aliye\demoApp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "RcK4":
    /*!***********************************!*\
      !*** ./src/app/member.service.ts ***!
      \***********************************/

    /*! exports provided: MemberService */

    /***/
    function RcK4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberService", function () {
        return MemberService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MemberService = /*#__PURE__*/function () {
        function MemberService(http) {
          _classCallCheck(this, MemberService);

          this.http = http;
          this.uri = 'http://localhost:4000/members';
        }

        _createClass(MemberService, [{
          key: "addMember",
          value: function addMember(MemberName, MemberBio, MemberAge) {
            var obj = {
              MemberName: MemberName,
              MemberBio: MemberBio,
              MemberAge: MemberAge
            };
            console.log(obj);
            this.http.post("".concat(this.uri, "/add"), obj).subscribe(function (res) {
              return console.log('Done');
            });
          }
        }, {
          key: "getMembers",
          value: function getMembers() {
            return this.http.get("".concat(this.uri));
          }
        }, {
          key: "editMember",
          value: function editMember(id) {
            return this.http.get("".concat(this.uri, "/edit/").concat(id));
          }
        }, {
          key: "updateMember",
          value: function updateMember(MemberName, MemberBio, MemberAge, id) {
            var obj = {
              MemberName: MemberName,
              MemberBio: MemberBio,
              MemberAge: MemberAge
            };
            this.http.post("".concat(this.uri, "/update/").concat(id), obj).subscribe(function (res) {
              return console.log('Done');
            });
          }
        }, {
          key: "deleteMember",
          value: function deleteMember(id) {
            return this.http.get("".concat(this.uri, "/delete/").concat(id));
          }
        }]);

        return MemberService;
      }();

      MemberService.??fac = function MemberService_Factory(t) {
        return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      MemberService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: MemberService,
        factory: MemberService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-slim-loading-bar */
      "gDvx");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(loadingBar, router) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.loadingBar = loadingBar;
          this.router = router;
          this.title = 'angular9tutorial';
          this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
          });
        }

        _createClass(AppComponent, [{
          key: "navigationInterceptor",
          value: function navigationInterceptor(event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
              this.loadingBar.start();
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              this.loadingBar.complete();
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]) {
              this.loadingBar.stop();
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
              this.loadingBar.stop();
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 12,
        vars: 0,
        consts: [["color", "red"], [1, "navbar", "navbar-expand-sm", "bg-light"], [1, "container-fluid"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "member/create", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "members", "routerLinkActive", "active", 1, "nav-link"], [1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "ng2-slim-loading-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " Create Member ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, " Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        directives: [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WH+p":
    /*!****************************************************!*\
      !*** ./src/app/member-get/member-get.component.ts ***!
      \****************************************************/

    /*! exports provided: MemberGetComponent */

    /***/
    function WHP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberGetComponent", function () {
        return MemberGetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../member.service */
      "RcK4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/edit", a1];
      };

      function MemberGetComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberGetComponent_tr_16_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var member_r1 = ctx.$implicit;
            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.deleteMember(member_r1._id, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var member_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](member_r1.MemberName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](member_r1.MemberBio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](member_r1.MemberAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, member_r1._id));
        }
      }

      var MemberGetComponent = /*#__PURE__*/function () {
        function MemberGetComponent(ms) {
          _classCallCheck(this, MemberGetComponent);

          this.ms = ms;
        }

        _createClass(MemberGetComponent, [{
          key: "deleteMember",
          value: function deleteMember(id, index) {
            var _this2 = this;

            this.ms.deleteMember(id).subscribe(function (res) {
              _this2.members.splice(index, 1);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.ms.getMembers().subscribe(function (data) {
              _this3.members = data;
            });
          }
        }]);

        return MemberGetComponent;
      }();

      MemberGetComponent.??fac = function MemberGetComponent_Factory(t) {
        return new (t || MemberGetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]));
      };

      MemberGetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MemberGetComponent,
        selectors: [["app-member-get"]],
        decls: 17,
        vars: 1,
        consts: [[1, "table", "table-hover"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
        template: function MemberGetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Member Index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Member ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Member Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Member Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, MemberGetComponent_tr_16_Template, 13, 6, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.members);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItZ2V0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./member.service */
      "RcK4");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _member_add_member_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./member-add/member-add.component */
      "j3k2");
      /* harmony import */


      var _member_get_member_get_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./member-get/member-get.component */
      "WH+p");
      /* harmony import */


      var _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./member-edit/member-edit.component */
      "vEwU");
      /* harmony import */


      var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-slim-loading-bar */
      "gDvx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({
        providers: [_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__["SlimLoadingBarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _member_add_member_add_component__WEBPACK_IMPORTED_MODULE_6__["MemberAddComponent"], _member_get_member_get_component__WEBPACK_IMPORTED_MODULE_7__["MemberGetComponent"], _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__["SlimLoadingBarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "j3k2":
    /*!****************************************************!*\
      !*** ./src/app/member-add/member-add.component.ts ***!
      \****************************************************/

    /*! exports provided: MemberAddComponent */

    /***/
    function j3k2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberAddComponent", function () {
        return MemberAddComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../member.service */
      "RcK4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MemberAddComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberAddComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberAddComponent_div_8_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.angForm.controls["MemberName"].errors.required);
        }
      }

      function MemberAddComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Bio is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberAddComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberAddComponent_div_14_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.angForm.controls["MemberBio"].errors.required);
        }
      }

      function MemberAddComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Age is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberAddComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberAddComponent_div_20_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r5.angForm.controls["MemberAge"].errors.required);
        }
      }

      var MemberAddComponent = /*#__PURE__*/function () {
        function MemberAddComponent(fb, ms, router) {
          _classCallCheck(this, MemberAddComponent);

          this.fb = fb;
          this.ms = ms;
          this.router = router;
          this.createForm();
        }

        _createClass(MemberAddComponent, [{
          key: "createForm",
          value: function createForm() {
            this.angForm = this.fb.group({
              MemberName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              MemberBio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              MemberAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "addMember",
          value: function addMember(MemberName, MemberBio, MemberAge) {
            this.ms.addMember(MemberName, MemberBio, MemberAge);
            this.router.navigate(['members']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MemberAddComponent;
      }();

      MemberAddComponent.??fac = function MemberAddComponent_Factory(t) {
        return new (t || MemberAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      MemberAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MemberAddComponent,
        selectors: [["app-member-add"]],
        decls: 24,
        vars: 5,
        consts: [[1, "card"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "col-md-4"], ["type", "text", "formControlName", "MemberName", 1, "form-control"], ["MemberName", ""], ["class", "alert alert-danger", 4, "ngIf"], ["rows", "7", "cols", "5", "formControlName", "MemberBio", 1, "form-control"], ["MemberBio", ""], ["type", "text", "formControlName", "MemberAge", 1, "form-control"], ["MemberAge", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function MemberAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MemberAddComponent_div_8_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Member Bio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "textarea", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MemberAddComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Member Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, MemberAddComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MemberAddComponent_Template_button_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](7);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](13);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](19);

              return ctx.addMember(_r0.value, _r2.value, _r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Create Member");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.angForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberName"].invalid && (ctx.angForm.controls["MemberName"].dirty || ctx.angForm.controls["MemberName"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberBio"].invalid && (ctx.angForm.controls["MemberBio"].dirty || ctx.angForm.controls["MemberBio"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberAge"].invalid && (ctx.angForm.controls["MemberAge"].dirty || ctx.angForm.controls["MemberAge"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.angForm.pristine || ctx.angForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vEwU":
    /*!******************************************************!*\
      !*** ./src/app/member-edit/member-edit.component.ts ***!
      \******************************************************/

    /*! exports provided: MemberEditComponent */

    /***/
    function vEwU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
        return MemberEditComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../member.service */
      "RcK4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MemberEditComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberEditComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberEditComponent_div_8_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.angForm.controls["MemberName"].errors.required);
        }
      }

      function MemberEditComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Bio is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberEditComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberEditComponent_div_14_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.angForm.controls["MemberBio"].errors.required);
        }
      }

      function MemberEditComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Age is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function MemberEditComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, MemberEditComponent_div_20_div_1_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r5.angForm.controls["MemberAge"].errors.required);
        }
      }

      var MemberEditComponent = /*#__PURE__*/function () {
        function MemberEditComponent(route, router, ms, fb) {
          _classCallCheck(this, MemberEditComponent);

          this.route = route;
          this.router = router;
          this.ms = ms;
          this.fb = fb;
          this.member = {};
          this.createForm();
        }

        _createClass(MemberEditComponent, [{
          key: "createForm",
          value: function createForm() {
            this.angForm = this.fb.group({
              MemberName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              MemberBio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              MemberAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "updateMember",
          value: function updateMember(MemberName, MemberBio, MemberAge) {
            var _this4 = this;

            this.route.params.subscribe(function (params) {
              _this4.ms.updateMember(MemberName, MemberBio, MemberAge, params.id);

              _this4.router.navigate(['members']);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.params.subscribe(function (params) {
              _this5.ms.editMember(params["id"]).subscribe(function (res) {
                _this5.member = res;
              });
            });
          }
        }]);

        return MemberEditComponent;
      }();

      MemberEditComponent.??fac = function MemberEditComponent_Factory(t) {
        return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      MemberEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MemberEditComponent,
        selectors: [["app-member-edit"]],
        decls: 24,
        vars: 8,
        consts: [[1, "card"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], [1, "col-md-4"], ["type", "text", "formControlName", "MemberName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["MemberName", ""], ["class", "alert alert-danger", 4, "ngIf"], ["rows", "7", "cols", "5", "formControlName", "MemberBio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["MemberBio", ""], ["type", "text", "formControlName", "MemberAge", 1, "form-control", 3, "ngModel", "ngModelChange"], ["MemberAge", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function MemberEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.member.MemberName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, MemberEditComponent_div_8_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Member Bio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "textarea", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_12_listener($event) {
              return ctx.member.MemberBio = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, MemberEditComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Member Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.member.MemberAge = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, MemberEditComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MemberEditComponent_Template_button_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](7);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](13);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](19);

              return ctx.updateMember(_r0.value, _r2.value, _r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Update Member");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.angForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.member.MemberName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberName"].invalid && (ctx.angForm.controls["MemberName"].dirty || ctx.angForm.controls["MemberName"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.member.MemberBio);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberBio"].invalid && (ctx.angForm.controls["MemberBio"].dirty || ctx.angForm.controls["MemberBio"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.member.MemberAge);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.angForm.controls["MemberAge"].invalid && (ctx.angForm.controls["MemberAge"].dirty || ctx.angForm.controls["MemberAge"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.angForm.pristine || ctx.angForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _member_add_member_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./member-add/member-add.component */
      "j3k2");
      /* harmony import */


      var _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-edit/member-edit.component */
      "vEwU");
      /* harmony import */


      var _member_get_member_get_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./member-get/member-get.component */
      "WH+p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'member/create',
        component: _member_add_member_add_component__WEBPACK_IMPORTED_MODULE_1__["MemberAddComponent"]
      }, {
        path: 'edit/:id',
        component: _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_2__["MemberEditComponent"]
      }, {
        path: 'members',
        component: _member_get_member_get_component__WEBPACK_IMPORTED_MODULE_3__["MemberGetComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map