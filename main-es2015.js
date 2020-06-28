(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"content\">\n    <!-- Page Content -->\n    <!-- header -->\n    <app-header></app-header>\n     <p class=\"text-center \">\n        <ngb-alert class=\"expandable\" *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = ''\">{{ successMessage }}</ngb-alert>\n        </p>\n    <!-- /. header -->\n    <div class=\"container bodyele\">\n      <body>\n\n        <router-outlet></router-outlet>\n      </body>\n      <!-- /. body -->\n    </div>\n    <!--/.container-->\n  </div>\n  <!-- /. content -->\n  <!-- Footer -->\n<app-footer></app-footer>\n<!-- /. Footer -->\n\n</div>\n<!-- wrapper -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-4\">\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n  <div class=\"col-xs-8 col-md-8 col-lg-8\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 text-center\">\n\n             <h3 class=\"text-center text-secondary mt-50\">{{message}}  </h3>\n             <img src=\"/assets/images/Bookstore_logo.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n</div>\n<div class=\"row mb-3\">\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n  <div class=\"col-xs-8 col-md-8 col-lg-8\">\n    <div class=\"container \">\n      <form action=\"\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row \">\n          <div class=\"col-md-6 \">\n            <div class=\"form-group\">\n              <label for=\"username\"> Username </label>\n              <input\n                type=\"text\"\n                class=\"form-control text-center\"\n                ngModel\n                name=\"username\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 \">\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                ngModel\n                name=\"password\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!loginMode\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"password\">Re-enter Password</label>\n              <input\n                type=\"password\"\n                [ngClass]=\"{\n                  passwordmismatch: f.value.password !== f.value.rpassword\n                }\"\n                class=\"form-control\"\n                ngModel\n                name=\"rpassword\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!loginMode\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"Address\">Address</label>\n              <input type=\"text\" class=\"form-control\" ngModel name=\"address\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row text-center\">\n          <div class=\"col-md-6\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n              [disabled]=\"\n                !f.valid ||\n                (f.value.password !== f.value.rpassword && loginMode === false)\n              \"\n            >\n              {{ message }}\n            </button>\n          </div>\n        </div>\n        <div *ngIf=\"wrongCredentials\" class=\"row text-center\">\n          <div class=\"col-md-6\">\n            <h5 class=\"alert alert-danger mt-3\">Wrong Credentials</h5>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"col-xs-4 col-md-4 col-lg-4 \"></div>\n</div>\n\n<div class=\"row\" *ngIf=\"loginMode\">\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n  <div class=\"col-xs-8 col-md-8 col-lg-8\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 text-center\">\n             <h5 class=\"text-center mt-50\">OR</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n</div>\n\n<div class=\"row \" *ngIf=\"loginMode\">\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n  <div class=\"col-xs-8 col-md-8 col-lg-8\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 text-center\">\n          <a class=\"btn btn-primary text-white\" (click)=\"demoLogin()\">Login as DemoUser</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-4 col-md-4 col-lg-4\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-category/book-category.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-category/book-category.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"list-group text-center\">\n    <a\n      [routerLink]=\"'/category/' + bookcategory.id\"\n      *ngFor=\"let bookcategory of bookCategories\"\n      class=\"list-group-item \"\n      routerLinkActive=\"bg-primary text-white font-weight-bold\"\n      >{{ bookcategory.name }}\n    </a>\n  </div>\n  <hr />\n  <div *ngIf=\"showFilter===undefined\">\n    <div class=\"text-center\">\n      <div class=\"btn btn-link\">\n        <i class=\"fas fa-filter\">\n          Filter By\n        </i>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"text-center text-dark\">\n        <form action=\"\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n          <input\n            type=\"radio\"\n            class=\"mr-2\"\n            ngModel\n            name=\"orderPrice\"\n            value=\"A\"\n            required\n          />\n          <label for=\"orderPrice\">Price: Low to High</label>\n\n          <div>\n            <input\n              type=\"radio\"\n              class=\"mr-2\"\n              ngModel\n              name=\"orderPrice\"\n              value=\"D\"\n              required\n            />\n\n            <label for=\"orderPrice\">Price: High to Low </label>\n          </div>\n          <input\n            class=\"btn btn-primary sbtn\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\"\n            value=\"Apply Changes\"\n          />\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-details/book-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-details/book-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"!loading\" class=\"row\">\n  <div class=\"col-lg-3  \">\n    <app-book-category showFilter=\"yes\" ></app-book-category>\n    <!-- /.list group -->\n  </div>\n  <!-- /.col-lg-3 -->\n\n  <div class=\"col-lg-9 c\">\n    <div class=\"row\" *ngIf=\"book\">\n      <!-- to dispplay book Image -->\n      <div class=\"col-12 col-md-5\">\n        <div class=\"thumbnail\" >\n          <img src=\"{{ book.imageUrl }}\" width=\"270\" height=\"370\" />\n        </div>\n      </div>\n      <!-- to display book details -->\n      <div class=\"col-12 col-md-5\">\n        <h3>{{ book.name }}</h3>\n        <hr />\n        <p>{{ book.description }}</p>\n        <hr />\n        <h4>Price <strong> &#8377; </strong> {{ book.unitPrice }}</h4>\n        <hr />\n        <h6>Qty left: {{ book.unitsInStock }}</h6>\n        <hr />\n        <a class=\"btn btn-warning\" routerLink=\"/books\">\n          <i class=\"fas fa-arrow-left\"></i> Back</a\n        >\n        <a class=\"btn btn-primary ml-2\" (click)=\"addToCart(book)\">\n          <i class=\"fas fa-cart-arrow-down\"> </i>\n          Add to Cart\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- /.col-lg-9 -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-grid.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-grid.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-danger text-center\" *ngIf=\"serverError\">\n  Server Is Offline. Try again in few Moments\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3\">\n    <app-book-category\n      (sortCriteria)=\"sortBooks($event)\"\n    ></app-book-category>\n    <!-- /.list group -->\n  </div>\n  <!-- /.col-lg-3 -->\n  <div *ngIf=\"loading\" class=\"col-lg-9 col-md-9 col-sm-12\">\n  <div class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n</div>\n\n  <div class=\"col-lg-9 col-md-9 col-sm-12\" *ngIf=\"!loading\">\n    <div\n      *ngIf=\"books?.length === 0\"\n      class=\"col-md-12 alert alert-warning text-center\"\n    >\n      No books Found\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let book of books\">\n        <!-- <div class=\"card h-100\">\n          <a routerLink=\"/books/{{ book.id }}\"\n            ><img\n              class=\"card-img-top  \"\n              [src]=\"book.imageUrl\"\n              alt=\"No Image\"\n          /></a>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">\n              <a routerLink=\"/books/{{ book.id }}\">{{ book.name }}</a>\n            </h4>\n            <h5>{{ book.unitPrice | currency: \"INR\" }}</h5>\n            <p class=\"card-text text-truncate\">\n              {{ book.description }}\n            </p>\n          </div>\n          <div class=\"card-footer text-center\">\n            <button class=\"btn btn-primary \" (click)=\"addToCart(book)\">Add to Cart</button>\n          </div>\n        </div> -->\n\n        <mat-card class=\"example-card h-100 d-flex flex-column\">\n           <a routerLink=\"/books/{{ book.id }}\"><img\n            mat-card-image\n            [src]=\"book.imageUrl\"\n            alt=\"Photo of a Shiba Inu\"\n            height=\"350px\"\n          /></a>\n          <mat-card-content>\n            <mat-card-title  class=\"text-primary text-center\">\n             <a routerLink=\"/books/{{ book.id }}\"> {{\n                book.name\n              }}\n              </a>\n\n            </mat-card-title>\n            <!-- <mat-card-subtitle class=\"text-truncate\">\n              {{ book.description }}</mat-card-subtitle\n            > -->\n          </mat-card-content>\n          <mat-card-actions class=\"d-flex justify-content-around mt-auto\">\n            <h5 class=\"price pt-2\">{{book.unitPrice|currency:\"INR\"}}</h5>\n            <button mat-raised-button color=\"accent\" class=\"text-left\" (click)=\"addToCart(book)\">Add to Cart</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"books?.length !== 0 && !serverError\">\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-4 mt-2 text-right\">Page Size:</div>\n          <div class=\"col-md-8\">\n            <select\n              class=\"form-control\"\n              (change)=\"updatepagesize($event.target.value)\"\n              style=\"width: auto;\"\n            >\n              <option value=\"5\" selected>5</option>\n              <option value=\"7\">7</option>\n              <option value=\"10\">10</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"books\" class=\"col-md-6\">\n        <!-- jw paginaion selctor below -->\n        <ngb-pagination\n          class=\"d-flex justify-content-end\"\n          [maxSize]=\"maxSize\"\n          [(page)]=\"currentPage\"\n          [pageSize]=\"pageSize\"\n          [collectionSize]=\"totalRecords\"\n          (pageChange)=\"listbooks()\"\n        ></ngb-pagination>\n        <!-- <jw-pagination\n          [pageSize]=\"pageSize\"\n          [items]=\"books\"\n          (changePage)=\"pageclick($event)\"\n        ></jw-pagination> -->\n      </div>\n    </div>\n  </div>\n  <!-- /.col-lg-9 -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-status/cart-status.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-status/cart-status.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-icon  [matBadge]=\"totalQuantity\" (click)=\"checkout()\" class=\"cart-icon\" >\n\n  <i class=\"fas fa-cart-arrow-down\" style=\"color:lightgreen;\" ></i>\n  </mat-icon>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row ml-1\">\n  <div class=\"col-2\">\n    <a class=\"btn btn-warning\" routerLink=\"/books\">\n      <i class=\"fas fa-arrow-left\"></i> Back</a\n    >\n  </div>\n</div>\n<div class=\"container text-center mt-2\">\n  <h3 *ngIf=\"items?.length > 0\" class=\"alert text-dark\">\n    Cart Summary\n  </h3>\n  <h4\n    *ngIf=\"items?.length === 0 && !ordered\"\n    class=\"mt-5 alert alert-warning text-center\"\n  >\n    Cart is empty\n  </h4>\n  <h4 *ngIf=\"ordered\" class=\"mt-5 alert alert-success text-center\">\n    Order Sucess ! redirecting to Order History.....\n  </h4>\n  <table *ngIf=\"items?.length > 0\" class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Item</th>\n        <th>Price</th>\n        <th>Quantity</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of items\">\n        <td>\n          <div class=\"thumbnail\">\n            <a routerLink=\"/books/{{ book.id }}\">\n              <img src=\"{{ book.imageUrl }}\" width=\"250\" height=\"300\" />\n            </a>\n          </div>\n        </td>\n        <td class=\"align-middle\">{{ book.unitPrice | currency: \"INR\" }}</td>\n        <td class=\"align-middle\">\n          <div class=\"quant\">\n            <span (click)=\"addOne(book)\" style=\"color: seagreen;\"\n              ><i class=\"fas fa-plus-circle\"></i\n            ></span>\n\n            &nbsp; {{ book.quantity }} &nbsp;\n            <span (click)=\"deleteOne(book)\" style=\"color: goldenrod;\"\n              ><i class=\"fas fa-minus-circle\"></i\n            ></span>\n          </div>\n        </td>\n      </tr>\n      <tr *ngIf=\"items.length > 0\" class=\"font-weight-bold\">\n        <td class=\"align-middle final\">Total</td>\n        <td class=\"align-middle final\">{{ totalPrice | currency: \"INR\" }}</td>\n        <td class=\"align-middle final\">{{ totalQuantity }}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row\">\n    <div class=\"col-5\">\n      <button\n        *ngIf=\"items?.length !== 0\"\n        class=\"btn btn-danger text-white\"\n        type=\"button\"\n        (click)=\"clearCart()\"\n      >\n        Clear Cart\n      </button>\n    </div>\n    <div class=\"col-2\"></div>\n    <div class=\"col-5 d-flex justify-content-around\">\n      <button\n        *ngIf=\"items?.length !== 0 && principal\"\n        class=\"btn btn-success\"\n        type=\"button\"\n        (click)=\"placeOrder()\"\n      >\n        Order\n      </button>\n\n      <a\n        routerLink=\"/auth/login\"\n        *ngIf=\"items?.length !== 0 && !principal\"\n        class=\"btn btn-primary\"\n      >\n        Login to Order</a\n      >\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container\">\n    <p class=\"text-center text-black\">\n      Copyright &copy; Book Store2019\n    </p>\n  </div>\n  <!-- /.container -->\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" id=\"brand-image\" href=\"#\">Book Store </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <app-search></app-search>\n      <ul class=\"navbar-nav ml-auto \">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link home-icon\" routerLink=\"/books \"\n            ><mat-icon color=\"accent\" aria-hidden=\"false\" aria-label=\"Example home  icon\">home</mat-icon>\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item mr-2\">\n          <a\n            class=\"nav-link text-white code\"\n            href=\"https://github.com/bharatvarmagit/BookStore\"\n            >Code <i class=\"fa fa-code\" aria-hidden=\"true\"></i\n          ></a>\n        </li>\n\n        <li *ngIf=\"principal\" class=\"nav-item mt-2 mr-3\">\n          <span class=\"text-light\"> <i>Hi, {{ principal }}</i></span>\n        </li>\n        <li class=\"nav-item\">\n          <div class=\"dropdown \">\n            <!-- <button\n              class=\"btn btn-dark dropdown-toggle mr-2\"\n              type=\"button\"\n              id=\"dropdownMenu2\"\n              data-toggle=\"dropdown\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n            > -->\n              <i\n                class=\"fas fa-user user-icon dropdown-toggle mr-3 myicon\"\n                id=\"dropdownMenu2\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                [ngClass]=\"{'loggedin': principal, 'notloggedin': !principal}\"\n              ></i>\n          <!-- </button> -->\n\n            <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenu2\">\n              <button\n                *ngIf=\"!principal\"\n                class=\"dropdown-item \"\n                type=\"button\"\n                (click)=\"userMenu('LI')\"\n              >\n                Log In\n              </button>\n              <button\n                *ngIf=\"!principal\"\n                class=\"dropdown-item\"\n                type=\"button\"\n                (click)=\"userMenu('SU')\"\n              >\n                Sign Up\n              </button>\n              <!-- <button *ngIf=\"principal\" class=\"dropdown-item\" type=\"button\" (click)=\"userMenu('EP')\"> Edit Profile </button> -->\n              <button\n                *ngIf=\"principal\"\n                class=\"dropdown-item\"\n                type=\"button\"\n                (click)=\"userMenu('LO')\"\n              >\n                Log Out\n              </button>\n              <button\n                *ngIf=\"principal\"\n                class=\"dropdown-item\"\n                type=\"button\"\n                (click)=\"userMenu('GO')\"\n              >\n                Orders History\n              </button>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <app-cart-status></app-cart-status>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-list/order-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-list/order-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-2\">\n    <button mat-raised-button class=\"btn-warning\" routerLink=\"/books\">\n      <i class=\"fas fa-arrow-left\"></i> Back</button>\n\n  </div>\n</div>\n<h4 *ngIf=\"orders?.length === 0\" class=\"mt-5 alert alert-warning text-\">\n  No Order History to show\n</h4>\n\n<h3 *ngIf=\"orders?.length > 0\" class=\"alert text-dark text-center\">\n  Order History\n</h3>\n<div *ngFor=\"let order of orders\">\n  <table class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr class=\"text-center\">\n        <th>Order ID</th>\n        <th>Ordered On</th>\n        <th>Total Price</th>\n        <th>Book Name &nbsp; &nbsp; Qty</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n\n    <tbody class=\"align-middle\">\n      <td\n        class=\"align-middle text-center\"\n        [attr.rowspan]=\"getSpan(order.items)\"\n      >\n        <p>{{ order.id }}</p>\n      </td>\n      <td\n        class=\"align-middle text-center\"\n        [attr.rowspan]=\"getSpan(order.items)\"\n      >\n        <p>{{ order.orderedOn | date: \"short\" }}</p>\n      </td>\n      <td\n        class=\"align-middle text-center\"\n        [attr.rowspan]=\"getSpan(order.items)\"\n      >\n        <p>{{ order.totalPrice }}</p>\n      </td>\n      <span\n        *ngFor=\"let item of order.items | keyvalue\"\n        class=\"d-flex justify-content-center align-items-center\"\n      >\n        <td class=\"btn btn-link text-left text-truncate\">\n          <a (click)=\"goToBook(item.key)\" class=\"text-truncate\">{{ item.key }}</a>\n        </td>\n        &nbsp; &nbsp;\n        <td class=\"\">{{ item.value }}</td>\n      </span>\n      <td class=\"align-middle text-center\">\n        <span class=\"hoverbin\"\n          ><i class=\"fas fa-trash-alt\" (click)=\"deleteOrder(order.id)\"></i>\n        </span>\n      </td>\n    </tbody>\n  </table>\n  <hr />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 text-center\">\n                <span class=\"display-1 d-block\">404</span>\n                <div class=\"mb-4 lead\">The page you are looking for was not found.</div>\n                <a routerLink=\"/books\" class=\"btn btn-link\">Back to Home</a>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"md-10\">\n      <input type=\"text\" #searchInput\n      (keyup.enter)=\"searchbooks(searchInput.value)\" class=\"form-control\" placeholder=\"search for books\" />\n    </div>\n    <div class=\"md-2\">\n      <button type=\"submit\" (click)=\"searchbooks(searchInput.value)\" class=\"btn btn-primary\">Search</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authservice) {
        this.authservice = authservice;
        this.title = 'angular-bookstore';
        this.successMessage = "";
    }
    ngOnInit() {
        this.authservice.loggedIn.subscribe(data => {
            this.successMessage = data;
            setTimeout(() => {
                this.successMessage = "";
            }, 2200);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/book-list/book-list.component */ "./src/app/components/book-list/book-list.component.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_book_category_book_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/book-category/book-category.component */ "./src/app/components/book-category/book-category.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/book-details/book-details.component */ "./src/app/components/book-details/book-details.component.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ "./src/app/components/cart-status/cart-status.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/auth/auth-interceptor.service */ "./src/app/components/auth/auth-interceptor.service.ts");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/order-list/order-list.component */ "./src/app/components/order-list/order-list.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");





























const routes = [
    { path: 'books/:id', component: _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__["BookDetailsComponent"] },
    { path: 'books', redirectTo: '/category/1', pathMatch: 'full' },
    { path: 'category/:id', component: _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__["BookListComponent"] },
    { path: 'search/:keyword', component: _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__["BookListComponent"] },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__["CheckoutComponent"] },
    { path: 'auth/:authmode', component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__["AuthComponent"] },
    { path: 'ordershistory', component: _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderListComponent"] },
    { path: '', redirectTo: '/category/1', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__["BookListComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
            _components_book_category_book_category_component__WEBPACK_IMPORTED_MODULE_17__["BookCategoryComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
            _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__["BookDetailsComponent"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__["JwPaginationComponent"],
            _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_21__["CartStatusComponent"],
            _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__["CheckoutComponent"],
            _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__["AuthComponent"],
            _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderListComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _components_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptorService"],
                multi: true },
            _services_book_service__WEBPACK_IMPORTED_MODULE_12__["BookService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/authRequest.ts":
/*!***************************************!*\
  !*** ./src/app/common/authRequest.ts ***!
  \***************************************/
/*! exports provided: AuthRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequest", function() { return AuthRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthRequest {
    constructor(name, pass) {
        this.username = name;
        this.password = pass;
    }
}


/***/ }),

/***/ "./src/app/common/cart-item.ts":
/*!*************************************!*\
  !*** ./src/app/common/cart-item.ts ***!
  \*************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CartItem {
    constructor(book) {
        this.id = book.id;
        this.name = book.name;
        this.imageUrl = book.imageUrl;
        this.unitPrice = book.unitPrice;
        this.quantity = 1;
    }
}


/***/ }),

/***/ "./src/app/components/auth/auth-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/auth-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthInterceptorService {
    intercept(req, next) {
        if (localStorage.token !== undefined) {
            const xhr = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': localStorage.token,
                },
            });
            return next.handle(xhr);
        }
        return next.handle(req);
    }
}


/***/ }),

/***/ "./src/app/components/auth/auth.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/auth/auth.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox{\n  transform: scale(1.5);\n}\ninput.ng-invalid.ng-touched{\n  border:2px solid red;\n\n}\n.login-div{\n  box-shadow: 13px 13px 20px  #cbced1,\n              -13px -13px 20px #ffffff;\n}\n.centered {\n  position: relative;\n  top: 85px;\n  left: 50%;\n  margin-left: 50px;\n  /* bring your own prefixes */\n  transform: translate(-50%, -50%);\n}\n.passwordmismatch{\n    border:2px solid red;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usb0JBQW9COztBQUV0QjtBQUNBO0VBQ0U7c0NBQ29DO0FBQ3RDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQztBQUNBO0lBQ0ksb0JBQW9COztBQUV4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3h7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG5cbn1cbi5sb2dpbi1kaXZ7XG4gIGJveC1zaGFkb3c6IDEzcHggMTNweCAyMHB4ICAjY2JjZWQxLFxuICAgICAgICAgICAgICAtMTNweCAtMTNweCAyMHB4ICNmZmZmZmY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4NXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wYXNzd29yZG1pc21hdGNoe1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_common_authRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/authRequest */ "./src/app/common/authRequest.ts");






let AuthComponent = class AuthComponent {
    constructor(http, activeRoute, authService, router) {
        this.http = http;
        this.activeRoute = activeRoute;
        this.authService = authService;
        this.router = router;
        this.wrongCredentials = false;
    }
    ngOnInit() {
        this.activeRoute.params.subscribe((params) => {
            this.authMode = params['authmode'];
            this.onNewAuthMode(this.authMode);
        });
    }
    //check if user is loggin in or signing
    onNewAuthMode(authMode) {
        if (this.authMode === "login") {
            this.loginMode = true;
            this.message = "Login";
        }
        else if (this.authMode === "signup") {
            this.loginMode = false;
            this.message = "Signup";
        }
    }
    onSubmit(form) {
        if (this.loginMode === true) {
            this.LoginRequest(form);
        }
        else {
            this.SignUpRequest(form);
        }
    }
    SignUpRequest(form) {
        this.credentials = new src_app_common_authRequest__WEBPACK_IMPORTED_MODULE_5__["AuthRequest"](form.value["username"], form.value["password"]);
        this.authService.signUpService(this.credentials)
            .subscribe(data => {
            this.LoginRequest(form);
            this.authService.loggedIn.next("Signed Up");
        });
    }
    LoginRequest(form) {
        this.credentials = new src_app_common_authRequest__WEBPACK_IMPORTED_MODULE_5__["AuthRequest"](form.value["username"], form.value["password"]);
        this.authService.logInService(this.credentials)
            .subscribe((res) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", res.headers.get("authorization"));
            this.authService.principal.next(this.credentials.username);
            this.authService.loggedIn.next("Logged In");
            this.router.navigate(['/books']);
        }, error => this.wrongCredentials = true);
    }
    onSwitch() {
        this.loginMode = !this.loginMode;
        this.message = this.loginMode === true ? 'Login' : 'Sign Up';
    }
    demoLogin() {
        this.credentials = new src_app_common_authRequest__WEBPACK_IMPORTED_MODULE_5__["AuthRequest"]("demouser", "demouser");
        this.authService.logInService(this.credentials)
            .subscribe((res) => {
            localStorage.setItem("token", res.headers.get("authorization"));
            this.authService.principal.next(this.credentials.username);
            this.authService.loggedIn.next("Logged In");
            this.router.navigate(['/books']);
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/components/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/components/book-category/book-category.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/book-category/book-category.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:hover{\n\n  text-decoration: none;\n}\n.sbtn{\n  transform: scale(0.8);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWNhdGVnb3J5L2Jvb2stY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1jYXRlZ29yeS9ib29rLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zYnRue1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/book-category/book-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/book-category/book-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: BookCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCategoryComponent", function() { return BookCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_bookCategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bookCategory.service */ "./src/app/services/bookCategory.service.ts");



let BookCategoryComponent = class BookCategoryComponent {
    constructor(bookCategoryService) {
        this.bookCategoryService = bookCategoryService;
        this.sortCriteria = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.listBookCategories();
    }
    listBookCategories() {
        this.bookCategoryService.getbookcategories().subscribe(data => this.bookCategories = data);
    }
    onSubmit(f) {
        this.sortCriteria.emit(f.value['orderPrice']);
    }
};
BookCategoryComponent.ctorParameters = () => [
    { type: src_app_services_bookCategory_service__WEBPACK_IMPORTED_MODULE_2__["BookCategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookCategoryComponent.prototype, "sortCriteria", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookCategoryComponent.prototype, "showFilter", void 0);
BookCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-category/book-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-category.component.css */ "./src/app/components/book-category/book-category.component.css")).default]
    })
], BookCategoryComponent);



/***/ }),

/***/ "./src/app/components/book-details/book-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/book-details/book-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/book-details/book-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/book-details/book-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/cart-item */ "./src/app/common/cart-item.ts");






let BookDetailsComponent = class BookDetailsComponent {
    constructor(_bookService, _activatedroute, _cartService) {
        this._bookService = _bookService;
        this._activatedroute = _activatedroute;
        this._cartService = _cartService;
    }
    ngOnInit() {
        this.loading = true;
        this._activatedroute.paramMap.subscribe(() => {
            this.getbookinfo();
        });
    }
    getbookinfo() {
        const id = +this._activatedroute.snapshot.paramMap.get('id');
        this._bookService.getbook(id).subscribe(data => {
            this.book = data;
            this.loading = false;
        });
    }
    //add  to cart functionality
    addToCart(book) {
        this._cartService.addToCart(new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_5__["CartItem"](book));
    }
};
BookDetailsComponent.ctorParameters = () => [
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-details/book-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-details.component.css */ "./src/app/components/book-details/book-details.component.css")).default]
    })
], BookDetailsComponent);



/***/ }),

/***/ "./src/app/components/book-list/book-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\n  display:block;\n  max-height: 100%;\n}\n.price:hover{\n  color:orangered;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICBkaXNwbGF5OmJsb2NrO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLnByaWNlOmhvdmVye1xuICBjb2xvcjpvcmFuZ2VyZWQ7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/cart-item */ "./src/app/common/cart-item.ts");






let BookListComponent = class BookListComponent {
    constructor(bookService, activatedRoute, cartService) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.currentCategoryId = 1;
        this.prevCategoryId = 1;
        // properties for server side pagination
        this.currentPage = 1;
        this.pageSize = 5;
        this.totalRecords = 0;
        this.maxSize = 2;
        this.sortCriteria = null;
        this.serverError = false;
    }
    ngOnInit() {
        this.loading = true;
        this.activatedRoute.paramMap.subscribe(() => {
            this.loading = true;
            this.listbooks();
        });
    }
    //determine search mode is url has keyword? handlesearch or handlelist
    listbooks() {
        this.loading = true;
        this.searchmode = this.activatedRoute.snapshot.paramMap.has('keyword');
        if (this.searchmode) {
            this.handlesearchbooks();
        }
        else {
            this.handlelistbooks();
        }
    }
    handlelistbooks() {
        this.loading = true;
        const hasCategoryId = this.activatedRoute.snapshot.paramMap.has('id');
        if (hasCategoryId) {
            this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
        }
        if (this.currentCategoryId != this.prevCategoryId) {
            this.currentPage = 1;
        }
        this.prevCategoryId = this.currentCategoryId;
        if (this.sortCriteria == null) {
            this.bookService
                .getbooks(this.currentCategoryId, this.currentPage - 1, this.pageSize)
                .subscribe(this.handlePagination(), error => {
                this.loading = false;
                this.serverError = true;
            });
        }
        else {
            this.bookService.getsortedbooks(this.currentCategoryId, this.currentPage - 1, this.pageSize, this.sortCriteria)
                .subscribe(this.handlePagination(), error => {
                this.loading = false;
                this.serverError = true;
            });
        }
    }
    handlesearchbooks() {
        const keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
        this.bookService
            .searchbooks(keyword, this.currentPage - 1, this.pageSize)
            .subscribe(this.handlePagination());
    }
    handlePagination() {
        return data => {
            this.books = data._embedded.books;
            this.currentPage = data.page.number + 1;
            this.totalRecords = data.page.totalElements;
            this.pageSize = data.page.size;
            this.loading = false;
        };
    }
    //update page size
    updatepagesize(pageSize) {
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.listbooks();
    }
    //add to cart service
    addToCart(book) {
        this.cartService.addToCart(new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_5__["CartItem"](book));
    }
    sortBooks(val) {
        this.loading = true;
        this.sortCriteria = val;
        if (this.sortCriteria === undefined) {
            return;
        }
        this.sortCriteria = val === "A" ? "asc" : "desc";
        this.bookService.getsortedbooks(this.currentCategoryId, this.currentPage - 1, this.pageSize, this.sortCriteria)
            .subscribe(this.handlePagination(), error => {
            this.loading = false;
            this.serverError = true;
        });
    }
};
BookListComponent.ctorParameters = () => [
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list/book-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list.component.css */ "./src/app/components/book-list/book-list.component.css")).default]
    })
], BookListComponent);

// // update pageOfBooks
// pageclick(pageOfBooks: Array<Book>){
//   this.pageOfBooks = pageOfBooks;
// }


/***/ }),

/***/ "./src/app/components/cart-status/cart-status.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/cart-status/cart-status.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-icon{\n  cursor: pointer;\n  color:pink;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXN0YXR1cy9jYXJ0LXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC1zdGF0dXMvY2FydC1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWljb257XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6cGluaztcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/cart-status/cart-status.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-status/cart-status.component.ts ***!
  \*****************************************************************/
/*! exports provided: CartStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStatusComponent", function() { return CartStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CartStatusComponent = class CartStatusComponent {
    constructor(cartService, _router) {
        this.cartService = cartService;
        this._router = _router;
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        if (sessionStorage.items !== undefined) {
            let items = JSON.parse(sessionStorage.items);
            this.cartService.cartItems = items;
        }
        this.updateCart();
    }
    updateCart() {
        this.cartService.totalPrice
            .subscribe(data => this.totalPrice = data);
        this.cartService.totalQuantity
            .subscribe(data => this.totalQuantity = data);
    }
    checkout() {
        this._router.navigate(['checkout']);
    }
};
CartStatusComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CartStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-status/cart-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-status.component.css */ "./src/app/components/cart-status/cart-status.component.css")).default]
    })
], CartStatusComponent);



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".makered{\n  color: red;\n}\nspan:hover{\n  cursor: pointer;\n}\n.final{\n  color: darkslateblue;\n}\n.quant{\n  display: flex;\n  flex-direction: column;\n  vertical-align: middle;\n  justify-content: center;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHVCQUF1Qjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFrZXJlZHtcbiAgY29sb3I6IHJlZDtcbn1cbnNwYW46aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maW5hbHtcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG59XG4ucXVhbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let CheckoutComponent = class CheckoutComponent {
    constructor(_cartService, _router, authService) {
        this._cartService = _cartService;
        this._router = _router;
        this.authService = authService;
        this.items = [];
        this.ordered = false;
    }
    ngOnInit() {
        this.authService.principal.subscribe(p => this.principal = p);
        this.loadSessionItems();
        this.getItems();
        this.getTotal();
    }
    loadSessionItems() {
        if (sessionStorage.items !== undefined) {
            let items = JSON.parse(sessionStorage.items);
            this._cartService.cartItems = items;
        }
    }
    getTotal() {
        this._cartService.totalPrice.subscribe(price => this.totalPrice = price);
        this._cartService.totalQuantity.subscribe(quant => this.totalQuantity = quant);
    }
    getItems() {
        this.items = this._cartService.cartItems;
    }
    deleteOne(book) {
        this._cartService.deleteItem(book);
        this.getItems();
        this.getTotal();
    }
    addOne(book) {
        this._cartService.addToCart(book);
        this.getItems();
        this.getTotal();
    }
    placeOrder() {
        const order = {};
        for (let item of this.items) {
            order[item.id] = item.quantity;
        }
        this._cartService.placeOrderService(order, this.totalPrice, this.principal).subscribe(data => {
            this._router.navigate(["ordershistory"]);
        });
        this.items.length = 0;
        this.clearCart();
        this.ordered = true;
    }
    clearCart() {
        this._cartService.clearCart();
        this.items.length = 0;
        sessionStorage.removeItem('items');
        // this.getItems();
        // this.getTotal();
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/checkout/checkout.component.css")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-icon{\n  margin-left: 10px;\n  margin-right: 30px;\n  padding-top: 10px;\n  transform: scale(1.4);\n}\n.code{\n  margin-left: 10px;\n  padding-top: 10px;\n  transform: scale(1.2);\n}\n.home-icon{\n\n  padding-top:10px;\n  transform: scale(1.2);\n}\n.principal-center {\n    display: flex;\n    align-items: center;\n    margin-left: 5px;\n    color: white;\n}\n.loggedin{\n  color:green;\n}\n.notloggedin{\n  color:yellow;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWljb257XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG4uY29kZXtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4uaG9tZS1pY29ue1xuXG4gIHBhZGRpbmctdG9wOjEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5wcmluY2lwYWwtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dnZWRpbntcbiAgY29sb3I6Z3JlZW47XG59XG4ubm90bG9nZ2VkaW57XG4gIGNvbG9yOnllbGxvdztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, authService, cartService) {
        this.router = router;
        this.authService = authService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.checkLocalStore();
        this.authService.principal.subscribe(p => this.principal = p);
    }
    checkLocalStore() {
        if (localStorage.token !== undefined) {
            this.authService.getPrincipalfromJwt().subscribe(data => {
                this.authService.principal.next(data);
                this.authService.loggedIn.next("Logged In");
            });
        }
    }
    userMenu(s) {
        if (s === "LI") {
            this.router.navigate(['auth/login']);
        }
        if (s === "SU") {
            this.router.navigate(['auth/signup']);
        }
        if (s === "LO") {
            this.authService.principal.next(null);
            this.authService.loggedIn.next("Logged Out");
            localStorage.removeItem("token");
            this.router.navigate(["/books"]);
        }
        if (s === "GO") {
            this.router.navigate(["/ordershistory"]);
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/order-list/order-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vam{\n  vertical-align: middle;\n}\na:hover{\n  color: rgb(18, 101, 196);\n}\n.hoverbin{\n  color:red;\n}\n.hoverbin:hover{\n  color:darkred;\n  cursor: pointer;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YW17XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5hOmhvdmVye1xuICBjb2xvcjogcmdiKDE4LCAxMDEsIDE5Nik7XG59XG4uaG92ZXJiaW57XG4gIGNvbG9yOnJlZDtcbn1cbi5ob3ZlcmJpbjpob3ZlcntcbiAgY29sb3I6ZGFya3JlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/order-list/order-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let OrderListComponent = class OrderListComponent {
    constructor(cartService, authService, router, http) {
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.baseUrl = "https://350e5b3c0ac9.ngrok.io";
        this.loading = true;
    }
    ngOnInit() {
        this.fetchOrders();
    }
    fetchOrders() {
        this.cartService.getOrdersService(localStorage.USER).subscribe(orders => {
            console.log("got orders");
            this.orders = orders.sort((a, b) => {
                return a.id < b.id ? 1 : -1;
            });
            this.loading = false;
        });
    }
    getSpan(itemz) {
        let span = 0;
        span = Object.getOwnPropertyNames(itemz).length;
        return span > 2 ? span : 2;
    }
    goToBook(name) {
        const findurl = `${this.baseUrl}/getbookid?name=${name}`;
        this.http.get(findurl, { responseType: 'text' }).subscribe(data => {
            this.router.navigate([`/books/${data}`]);
        });
    }
    deleteOrder(id) {
        const url = `${this.baseUrl}/deleteorder?orderId=${id}`;
        this.http.delete(url, { responseType: 'text' }).subscribe(data => this.fetchOrders());
    }
};
OrderListComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-list/order-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-list.component.css */ "./src/app/components/order-list/order-list.component.css")).default]
    })
], OrderListComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background: #dedede;\n}\n.page-wrap {\n    vertical-align:top;\n    min-height: 75vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbn1cbi5wYWdlLXdyYXAge1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBtaW4taGVpZ2h0OiA3NXZoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SearchComponent = class SearchComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    searchbooks(keyword) {
        this.router.navigateByUrl('/search/' + keyword);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://350e5b3c0ac9.ngrok.io/";
        this.principal = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
    }
    logInService(credentials) {
        const authUrl = `${this.baseUrl}login`;
        return this.http.post(authUrl, credentials, { observe: "response" });
    }
    signUpService(credentials) {
        const SignUpUrl = `${this.baseUrl}signup`;
        return this.http.post(SignUpUrl, credentials, { responseType: 'text' });
    }
    getPrincipalfromJwt() {
        return this.http.get(this.baseUrl, { responseType: 'text' });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BookService = class BookService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://350e5b3c0ac9.ngrok.io/api/books";
    }
    getbooks(categoryId, currentPage, pageSize) {
        const searchUrl = `${this.baseUrl}/search/categoryid?id=${categoryId}&page=${currentPage}&size=${pageSize}`;
        return this.httpClient.get(searchUrl);
    }
    getsortedbooks(categoryId, currentPage, pageSize, sortorder) {
        const searchUrl = `${this.baseUrl}/search/categoryid?id=${categoryId}&page=${currentPage}&size=${pageSize}&sort=unitPrice,${sortorder}`;
        return this.httpClient.get(searchUrl);
    }
    getbook(bookId) {
        const searchUrl = `${this.baseUrl}/${bookId}`;
        return this.httpClient.get(searchUrl);
    }
    getBookId(name) {
        const searchUrl = `${this.baseUrl}/search/bookname?name=${name}`;
        return this.httpClient.get(searchUrl);
    }
    searchbooks(keyword, currentPage, pageSize) {
        const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}&page=${currentPage}&size=${pageSize}`;
        return this.httpClient.get(searchUrl);
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "./src/app/services/bookCategory.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/bookCategory.service.ts ***!
  \**************************************************/
/*! exports provided: BookCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCategoryService", function() { return BookCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BookCategoryService = class BookCategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://350e5b3c0ac9.ngrok.io/api/book-category";
    }
    getbookcategories() {
        return this.httpClient.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp._embedded.BookCategory));
    }
};
BookCategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookCategoryService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






let CartService = class CartService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.baseUrl = "https://350e5b3c0ac9.ngrok.io";
        this.cartItems = [];
        this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](sessionStorage.TP !== undefined ? sessionStorage.TP : 0);
        this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](sessionStorage.TQ !== undefined ? sessionStorage.TQ : 0);
    }
    addToCart(cartItem) {
        let itemExists = this.cartItems.find(item => item.id === cartItem.id);
        if (itemExists === undefined) {
            this.cartItems.push(cartItem);
        }
        else {
            itemExists.quantity++;
        }
        sessionStorage.setItem("items", JSON.stringify(this.cartItems));
        this.calPriceAndQuant();
    }
    clearCart() {
        this.cartItems = [];
        this.totalPrice.next(0);
        this.totalQuantity.next(0);
        sessionStorage.removeItem('items');
        sessionStorage.TP = 0;
        sessionStorage.TQ = 0;
    }
    deleteItem(item) {
        let delItem = this.cartItems.find(b => b.id === item.id);
        if (item.quantity > 1) {
            item.quantity--;
        }
        else {
            let ind = this.cartItems.findIndex(b => b.id === item.id);
            this.cartItems.splice(ind - 1, 1);
        }
        sessionStorage.setItem("items", JSON.stringify(this.cartItems));
        this.calPriceAndQuant();
    }
    calPriceAndQuant() {
        let totalPriceVal = 0;
        let totalQuantityVal = 0;
        for (let item of this.cartItems) {
            totalPriceVal += item.quantity * item.unitPrice;
            totalQuantityVal += item.quantity;
        }
        sessionStorage.setItem("TP", totalPriceVal.toString());
        sessionStorage.setItem("TQ", totalQuantityVal.toString());
        this.totalPrice.next(totalPriceVal);
        this.totalQuantity.next(totalQuantityVal);
    }
    placeOrderService(order, price, principal) {
        const orderUrl = `${this.baseUrl}/placeorder?price=${price}`;
        return this.http.post(orderUrl, order, { responseType: 'text' });
    }
    getOrdersService(principal) {
        const orderUrl = `${this.baseUrl}/getorders`;
        return this.http.get(orderUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data["orders:"]));
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bharat/BookStore/BookStoreApp/angular-bookstore/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map