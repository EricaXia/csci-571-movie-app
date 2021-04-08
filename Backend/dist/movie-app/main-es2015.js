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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n\n  <!-- Footer -->\n  <footer class=\"my-footer\">\n    <div class=\"text-center py-3\">Powered by TMDB. Developed by Erica Xia.\n    </div>\n  </footer>\n  <!-- Footer -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel *ngIf=\"curr_movies\" class=\"curr-carousel\" [pauseOnHover]=\"true\" [pauseOnFocus]=\"true\" interval=\"500000\">\n  <ng-template ngbSlide>\n    <div class=\"curr_playing_img\">\n      <a href=\"/watch/movie/{{curr_movies[0]?.id}}\">\n        <img\n          [src]=\"curr_movies[0]?.img_path\"\n          id=\"{{curr_movies[0]?.id}}\"\n          class=\"curr_playing_img\"\n        />\n      </a>\n\n      <div class=\"carousel-caption my-carousel-caption\">\n        <div class=\"caption-font\">{{curr_movies[0]?.title}}</div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngbSlide>\n    <div class=\"curr_playing_img\">\n      <a href=\"/watch/movie/{{curr_movies[1]?.id}}\">\n        <img\n          [src]=\"curr_movies[1]?.img_path\"\n          id=\"{{curr_movies[1]?.id}}\"\n          class=\"curr_playing_img\"\n        />\n      </a>\n      <div class=\"carousel-caption my-carousel-caption\">\n        <div class=\"caption-font\">{{curr_movies[1]?.title}}</div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngbSlide>\n    <div class=\"curr_playing_img\">\n      <a href=\"/watch/movie/{{curr_movies[2]?.id}}\">\n        <img\n          [src]=\"curr_movies[2]?.img_path\"\n          id=\"{{curr_movies[2]?.id}}\"\n          class=\"curr_playing_img\"\n        />\n      </a>\n      <div class=\"carousel-caption my-carousel-caption\">\n        <div class=\"caption-font\">{{curr_movies[2]?.title}}</div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngbSlide>\n    <div class=\"curr_playing_img\">\n      <a href=\"/watch/movie/{{curr_movies[3]?.id}}\">\n        <img\n          [src]=\"curr_movies[3]?.img_path\"\n          id=\"{{curr_movies[3]?.id}}\"\n          class=\"curr_playing_img\"\n        />\n      </a>\n      <div class=\"carousel-caption my-carousel-caption\">\n        <div class=\"caption-font\">{{curr_movies[3]?.title}}</div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngbSlide>\n    <div class=\"curr_playing_img\">\n      <a href=\"/watch/movie/{{curr_movies[4]?.id}}\">\n        <img\n          [src]=\"curr_movies[4]?.img_path\"\n          id=\"{{curr_movies[4]?.id}} \"\n          class=\"curr_playing_img\"\n        />\n      </a>\n      <div class=\"carousel-caption my-carousel-caption\">\n        <div class=\"caption-font\">{{curr_movies[4]?.title}}</div>\n      </div>\n    </div>\n  </ng-template>\n  <!-- End Currntly Playing Movies -->\n</ngb-carousel>\n\n<!-- Continue Watching -->\n<div class=\"movie-container\" *ngIf=\"continue_watching.length > 0\">\n  <h2 class=\"section-heading\">Continue Watching</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of continue_watching\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <!-- <div class=\"row flex-nowrap\"> -->\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length != 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Continue Watching -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && continue_watching2.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of continue_watching2\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Popular Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Popular Movies</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"popular_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of popular_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Popular Movies -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && popular_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of popular_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <!-- End ngFor -->\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Top Rated Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Top Rated Movies</h2>\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"top_rated_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of top_rated_movies2\">\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <div class=\"col-xs-8 mycard\">\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Top Rated Movies -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && top_rated_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of top_rated_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Trending Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Trending Movies</h2>\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"trending_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of trending_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <div class=\"col-xs-8 mycard\">\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n\n                    <!-- End of card-img-caption -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Trending Movies -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && trending_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of trending_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Popular TV Shows -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Popular TV Shows</h2>\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"popular_tv2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of popular_tv2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <div class=\"col-xs-8 mycard\">\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/tv/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.name }}</div>\n                    </div>\n\n                    <!-- End of card-img-caption -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Popular TV Shows -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && popular_tv3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of popular_tv3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/tv/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Top Rated TV Shows -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Top Rated TV Shows</h2>\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"top_rated_tv2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of top_rated_tv2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <div class=\"col-xs-8 mycard\">\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/tv/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.name }}</div>\n                    </div>\n\n                    <!-- End of card-img-caption -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Top Rated TV Shows -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && top_rated_tv3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of top_rated_tv3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <a href=\"/watch/tv/{{ m?.id }}\">\n                <img\n                  src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                  alt=\"{{m.title}}\"\n                  class=\"slide-item\"\n                  id=\"{{m?.id}}\"\n              /></a>\n              <div class=\"my-carousel-caption2\">\n                <div class=\"card-text caption-font2\">{{ m.title }}</div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n<!-- Trending TV Shows -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Trending TV Shows</h2>\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"trending_tv2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of trending_tv2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div [ngClass]=\"{ 'row': arr.length == 6, 'row-less': arr.length < 6}\" class=\"flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <div class=\"col-xs-8 mycard\">\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/tv/{{ m?.id }}\">\n                      <img\n                        src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                        alt=\"{{m.title}}\"\n                        class=\"slide-item\"\n                        id=\"{{m?.id}}\"\n                    /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.name }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n\n<!-- Trending TV Shows -->\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && trending_tv3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of trending_tv3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/tv/{{ m?.id }}\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\"\n                    alt=\"{{m.title}}\"\n                    class=\"slide-item\"\n                    id=\"{{m?.id}}\"\n                /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/modal-content/modal-content.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/modal-content/modal-content.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- REGULAR screen size -->\n<div *ngIf=\"isReg && !isSm\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ cast_details.cast.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <!-- Row with Image and Details -->\n    <div class=\"row flex-nowrap\">\n      <div class=\"col img-box\">\n        <img src=\"{{ cast_details.cast.img_path }}\" class=\"modal-img\">\n      </div>\n      <div class=\"col-8 details-col\" *ngIf=\"cast_details\">\n\n        <p *ngIf=\"cast_details.cast.birthday\">Birth: {{ cast_details.cast.birthday }} </p>\n        <p *ngIf=\"cast_details.cast.place_of_birth\">Birthplace: {{ cast_details.cast.place_of_birth }} </p>\n        <p *ngIf=\"cast_details.cast.gender_str\">Gender: {{ cast_details.cast.gender_str }} </p>\n        <p *ngIf=\"cast_details.cast.known_for\">Known For: {{ cast_details.cast.known_for }} </p>\n        <p *ngIf=\"cast_details.cast.also_known_as?.length > 1\">Also Known as: {{ cast_details.cast.also_known_as }} </p>\n        <div *ngIf=\"cast_details.cast.external_ids\">\n          <!-- IMDB -->\n          <div *ngIf=\"cast_details.cast.external_ids.imdb_id\" class=\"icon\" ngbPopover=\"Visit IMDB\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.imdb.com/name/{{ cast_details.cast.external_ids.imdb_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faImdb\" style=\"color:#E0B63D;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- FB -->\n          <div *ngIf=\"cast_details.cast.external_ids.facebook_id\" class=\"icon\" ngbPopover=\"Visit Facebook\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.facebook.com/{{ cast_details.cast.external_ids.facebook_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- TW -->\n          <div *ngIf=\"cast_details.cast.external_ids.twitter_id\" class=\"icon\" ngbPopover=\"Visit Twitter\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.twitter.com/{{ cast_details.cast.external_ids.twitter_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- ig -->\n          <div *ngIf=\"cast_details.cast.external_ids.instagram_id\" class=\"icon\" ngbPopover=\"Visit Instagram\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.instagram.com/{{ cast_details.cast.external_ids.instagram_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faInstagram\" style=\"color: #79567F;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cast_details.cast.biography\">\n      <h3>Biography</h3>\n      <p> {{ cast_details.cast.biography }}</p>\n    </div>\n    <!-- End Modal Body -->\n  </div>\n\n  <!-- End Modal -->\n</div>\n\n\n\n<!-- MOBILE MODAL -->\n\n<div *ngIf=\"!isReg && isSm\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ cast_details.cast.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <!-- Image row -->\n    <!-- flex-wrap -->\n    <div class=\"row align-items-center\">\n      <div class=\"col d-flex justify-content-center img-box\">\n        <img src=\"{{ cast_details.cast.img_path }}\" class=\"modal-img mx-auto mx-md-0\">\n      </div>\n    </div>\n    <!-- Details row -->\n    <div class=\"row flex-wrap\">\n      <div *ngIf=\"cast_details\" class=\"details-m\">\n        <p *ngIf=\"cast_details.cast.birthday\">Birth: {{ cast_details.cast.birthday }} </p>\n        <p *ngIf=\"cast_details.cast.place_of_birth\">Birthplace: {{ cast_details.cast.place_of_birth }} </p>\n        <p *ngIf=\"cast_details.cast.gender_str\">Gender: {{ cast_details.cast.gender_str }} </p>\n        <p *ngIf=\"cast_details.cast.known_for\">Known For: {{ cast_details.cast.known_for }} </p>\n        <p *ngIf=\"cast_details.cast.also_known_as?.length > 1\">Also Known as: {{ cast_details.cast.also_known_as }} </p>\n        <div *ngIf=\"cast_details.cast.external_ids\">\n\n\n          <!-- IMDB -->\n          <div *ngIf=\"cast_details.cast.external_ids.imdb_id\" class=\"icon\" ngbPopover=\"Visit IMDB\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.imdb.com/name/{{ cast_details.cast.external_ids.imdb_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faImdb\" style=\"color:#E0B63D;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- FB -->\n          <div *ngIf=\"cast_details.cast.external_ids.facebook_id\" class=\"icon\" ngbPopover=\"Visit Facebook\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.facebook.com/{{ cast_details.cast.external_ids.facebook_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- TW -->\n          <div *ngIf=\"cast_details.cast.external_ids.twitter_id\" class=\"icon\" ngbPopover=\"Visit Twitter\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.twitter.com/{{ cast_details.cast.external_ids.twitter_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- ig -->\n          <div *ngIf=\"cast_details.cast.external_ids.instagram_id\" class=\"icon\" ngbPopover=\"Visit Instagram\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.instagram.com/{{ cast_details.cast.external_ids.instagram_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faInstagram\" style=\"color: #79567F;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cast_details.cast.biography\">\n      <div class=\"col\">\n        <h3>Biography</h3>\n        <p> {{ cast_details.cast.biography }}</p>\n      </div>\n    </div>\n    <!-- End Modal Body -->\n  </div>\n  <!-- End mobile modal -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"fb-root\"></div>\n<script async defer crossorigin=\"anonymous\" src=\"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0\"\n  nonce=\"cU8SBHAh\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n\n<div class=\"container\">\n  <div *ngIf=\"!details\">\n    <p>Loading...</p>\n  </div>\n\n  <!-- for reg screens: -->\n  <div *ngIf=\"video && details && !isSm\" class=\"row flex-nowrap my-row\">\n    <!-- <p>Video here:</p> -->\n    <div class=\"col-video justify-content-left\">\n      <youtube-player videoId=\"{{ video_id }}\" suggestedQuality=\"highres\">\n      </youtube-player>\n    </div>\n    <!-- Details here -->\n    <div *ngIf=\"details\">\n      <div class=\"col-details\">\n        <h2 style=\"font-weight:300;padding-top:1%;\">{{ details.title }}</h2>\n        <p style=\"padding-bottom:3%;\"><i>{{ details.tagline }}</i></p>\n        <p style=\"font-size:larger;font-weight:300;\">\n          {{ details.year }}&ensp;|&ensp;★ {{ details.vote_average\n          }}&ensp;|&ensp;{{ details.runtime_hrs }}\n        </p>\n        <p class=\"details-text\"><b>Genres: </b>{{ details.genres_list }}</p>\n        <p class=\"details-text\"><b>Spoken Languages: </b>{{ details.langs }}</p>\n\n        <!-- Add to Watchlist -->\n        <button type=\"button\" class=\"btn btn-primary btn-wl\" (click)=\"addtoWL()\">\n          {{ btn_text }}\n        </button>\n        <!-- If added to WL, show alert -->\n        <ngb-alert *ngIf=\"!isAdd\" [type]=\"'success'\" [dismissible]=\"true\" class=\"add-alert\">Added to Watchlist\n        </ngb-alert>\n\n\n      </div>\n    </div>\n    <!-- Ends row -->\n  </div>\n  <!-- Descrip here -->\n  <div *ngIf=\"isReg && !isSm\" class=\"row flex-nowrap my-row\">\n    <div *ngIf=\"details\" class=\"descrip\">\n      <p class=\"details-title\">Description</p>\n      <p class=\"desc-text\">\n        {{ details.overview }}\n      </p>\n    </div>\n  </div>\n  <!-- END for reg screens: -->\n\n  <!-- For MOBILE: -->\n  <!-- default height=390,width=640 ,height=195 width=320-->\n  <div *ngIf=\"video && isSm\" class=\"vid-m flex-nowrap\">\n    <youtube-player videoId=\"{{ video_id }}\" suggestedQuality=\"highres\" height=195 width=320>\n    </youtube-player>\n  </div>\n\n  <div *ngIf=\"details && isSm\" class=\"details-m flex-nowrap\">\n    <h2>{{ details.title }}</h2>\n    <p><i>{{ details.tagline }}</i></p>\n    <p>\n      {{ details.year }}&ensp;|&ensp;★ {{ details.vote_average }}&ensp;|&ensp;{{\n      details.runtime_hrs }}\n    </p>\n    <p class=\"details-text\"><b>Genres: </b>{{ details.genres_list }}</p>\n    <p class=\"details-text\"><b>Spoken Languages: </b>{{ details.langs }}</p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addtoWL()\">\n          {{ btn_text }}\n        </button>\n  </div>\n  <!-- descrip here -->\n  <div *ngIf=\"isSm\" class=\"details-m flex-nowrap my-row\">\n    <div *ngIf=\"details\" class=\"descrip\">\n      <p class=\"details-title\">Description</p>\n      <p class=\"desc-text\">\n        {{ details.overview }}\n      </p>\n    </div>\n  </div>\n\n  <!-- Share buttons -->\n  <div class=\"share-div\" *ngIf=\"isReg && !isSm && video\">\n    <p class=\"details-title\">Share</p>\n    <a class=\"twitter-share-button share-btn\"\n      href=\"https://twitter.com/intent/tweet?url={{ video }}&text=Watch%20{{ details.title }}&hashtags=USC%20%23CSCI571%20%23FightOn\"\n      target=\"_blank\">\n      <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n    </a>\n    <div class=\"fb-share-button share-btn\" data-layout=\"button_count\" data-size=\"small\">\n      <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u={{ video }}&amp;src=sdkpreparse\"\n        class=\"fb-xfbml-parse-ignore\">\n        <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n      </a>\n    </div>\n  </div>\n\n  <!-- Share buttons MOBILE -->\n  <div class=\"details-m flex-nowrap my-row\" *ngIf=\"isSm\">\n    <p class=\"details-title\">Share</p>\n    <a class=\"twitter-share-button share-btn\"\n      href=\"https://twitter.com/intent/tweet?url={{ video }}&text=Watch%20{{ details.title }}&hashtags=USC%20%23CSCI571%20%23FightOn\"\n      target=\"_blank\">\n      <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n    </a>\n    <div class=\"fb-share-button share-btn\" data-layout=\"button_count\" data-size=\"small\">\n      <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u={{ video }}&amp;src=sdkpreparse\"\n        class=\"fb-xfbml-parse-ignore\">\n        <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n      </a>\n    </div>\n  </div>\n\n  <!-- Cast cards carousel -->\n  <div *ngIf=\"cast\" class=\"row cast-container\">\n    <div *ngIf=\"isReg && !isSm\">\n      <h3>Full Cast and Crew</h3>\n    </div>\n\n    <div *ngIf=\"isSm\" class=\"details-m\">\n      <h3>Full Cast and Crew</h3>\n    </div>\n\n    <div class=\"container-fluid py-2 my-container-fluid\">\n      <div class=\"d-flex flex-row flex-nowrap overflow-auto my-flex\">\n        <div *ngFor=\"let c of cast | keyvalue\">\n          <!-- each card in its own column -->\n          <div class=\"col\">\n            <!-- <div (click)=\"openModal(c.value.id)\">Get info</div> -->\n            <div (click)=\"openModal(c.value.id)\" class=\"open-modal\">\n              <div class=\" card border-0 my-card\" id=\"{{ c.value.id }}\">\n                <img\n                  class=\"card-img-top my-card-img\"\n                  src=\"{{ c.value.img_path }}\"\n                />\n                <div class=\"card-body\">\n                  <!-- <button (click)=\"openModal(this.value);\" id=\"{{ c.value.id }}\">Info</button> -->\n                  <p class=\"card-text my-card-text\">\n                    <b>{{ c.value.name }}</b> <br />\n                    <span style=\"font-weight:800;\">AS</span>\n                    <br />\n                    {{ c.value.character }}\n                  </p>\n                </div>\n\n                <!-- End the 'open modal' div -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- End row -->\n      </div>\n      <!-- End container -->\n    </div>\n  </div>\n\n  <!-- REVIEWS rREGULAR-->\n  <div *ngIf=\"reviews?.length > 0\">\n    <div *ngIf=\"isReg && !isSm\">\n      <h3>Reviews {{ reviews.length }}</h3>\n      <div *ngFor=\"let r of reviews | keyvalue\">\n        <div class=\"card review-card\">\n          <div class=\"card-body review-card\">\n            <div class=\"row\">\n              <div class=\"col-2 d-flex justify-content-center\">\n                <img src=\"{{ r.value.img_path }}\" class=\"avatar\" />\n              </div>\n              <div class=\"col\">\n                <h4 class=\"review-font\">\n                  A review created by {{ r.value.author }}\n                </h4>\n                <div class=\"rating\">★{{ r.value.author_details.rating }}</div>\n\n                <p class=\"review-font-gray\">\n                  <br />Written by {{ r.value.author }} on {{ r.value.review_date\n                }}\n                </p>\n                <p class=\"review-font\">\n                  {{ (r.value.content | slice:0:320) + '...' }}\n                </p>\n                <a class=\"review-link\" href=\"{{ r.value.url }}\" target=\"_blank\">Read the rest</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!-- REVIEWS MOBILE -->\n  <div *ngIf=\"reviews?.length > 0\">\n    <div *ngIf=\"isSm\">\n      <h3>Reviews {{ reviews.length }}</h3>\n      <div *ngFor=\"let r of reviews | keyvalue\">\n        <div class=\"card review-card\">\n          <div class=\"card-body\">\n\n            <!-- Avatar row -->\n            <div class=\"row flex-wrap\">\n              <div class=\"col d-flex justify-content-left\">\n                <img src=\"{{ r.value.img_path }}\" class=\"avatar\" />\n              </div>\n            </div>\n\n            <!-- review text row -->\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n                <h4 class=\"review-font\">\n                  A review created by {{ r.value.author }}\n                </h4>\n              </div>\n            </div>\n\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n                <div class=\"rating\">★{{ r.value.author_details.rating }}</div>\n              </div>\n            </div>\n\n            <br>\n\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n\n                <p class=\"review-font-gray\">\n                  <br />Written by {{ r.value.author }} on {{ r.value.review_date\n                }}\n                </p>\n                <p class=\"review-font\">\n                  {{ (r.value.content | slice:0:109) + '...' }}\n                </p>\n                <a class=\"review-link\" href=\"{{ r.value.url }}\" target=\"_blank\">Read the rest</a>\n              </div>\n              <!-- end row -->\n            </div>\n            <!-- end cardbody -->\n          </div>\n          <!-- end card -->\n        </div>\n        <!-- end ngfor -->\n      </div>\n      <!-- end ngif -->\n    </div>\n  </div>\n\n  <!-- ends main container -->\n</div>\n\n\n\n\n<!-- CAAROUSELS -->\n<!-- Rec Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Recommended Movies</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"recommended_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of recommended_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div class=\"row flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                        id=\"{{m?.id}}\" /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && recommended_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of recommended_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                  id=\"{{m?.id}}\" /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <!-- End ngFor -->\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n\n<!-- Sim Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Similar Movies</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"similar_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of similar_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div class=\"row flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                        id=\"{{m?.id}}\" /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && similar_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of similar_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                  id=\"{{m?.id}}\" /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <!-- End ngFor -->\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mylist/mylist.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mylist/mylist.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <h1>My WatchList</h1>\n  <div *ngIf=\"wl\">\n    <div *ngFor=\"let arr of wl\">\n      <!-- make row of 6 movies -->\n      <div class=\"row flex-nowrap\">\n\n\n\n        <div *ngFor=\"let m of arr\">\n\n\n          <!-- For each movie in subarr of 6  movies, make this: -->\n          <div class=\"col-md col-lg mycard\">\n\n            <!-- Container for link, image, and caption: -->\n            <div class=\"card-img-caption\">\n              <a href=\"/watch/movie/{{ m?.id }}\">\n                <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                        id=\"{{m?.id}}\" /></a>\n              <div class=\"my-carousel-caption2\">\n                <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                <!-- End card-img-caption -->\n              </div>\n              <!-- End mycard -->\n            </div>\n            <!-- End ngFor -->\n\n\n\n\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n  </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar sticky-top navbar-expand-md usc-navbar\">\n  <ul class=\"navbar-nav site-title\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand nav-text\" routerLink=\"/\">{{ title }}</a>\n    </li>\n  </ul>\n\n  <!-- Hide this on smaller screens into the toggle menu: -->\n  <button class=\"navbar-toggler my-toggler\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\">\n    <span style=\"color:grey;\">&#9776;</span>\n  </button>\n\n\n  <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav link-names\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-link-text\" routerLink=\"/\"> Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-link-text\" routerLink=\"/mylist\"> My List </a>\n      </li>\n    </ul>\n\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <form class=\"d-flex\">\n          <ng-template #rt let-r=\"result\" let-t=\"term\">\n            <a [href]=\"r.weblink\" class=\"search-link\"><img [src]=\"r['img_path']\" class=\"mr-1\" style=\"width: 100px; padding-right: 10px;\">\n              <ngb-highlight [result]=\"r.title\" [term]=\"t\"></ngb-highlight>\n            </a>\n          </ng-template>\n          <input id=\"typeahead-basic\" type=\"text\"\n            class=\"form-control my-search-bar\"\n            placeholder=\"Search\"\n            [ngbTypeahead]=\"search\"\n            [resultFormatter]=\"resultFormatResults\"\n            [resultTemplate]=\"rt\"\n/>\n        </form>\n      </li>\n    </ul>\n\n    <!-- Ends the toggle menu -->\n  </div>\n\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/modal-content/modal-content.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/modal-content/modal-content.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- REGULAR screen size -->\n<div *ngIf=\"isReg && !isSm\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ cast_details.cast.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <!-- Row with Image and Details -->\n    <div class=\"row flex-nowrap\">\n      <div class=\"col img-box\">\n        <img src=\"{{ cast_details.cast.img_path }}\" class=\"modal-img\">\n      </div>\n      <div class=\"col-8 details-col\" *ngIf=\"cast_details\">\n\n        <p *ngIf=\"cast_details.cast.birthday\">Birth: {{ cast_details.cast.birthday }} </p>\n        <p *ngIf=\"cast_details.cast.place_of_birth\">Birthplace: {{ cast_details.cast.place_of_birth }} </p>\n        <p *ngIf=\"cast_details.cast.gender_str\">Gender: {{ cast_details.cast.gender_str }} </p>\n        <p *ngIf=\"cast_details.cast.known_for\">Known For: {{ cast_details.cast.known_for }} </p>\n        <p *ngIf=\"cast_details.cast.also_known_as?.length > 1\">Also Known as: {{ cast_details.cast.also_known_as }} </p>\n        <div *ngIf=\"cast_details.cast.external_ids\">\n          <!-- IMDB -->\n          <div *ngIf=\"cast_details.cast.external_ids.imdb_id\" class=\"icon\" ngbPopover=\"Visit IMDB\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.imdb.com/name/{{ cast_details.cast.external_ids.imdb_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faImdb\" style=\"color:#E0B63D;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- FB -->\n          <div *ngIf=\"cast_details.cast.external_ids.facebook_id\" class=\"icon\" ngbPopover=\"Visit Facebook\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.facebook.com/{{ cast_details.cast.external_ids.facebook_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- TW -->\n          <div *ngIf=\"cast_details.cast.external_ids.twitter_id\" class=\"icon\" ngbPopover=\"Visit Twitter\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.twitter.com/{{ cast_details.cast.external_ids.twitter_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- ig -->\n          <div *ngIf=\"cast_details.cast.external_ids.instagram_id\" class=\"icon\" ngbPopover=\"Visit Instagram\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.instagram.com/{{ cast_details.cast.external_ids.instagram_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faInstagram\" style=\"color: #79567F;\" class=\"fas fa-2x\"></fa-icon>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cast_details.cast.biography\">\n      <h3>Biography</h3>\n      <p> {{ cast_details.cast.biography }}</p>\n    </div>\n    <!-- End Modal Body -->\n  </div>\n\n  <!-- End Modal -->\n</div>\n\n\n\n<!-- MOBILE MODAL -->\n\n<div *ngIf=\"!isReg && isSm\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ cast_details.cast.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <!-- Image row -->\n    <!-- flex-wrap -->\n    <div class=\"row align-items-center\">\n      <div class=\"col d-flex justify-content-center img-box\">\n        <img src=\"{{ cast_details.cast.img_path }}\" class=\"modal-img mx-auto mx-md-0\">\n      </div>\n    </div>\n    <!-- Details row -->\n    <div class=\"row flex-wrap\">\n      <div *ngIf=\"cast_details\" class=\"details-m\">\n        <p *ngIf=\"cast_details.cast.birthday\">Birth: {{ cast_details.cast.birthday }} </p>\n        <p *ngIf=\"cast_details.cast.place_of_birth\">Birthplace: {{ cast_details.cast.place_of_birth }} </p>\n        <p *ngIf=\"cast_details.cast.gender_str\">Gender: {{ cast_details.cast.gender_str }} </p>\n        <p *ngIf=\"cast_details.cast.known_for\">Known For: {{ cast_details.cast.known_for }} </p>\n        <p *ngIf=\"cast_details.cast.also_known_as?.length > 1\">Also Known as: {{ cast_details.cast.also_known_as }} </p>\n        <div *ngIf=\"cast_details.cast.external_ids\">\n\n\n          <!-- IMDB -->\n          <div *ngIf=\"cast_details.cast.external_ids.imdb_id\" class=\"icon\" ngbPopover=\"Visit IMDB\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.imdb.com/name/{{ cast_details.cast.external_ids.imdb_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faImdb\" style=\"color:#E0B63D;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- FB -->\n          <div *ngIf=\"cast_details.cast.external_ids.facebook_id\" class=\"icon\" ngbPopover=\"Visit Facebook\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.facebook.com/{{ cast_details.cast.external_ids.facebook_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- TW -->\n          <div *ngIf=\"cast_details.cast.external_ids.twitter_id\" class=\"icon\" ngbPopover=\"Visit Twitter\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.twitter.com/{{ cast_details.cast.external_ids.twitter_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n          <!-- ig -->\n          <div *ngIf=\"cast_details.cast.external_ids.instagram_id\" class=\"icon\" ngbPopover=\"Visit Instagram\"\n            triggers=\"mouseenter:mouseleave\">\n            <a href=\"https://www.instagram.com/{{ cast_details.cast.external_ids.instagram_id }}\" target=\"_blank\">\n              <fa-icon [icon]=\"faInstagram\" style=\"color: #79567F;\" class=\"fas fa-1x\"></fa-icon>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"cast_details.cast.biography\">\n      <div class=\"col\">\n        <h3>Biography</h3>\n        <p> {{ cast_details.cast.biography }}</p>\n      </div>\n    </div>\n    <!-- End Modal Body -->\n  </div>\n  <!-- End mobile modal -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/tv.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/tv.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"fb-root\"></div>\n<script async defer crossorigin=\"anonymous\" src=\"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0\"\n  nonce=\"cU8SBHAh\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n\n<div class=\"container\">\n  <div *ngIf=\"!details\">\n    <p>Loading...</p>\n  </div>\n\n  <!-- for reg screens: -->\n  <div *ngIf=\"video && details && !isSm\" class=\"row flex-nowrap my-row\">\n    <!-- <p>Video here:</p> -->\n    <div class=\"col-video justify-content-left\">\n      <youtube-player videoId=\"{{ video_id }}\" suggestedQuality=\"highres\">\n      </youtube-player>\n    </div>\n    <!-- Details here -->\n    <div *ngIf=\"details\">\n      <div class=\"col-details\">\n        <h2 style=\"font-weight:300;padding-top:1%;\">{{ details.title }}</h2>\n        <p style=\"padding-bottom:3%;\"><i>{{ details.tagline }}</i></p>\n        <p style=\"font-size:larger;font-weight:300;\">\n          {{ details.year }}&ensp;|&ensp;★ {{ details.vote_average\n          }}&ensp;|&ensp;{{ details.runtime_hrs }}\n        </p>\n        <p class=\"details-text\"><b>Genres: </b>{{ details.genres_list }}</p>\n        <p class=\"details-text\"><b>Spoken Languages: </b>{{ details.langs }}</p>\n\n        <!-- Add to Watchlist -->\n        <button type=\"button\" class=\"btn btn-primary btn-wl\" (click)=\"addtoWL()\">\n          {{ btn_text }}\n        </button>\n        <!-- If added to WL, show alert -->\n        <ngb-alert *ngIf=\"!isAdd\" [type]=\"'success'\" [dismissible]=\"true\" class=\"add-alert\">Added to Watchlist\n        </ngb-alert>\n\n\n      </div>\n    </div>\n    <!-- Ends row -->\n  </div>\n  <!-- Descrip here -->\n  <div *ngIf=\"isReg && !isSm\" class=\"row flex-nowrap my-row\">\n    <div *ngIf=\"details\" class=\"descrip\">\n      <p class=\"details-title\">Description</p>\n      <p class=\"desc-text\">\n        {{ details.overview }}\n      </p>\n    </div>\n  </div>\n  <!-- END for reg screens: -->\n\n  <!-- For MOBILE: -->\n  <!-- default height=390,width=640 ,height=195 width=320-->\n  <div *ngIf=\"video && isSm\" class=\"vid-m flex-nowrap\">\n    <youtube-player videoId=\"{{ video_id }}\" suggestedQuality=\"highres\" height=195 width=320>\n    </youtube-player>\n  </div>\n\n  <div *ngIf=\"details && isSm\" class=\"details-m flex-nowrap\">\n    <h2>{{ details.title }}</h2>\n    <p><i>{{ details.tagline }}</i></p>\n    <p>\n      {{ details.year }}&ensp;|&ensp;★ {{ details.vote_average }}&ensp;|&ensp;{{\n      details.runtime_hrs }}\n    </p>\n    <p class=\"details-text\"><b>Genres: </b>{{ details.genres_list }}</p>\n    <p class=\"details-text\"><b>Spoken Languages: </b>{{ details.langs }}</p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addtoWL()\">\n          {{ btn_text }}\n        </button>\n  </div>\n  <!-- descrip here -->\n  <div *ngIf=\"isSm\" class=\"details-m flex-nowrap my-row\">\n    <div *ngIf=\"details\" class=\"descrip\">\n      <p class=\"details-title\">Description</p>\n      <p class=\"desc-text\">\n        {{ details.overview }}\n      </p>\n    </div>\n  </div>\n\n  <!-- Share buttons -->\n  <div class=\"share-div\" *ngIf=\"isReg && !isSm && video\">\n    <p class=\"details-title\">Share</p>\n    <a class=\"twitter-share-button share-btn\"\n      href=\"https://twitter.com/intent/tweet?url={{ video }}&text=Watch%20{{ details.title }}&hashtags=USC%20%23CSCI571%20%23FightOn\"\n      target=\"_blank\">\n      <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n    </a>\n    <div class=\"fb-share-button share-btn\" data-layout=\"button_count\" data-size=\"small\">\n      <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u={{ video }}&amp;src=sdkpreparse\"\n        class=\"fb-xfbml-parse-ignore\">\n        <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n      </a>\n    </div>\n  </div>\n\n  <!-- Share buttons MOBILE -->\n  <div class=\"details-m flex-nowrap my-row\" *ngIf=\"isSm\">\n    <p class=\"details-title\">Share</p>\n    <a class=\"twitter-share-button share-btn\"\n      href=\"https://twitter.com/intent/tweet?url={{ video }}&text=Watch%20{{ details.title }}&hashtags=USC%20%23CSCI571%20%23FightOn\"\n      target=\"_blank\">\n      <fa-icon [icon]=\"faTwitter\" style=\"color:#558FE9;\" class=\"fas fa-2x\"></fa-icon>\n    </a>\n    <div class=\"fb-share-button share-btn\" data-layout=\"button_count\" data-size=\"small\">\n      <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u={{ video }}&amp;src=sdkpreparse\"\n        class=\"fb-xfbml-parse-ignore\">\n        <fa-icon [icon]=\"faFacebook\" style=\"color:#393EE8;\" class=\"fas fa-2x\"></fa-icon>\n      </a>\n    </div>\n  </div>\n\n  <!-- Cast cards carousel -->\n  <div *ngIf=\"cast\" class=\"row cast-container\">\n    <div *ngIf=\"isReg && !isSm\">\n      <h3>Full Cast and Crew</h3>\n    </div>\n\n    <div *ngIf=\"isSm\" class=\"details-m\">\n      <h3>Full Cast and Crew</h3>\n    </div>\n\n    <div class=\"container-fluid py-2 my-container-fluid\">\n      <div class=\"d-flex flex-row flex-nowrap overflow-auto my-flex\">\n        <div *ngFor=\"let c of cast | keyvalue\">\n          <!-- each card in its own column -->\n          <div class=\"col\">\n            <!-- <div (click)=\"openModal(c.value.id)\">Get info</div> -->\n            <div (click)=\"openModal(c.value.id)\" class=\"open-modal\">\n              <div class=\" card border-0 my-card\" id=\"{{ c.value.id }}\">\n                <img\n                  class=\"card-img-top my-card-img\"\n                  src=\"{{ c.value.img_path }}\"\n                />\n                <div class=\"card-body\">\n                  <!-- <button (click)=\"openModal(this.value);\" id=\"{{ c.value.id }}\">Info</button> -->\n                  <p class=\"card-text my-card-text\">\n                    <b>{{ c.value.name }}</b> <br />\n                    <span style=\"font-weight:800;\">AS</span>\n                    <br />\n                    {{ c.value.character }}\n                  </p>\n                </div>\n\n                <!-- End the 'open modal' div -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- End row -->\n      </div>\n      <!-- End container -->\n    </div>\n  </div>\n\n  <!-- REVIEWS rREGULAR-->\n  <div *ngIf=\"reviews?.length > 0\">\n    <div *ngIf=\"isReg && !isSm\">\n      <h3>Reviews {{ reviews.length }}</h3>\n      <div *ngFor=\"let r of reviews | keyvalue\">\n        <div class=\"card review-card\">\n          <div class=\"card-body review-card\">\n            <div class=\"row\">\n              <div class=\"col-2 d-flex justify-content-center\">\n                <img src=\"{{ r.value.img_path }}\" class=\"avatar\" />\n              </div>\n              <div class=\"col\">\n                <h4 class=\"review-font\">\n                  A review created by {{ r.value.author }}\n                </h4>\n                <div class=\"rating\">★{{ r.value.author_details.rating }}</div>\n\n                <p class=\"review-font-gray\">\n                  <br />Written by {{ r.value.author }} on {{ r.value.review_date\n                }}\n                </p>\n                <p class=\"review-font\">\n                  {{ (r.value.content | slice:0:320) + '...' }}\n                </p>\n                <a class=\"review-link\" href=\"{{ r.value.url }}\" target=\"_blank\">Read the rest</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!-- REVIEWS MOBILE -->\n  <div *ngIf=\"reviews?.length > 0\">\n    <div *ngIf=\"isSm\">\n      <h3>Reviews {{ reviews.length }}</h3>\n      <div *ngFor=\"let r of reviews | keyvalue\">\n        <div class=\"card review-card\">\n          <div class=\"card-body\">\n\n            <!-- Avatar row -->\n            <div class=\"row flex-wrap\">\n              <div class=\"col d-flex justify-content-left\">\n                <img src=\"{{ r.value.img_path }}\" class=\"avatar\" />\n              </div>\n            </div>\n\n            <!-- review text row -->\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n                <h4 class=\"review-font\">\n                  A review created by {{ r.value.author }}\n                </h4>\n              </div>\n            </div>\n\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n                <div class=\"rating\">★{{ r.value.author_details.rating }}</div>\n              </div>\n            </div>\n\n            <br>\n\n            <div class=\"row flex-wrap\">\n              <div class=\"col\">\n\n                <p class=\"review-font-gray\">\n                  <br />Written by {{ r.value.author }} on {{ r.value.review_date\n                }}\n                </p>\n                <p class=\"review-font\">\n                  {{ (r.value.content | slice:0:109) + '...' }}\n                </p>\n                <a class=\"review-link\" href=\"{{ r.value.url }}\" target=\"_blank\">Read the rest</a>\n              </div>\n              <!-- end row -->\n            </div>\n            <!-- end cardbody -->\n          </div>\n          <!-- end card -->\n        </div>\n        <!-- end ngfor -->\n      </div>\n      <!-- end ngif -->\n    </div>\n  </div>\n\n  <!-- ends main container -->\n</div>\n\n\n\n\n<!-- CAAROUSELS -->\n<!-- Rec Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Recommended Movies</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"recommended_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of recommended_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div class=\"row flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                        id=\"{{m?.id}}\" /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && recommended_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of recommended_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                  id=\"{{m?.id}}\" /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <!-- End ngFor -->\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>\n\n\n<!-- Sim Movies -->\n<div class=\"movie-container\">\n  <h2 class=\"section-heading\">Similar Movies</h2>\n  <!-- For REGULAR size -->\n  <div *ngIf=\"isReg && !isSm\">\n    <ngb-carousel [interval]=\"0\" *ngIf=\"similar_movies2\" class=\"mycarousel\">\n      <div *ngFor=\"let arr of similar_movies2\">\n        <!-- make row of 6 movies -->\n        <ng-template ngbSlide>\n          <div class=\"row flex-nowrap\">\n            <!-- for every row, add 6 movies from subarr -->\n            <div *ngFor=\"let m of arr\">\n              <div *ngIf=\"m.poster_path\">\n                <!-- For each movie in subarr of 6  movies, make this: -->\n                <div class=\"col-xs-8 mycard\">\n                  <!-- Container for link, image, and caption: -->\n                  <div class=\"card-img-caption\">\n                    <a href=\"/watch/movie/{{ m?.id }}\">\n                      <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                        id=\"{{m?.id}}\" /></a>\n                    <div class=\"my-carousel-caption2\">\n                      <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                    </div>\n                    <!-- End of card-img-caption -->\n                  </div>\n                  <!-- End of mycard -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </ngb-carousel>\n  </div>\n</div>\n<!-- FOR MOBILE -->\n<div *ngIf=\"isSm && similar_movies3.length > 0\">\n  <ngb-carousel [interval]=\"0\" class=\"mycarousel\">\n    <div *ngFor=\"let m of similar_movies3\">\n      <div *ngIf=\"m.poster_path\">\n        <ng-template ngbSlide>\n          <div class=\"row-m flex-nowrap\">\n            <div class=\"col mycard\">\n              <div class=\"card-img-caption\">\n                <a href=\"/watch/movie/{{ m?.id }}\">\n                  <img src=\"https://image.tmdb.org/t/p/w200{{m?.poster_path}}\" alt=\"{{m.title}}\" class=\"slide-item\"\n                  id=\"{{m?.id}}\" /></a>\n                <div class=\"my-carousel-caption2\">\n                  <div class=\"card-text caption-font2\">{{ m.title }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <!-- End ngFor -->\n      </div>\n    </div>\n    <!-- End mobile template -->\n  </ngb-carousel>\n  <!-- End movie container -->\n</div>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tv/tv.component */ "./src/app/components/tv/tv.component.ts");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "./src/app/components/mylist/mylist.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");



// import { fromEventPattern } from "rxjs";





const routes = [
    // { path: "", component: HomeComponent },
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: "watch",
        children: [
            { path: "movie/:id", component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
            { path: "tv/:id", component: _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_5__["TvComponent"] }
        ]
    },
    {
        path: "mylist",
        component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"]
    },
    {
        path: "search/:query",
        component: _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"]
    },
    { path: "**", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  /* position: absolute; */\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  padding-top: 500px;\n  padding-bottom: 10px;\n  margin-bottom: 0 !important;\n}\n\n.my-footer {\n  height: 115px;\n  background-image: linear-gradient(#080c33, #000000);\n  color: white;\n  text-align: center;\n  padding-top: 4%;\n  margin-top: 100vh;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbURBQW1EO0VBQ25ELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm15LWZvb3RlciB7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDgwYzMzLCAjMDAwMDAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgbWFyZ2luLXRvcDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = "movie-app";
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tv/tv.component */ "./src/app/components/tv/tv.component.ts");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "./src/app/components/mylist/mylist.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");
/* harmony import */ var _components_movie_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/movie/modal-content/modal-content.component */ "./src/app/components/movie/modal-content/modal-content.component.ts");
/* harmony import */ var _components_tv_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tv/modal-content/modal-content.component */ "./src/app/components/tv/modal-content/modal-content.component.ts");
/* harmony import */ var _services_modal_container_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/modal-container.service */ "./src/app/services/modal-container.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/tv.service */ "./src/app/services/tv.service.ts");

























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"],
            _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_7__["TvComponent"],
            _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_8__["MylistComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
            _components_movie_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["ModalContentComponent"],
            _components_tv_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["ModalContent2Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_17__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"]
        ],
        providers: [
            _services_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_14__["MovieService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_15__["SearchService"],
            _services_modal_container_service__WEBPACK_IMPORTED_MODULE_20__["ModalContainerService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_22__["LocalStorageService"],
            _services_tv_service__WEBPACK_IMPORTED_MODULE_24__["TvService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_components_movie_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["ModalContentComponent"], _components_tv_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["ModalContent2Component"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: white;\n}\n\nngb-carousel {\n  max-width: 80%;\n  margin: 50px auto;\n  outline: none;\n}\n\n/* CURRENTLY PLAYING CAROUSEL */\n\n.curr-carousel .carousel-control-next {\n  transform: translate(50px, 0px) !important;\n}\n\n.curr-carousel .carousel-control-prev {\n  transform: translate(-50px, 0px) !important;\n}\n\n/* MINI CAROUSELS */\n\n/* .mycarousel-mobile {\n  width: inherit;\n  margin: auto;\n  padding-left: 2.5%;\n  justify-content: center;\n} */\n\n.curr_playing_img {\n  max-height: 400px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n}\n\nngb-carousel img {\n  width: 100%;\n  outline: none;\n}\n\n.carousel-inner {\n  padding: 15px;\n}\n\n/* Hover effects for main carousel */\n\n.my-carousel-caption {\n  opacity: 0;\n  /* z-index: 2; */\n  transition: all 0.4s;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.795), black);\n  height: 35%;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n\n.caption-font {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n  padding-top: 5%;\n}\n\n.curr_playing_img:hover .my-carousel-caption {\n  z-index: 2;\n  opacity: 1;\n  cursor: pointer;\n}\n\n.carousel-indicators {\n  z-index: 20;\n  bottom: -50px !important;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n  transform: translate(-80px, 0px);\n}\n\n.carousel-control-next {\n  z-index: 20;\n  transform: translate(80px, 0px);\n}\n\n.section-heading {\n  padding: 0 0 0 12%;\n}\n\n.movie-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.row-less {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start !important;\n}\n\n.row-m {\n  width: 100%;\n  /* height: 500px; */\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n}\n\n/* Image for each mini carousel item: */\n\n.slide-item:hover {\n  transform: scale(1.08);\n  cursor: pointer;\n}\n\n.caption-font2 {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n}\n\n/* Change carousel appearance from screen size */\n\n/* REG SCREENS */\n\n@media only screen and (min-width: 601px) {\n  .card-img-caption {\n    height: 250px;\n    overflow: hidden;\n  }\n\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    padding-left: 2.5%;\n  }\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .row-less .slide-item {\n    /* padding-left: 10px; */\n    /* padding-right: 10px; */\n    margin-right: 20px;\n    /* margin-left: 50px; */\n\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.4s;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 40px;\n    position: relative;\n    width: 180px;\n  }\n\n  .card-img-caption:hover .my-carousel-caption2 {\n    cursor: pointer;\n    opacity: 1;\n    z-index: 1;\n  }\n}\n\n/* MOBILE */\n\n@media only screen and (max-width: 600px) {\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    /* height: 500px; */\n    padding-left: 1%;\n  }\n\n  .carousel-indicators {\n    visibility: hidden;\n  }\n\n  .carousel-control-prev {\n    z-index: 20;\n    transform: translate(-10px, 0px);\n  }\n\n  .carousel-control-next {\n    z-index: 20;\n    transform: translate(10px, 0px);\n  }\n\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 150% !important;\n    width: 100% !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 1;\n    z-index: 1;\n    /* transition: all 0.4s; */\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 30px;\n    position: relative;\n    width: 99%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQSxtQkFBbUI7O0FBRW5COzs7OztHQUtHOztBQUVIO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsMkVBQTJFO0VBQzNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQSx1Q0FBdUM7O0FBRXZDO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGdEQUFnRDs7QUFDaEQsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7O0lBRXZCLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCOzs7O0tBSUM7SUFDRCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOztBQUVBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsV0FBVztJQUNYLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDViwwQkFBMEI7SUFDMUI7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIENVUlJFTlRMWSBQTEFZSU5HIENBUk9VU0VMICovXG4uY3Vyci1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwgMHB4KSAhaW1wb3J0YW50O1xufVxuLmN1cnItY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1JTkkgQ0FST1VTRUxTICovXG5cbi8qIC5teWNhcm91c2VsLW1vYmlsZSB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMi41JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59ICovXG5cbi5jdXJyX3BsYXlpbmdfaW1nIHtcbiAgbWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLyogSG92ZXIgZWZmZWN0cyBmb3IgbWFpbiBjYXJvdXNlbCAqL1xuLm15LWNhcm91c2VsLWNhcHRpb24ge1xuICBvcGFjaXR5OiAwO1xuICAvKiB6LWluZGV4OiAyOyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNzk1KSwgYmxhY2spO1xuICBoZWlnaHQ6IDM1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNhcHRpb24tZm9udCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uY3Vycl9wbGF5aW5nX2ltZzpob3ZlciAubXktY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbiAgYm90dG9tOiAtNTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MHB4LCAwcHgpO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDBweCk7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwIDAgMCAxMiU7XG59XG5cbi5tb3ZpZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5yb3ctbGVzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLnJvdy1tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEltYWdlIGZvciBlYWNoIG1pbmkgY2Fyb3VzZWwgaXRlbTogKi9cblxuLnNsaWRlLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXB0aW9uLWZvbnQyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xufVxuXG4vKiBDaGFuZ2UgY2Fyb3VzZWwgYXBwZWFyYW5jZSBmcm9tIHNjcmVlbiBzaXplICovXG4vKiBSRUcgU0NSRUVOUyAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIC5jYXJkLWltZy1jYXB0aW9uIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAubXljYXJkIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5teWNhcm91c2VsIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAyLjUlO1xuICB9XG4gIC5zbGlkZS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgLnJvdy1sZXNzIC5zbGlkZS1pdGVtIHtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXG4gICAgLyogcGFkZGluZy1yaWdodDogMTBweDsgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXG5cbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmQtaW1nLWNhcHRpb24gLm15LWNhcm91c2VsLWNhcHRpb24yIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuODU2KSA4MCUsXG4gICAgICBibGFjayAxMDAlXG4gICAgKTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuXG4gIC5jYXJkLWltZy1jYXB0aW9uOmhvdmVyIC5teS1jYXJvdXNlbC1jYXB0aW9uMiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4vKiBNT0JJTEUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm15Y2FyZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAubXljYXJvdXNlbCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgMHB4KTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7XG4gIH1cblxuICAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbiAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMC40czsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTYpIDgwJSxcbiAgICAgIGJsYWNrIDEwMCVcbiAgICApO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk5JTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");





// import { splitMovies } from "./myHelper.js";

let HomeComponent = class HomeComponent {
    constructor(homeService, localStorageService, breakpointObserver) {
        this.homeService = homeService;
        this.localStorageService = localStorageService;
        this.breakpointObserver = breakpointObserver;
        this.continue_watching_data = [];
        this.continue_watching_arr = [];
        this.continue_watching = [];
        this.continue_watching2 = [];
        this.home_data = {};
        this.curr_movies = [];
        this.popular_movies = [];
        this.top_rated_movies = [];
        this.trending_movies = [];
        this.popular_tv = [];
        this.top_rated_tv = [];
        this.trending_tv = [];
        this.popular_movies2 = [];
        this.popular_movies3 = [];
        this.top_rated_movies2 = [];
        this.trending_movies2 = [];
        this.popular_tv2 = [];
        this.top_rated_tv2 = [];
        this.trending_tv2 = [];
        this.top_rated_movies3 = [];
        this.trending_movies3 = [];
        this.popular_tv3 = [];
        this.top_rated_tv3 = [];
        this.trending_tv3 = [];
        this.isSm = false;
        this.isReg = false;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge
        ])
            .subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall]) {
                this.isSm = true;
                this.isReg = false;
                console.log("Matches XSmall viewport");
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small]) {
                console.log("Matches Small viewport");
                this.isSm = true;
                this.isReg = false;
                console.log(this.isSm);
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium]) {
                console.log("Matches Medium viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large]) {
                console.log("Matches Large viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]) {
                console.log("Matches XLarge viewport");
                this.isSm = false;
                this.isReg = true;
            }
        });
        this.fetchHomeData();
        this.fetchCW();
    }
    splitMovies(arr) {
        let res = [];
        while (arr.length > 0) {
            res.push(arr.splice(0, 6));
        }
        return res;
    }
    fetchCW() {
        console.log("fetch CW");
        this.continue_watching_data = this.localStorageService.getAll();
        for (var i = 0; i < this.continue_watching_data.length; i++) {
            let curr = this.continue_watching_data[i]; //string rep of movie
            try {
                let curr_obj = JSON.parse(curr);
                if (curr_obj["id"] && !curr_obj["isWL"]) {
                    this.continue_watching_arr.push(curr_obj);
                }
            }
            catch (e) {
                console.log("Error", e);
            }
        }
        //split into subarrays of len 6 each
        this.continue_watching = this.splitMovies(this.continue_watching_arr);
        console.log("Continue watch:", this.continue_watching);
        this.continue_watching2 = this.continue_watching.flat();
    }
    fetchHomeData() {
        this.homeService.getHomeData().subscribe(res => {
            this.home_data = res;
            this.curr_movies = this.home_data.curr_movies;
            for (let i = 0; i < this.curr_movies.length; i++) {
                this.curr_movies[i]["img_path"] =
                    "https://image.tmdb.org/t/p/w1280" +
                        this.curr_movies[i]["backdrop_path"];
            }
            this.popular_movies = this.home_data.popular_movies;
            this.popular_movies2 = this.splitMovies(this.popular_movies);
            this.popular_movies3 = this.popular_movies2.flat();
            this.top_rated_movies = this.home_data.top_rated_movies;
            this.top_rated_movies2 = this.splitMovies(this.top_rated_movies);
            this.top_rated_movies3 = this.top_rated_movies2.flat();
            this.trending_movies = this.home_data.trending_movies;
            this.trending_movies2 = this.splitMovies(this.trending_movies);
            this.trending_movies3 = this.trending_movies2.flat();
            this.popular_tv = this.home_data.popular_tv;
            this.popular_tv2 = this.splitMovies(this.popular_tv);
            this.popular_tv3 = this.popular_tv2.flat();
            this.top_rated_tv = this.home_data.top_rated_tv;
            this.top_rated_tv2 = this.splitMovies(this.top_rated_tv);
            this.top_rated_tv3 = this.top_rated_tv2.flat();
            this.trending_tv = this.home_data.trending_tv;
            this.trending_tv2 = this.splitMovies(this.trending_tv);
            this.trending_tv3 = this.trending_tv2.flat();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/movie/modal-content/modal-content.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/movie/modal-content/modal-content.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body {\n  width: 100%;\n  padding: 5% 5% 2% 5%;\n  /* padding-bottom: 0; */\n  display: flex;\n  flex-direction: column;\n  /* input {\n    margin-bottom: 10px;\n  } */\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: black;\n}\n\n/* change modal screen sizes */\n\n@media only screen and (min-width: 1600px) {\n  .modal-img {\n    width: 300px;\n    padding-bottom: 20px;\n  }\n\n  .img-box {\n    text-align: left;\n    padding-right: 0px;\n    margin-right: 0;\n  }\n\n  .details-col {\n    margin-left: 0;\n    padding-left: 0;\n  }\n}\n\n@media only screen and (max-width: 1599px) {\n  .modal-img {\n    width: 200px;\n    padding-bottom: 20px;\n  }\n\n  .img-box {\n    text-align: left;\n    padding-right: 0px;\n    margin-right: 0px;\n  }\n\n  .details-col {\n    margin-left: -600px;\n  }\n}\n\n/* MOBILE */\n\n@media only screen and (max-width: 600px) {\n  .modal-img {\n    width: 98%;\n    padding-bottom: 5px;\n  }\n\n  .img-box {\n    padding-left: 3%;\n    justify-content: center;\n  }\n\n  .details-m {\n    padding-left: 2%;\n  }\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  font-size: larger;\n  /* color: inherit; */\n}\n\n.icon {\n  display: inline;\n  padding-right: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb2RhbC1jb250ZW50L21vZGFsLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEI7O0tBRUc7QUFDTDs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkOztBQUNBLDhCQUE4Qjs7QUFDOUI7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb2RhbC1jb250ZW50L21vZGFsLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlIDUlIDIlIDUlO1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH0gKi9cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnAge1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBjaGFuZ2UgbW9kYWwgc2NyZWVuIHNpemVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAubW9kYWwtaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmRldGFpbHMtY29sIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLm1vZGFsLWltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmltZy1ib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgLmRldGFpbHMtY29sIHtcbiAgICBtYXJnaW4tbGVmdDogLTYwMHB4O1xuICB9XG59XG5cbi8qIE1PQklMRSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtaW1nIHtcbiAgICB3aWR0aDogOTglO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLW0ge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/movie/modal-content/modal-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/movie/modal-content/modal-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");





let ModalContentComponent = class ModalContentComponent {
    constructor(activeModal, breakpointObserver) {
        this.activeModal = activeModal;
        this.breakpointObserver = breakpointObserver;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"];
        this.faImdb = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faImdb"];
        this.isSm = false;
        this.isReg = false;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge
        ])
            .subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall]) {
                this.isSm = true;
                this.isReg = false;
                console.log("Matches XSmall viewport");
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small]) {
                console.log("Matches Small viewport");
                this.isSm = true;
                this.isReg = false;
                console.log(this.isSm);
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium]) {
                console.log("Matches Medium viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large]) {
                console.log("Matches Large viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]) {
                console.log("Matches XLarge viewport");
                this.isSm = false;
                this.isReg = true;
            }
        });
    }
};
ModalContentComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalContentComponent.prototype, "cast_details", void 0);
ModalContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-modal-content",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/modal-content/modal-content.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-content.component.css */ "./src/app/components/movie/modal-content/modal-content.component.css")).default]
    })
], ModalContentComponent);



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* LARGE */\n@media only screen and (min-width: 1600px) {\n  .descrip {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  .col-details {\n    padding: 0 0 0 15%;\n    margin: 0;\n    width: 200%;\n  }\n\n  .container {\n    padding: 2% 2% 2% 2%;\n    /* margin: 0 10% 0 30%; */\n  }\n  .avatar {\n    width: 60px;\n    height: 60px;\n  }\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n  }\n  .rating {\n    display: inline-block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    position: absolute;\n  }\n  .col-video {\n    margin: 0;\n    /* text-align: left; */\n  }\n\n  .card-img-caption {\n    height: 250px;\n    overflow: hidden;\n  }\n\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    padding-left: 2.5%;\n  }\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .row-less .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.4s;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 40px;\n    position: relative;\n    width: 180px;\n  }\n\n  .card-img-caption:hover .my-carousel-caption2 {\n    cursor: pointer;\n    opacity: 1;\n    z-index: 1;\n  }\n}\n/* MEDIUM */\n@media only screen and (max-width: 1599px) {\n  .col-video {\n    margin-left: -20px !important;\n    margin-right: 0 !important;\n    /* text-align: left; */\n  }\n  .descrip {\n    padding: 0;\n    margin: auto;\n    /* margin-left: 20px; */\n  }\n\n  .col-details {\n    padding: 0 0 0 5%;\n    margin-left: 0 !important;\n    width: 200%;\n  }\n\n  .container {\n    padding: 1%;\n    margin: 0 2% 0 10%;\n  }\n  .avatar {\n    width: 60px;\n    height: 60px;\n  }\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n  }\n  .rating {\n    display: inline-block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    position: absolute;\n  }\n  .col-video {\n    /* margin-left: -120px; */\n    margin: auto;\n    text-align: left;\n  }\n\n  .card-img-caption {\n    height: 250px;\n    overflow: hidden;\n  }\n\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    padding-left: 2.5%;\n  }\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .row-less .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.4s;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 40px;\n    position: relative;\n    width: 180px;\n  }\n\n  .card-img-caption:hover .my-carousel-caption2 {\n    cursor: pointer;\n    opacity: 1;\n    z-index: 1;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .col-video {\n    margin: 0;\n    /* text-align: left; */\n  }\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    /* height: 500px; */\n    padding-left: 1%;\n  }\n\n  .carousel-indicators {\n    visibility: hidden;\n  }\n\n  .carousel-control-prev {\n    z-index: 20;\n    transform: translate(-10px, 0px);\n  }\n\n  .carousel-control-next {\n    z-index: 20;\n    transform: translate(10px, 0px);\n  }\n\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 150% !important;\n    width: 100% !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 1;\n    z-index: 1;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 30px;\n    position: relative;\n    width: 99%;\n  }\n  .container {\n    padding: 2%;\n    margin: 0 0 0 3%;\n  }\n\n  .avatar {\n    width: 100px !important;\n    height: 100px !important;\n    max-width: 100px !important;\n    max-height: 100px !important;\n    padding-left: 10%;\n    /* margin-bottom: 2%; */\n  }\n\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n    width: 94%;\n  }\n  .rating {\n    display: block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n    position: absolute;\n  }\n}\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: white;\n}\n/* Bootstrap grid */\n.my-row {\n  margin-bottom: 2%;\n  margin-top: 2%;\n}\n.desc-text {\n  color: #9596b1;\n}\n.details-title {\n  font-size: medium;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 0;\n}\n.details-text {\n  word-wrap: break-word;\n}\n.share-div {\n  margin-left: -1px;\n  padding-left: 0;\n}\n@media only screen and (max-width: 600px) {\n  .share-div {\n    margin-left: auto;\n  }\n}\n.share-btn {\n  display: inline-block;\n  padding-right: 8px;\n  padding-left: 0;\n  padding-top: 0;\n  margin-left: 0;\n  margin-top: 0%;\n  text-decoration: none;\n}\n/* CAST AND CREW section */\n.cast-container {\n  margin-top: 3%;\n}\n.my-flex {\n  margin-left: 0;\n}\n.my-card {\n  border-radius: 20px;\n  height: 400px;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n}\n.my-card-text {\n  color: black;\n  text-align: center;\n}\n.my-card-img {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  /* max-height: 200px; */\n}\n/* REVIEWS section */\n/* .review-card {\n  margin-top: 10px;\n  border-radius: 10px;\n} */\n.review-font {\n  color: black !important;\n  display: inline-block;\n}\n.review-font-gray {\n  color: gray;\n}\n.review-link {\n  text-decoration: underline;\n}\n/* Open modal */\n.open-modal {\n  cursor: pointer;\n  outline: none;\n}\n@media only screen and (min-width: 1600px) {\n  .my-modal-class .modal-dialog {\n    max-width: 60%;\n    /* max-height: 500px; */\n  }\n}\n@media only screen and (max-width: 1599px) {\n  .my-modal-class .modal-dialog {\n    max-width: 70%;\n    /* max-height: 500px; */\n  }\n}\n@media only screen and (max-width: 600px) {\n  .my-modal-class .modal-dialog {\n    max-width: 400px;\n    /* width: 410px; */\n    /* text-align: center; */\n  }\n}\n/* HOME COPIED */\nngb-carousel {\n  max-width: 80%;\n  margin: 50px auto;\n  outline: none;\n}\nngb-carousel img {\n  width: 100%;\n  outline: none;\n}\n.carousel-inner {\n  padding: 15px;\n}\n/* Hover effects for main carousel */\n.my-carousel-caption {\n  opacity: 0;\n  /* z-index: 2; */\n  transition: all 0.4s;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.795), black);\n  height: 35%;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n.caption-font {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n  padding-top: 5%;\n}\n.curr_playing_img:hover .my-carousel-caption {\n  z-index: 2;\n  opacity: 1;\n  cursor: pointer;\n}\n.carousel-indicators {\n  z-index: 20;\n  bottom: -50px !important;\n}\n.carousel-control-prev {\n  z-index: 20;\n  transform: translate(-80px, 0px);\n}\n.carousel-control-next {\n  z-index: 20;\n  transform: translate(80px, 0px);\n}\n.section-heading {\n  padding: 0 0 0 12%;\n}\n.movie-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.row-less {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start !important;\n}\n.row-m {\n  width: 100%;\n  /* height: 500px; */\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n}\n/* Image for each mini carousel item: */\n.slide-item:hover {\n  transform: scale(1.08);\n  cursor: pointer;\n}\n.caption-font2 {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVjtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7SUFDVCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixvQkFBb0I7SUFDcEI7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7QUFFQSxXQUFXO0FBQ1g7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixvQkFBb0I7SUFDcEI7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWOzs7O0tBSUM7SUFDRCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUE7Ozs7OztFQU1FLFlBQVk7QUFDZDtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBRUEsb0JBQW9CO0FBQ3BCOzs7R0FHRztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7QUFDRjtBQUVBLGdCQUFnQjtBQUVoQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiwyRUFBMkU7RUFDM0UsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztBQUNUO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtBQUNqQztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQSx1Q0FBdUM7QUFFdkM7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExBUkdFICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAuZGVzY3JpcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gIC5jb2wtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMCAwIDAgMTUlO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMjAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlIDIlIDIlIDIlO1xuICAgIC8qIG1hcmdpbjogMCAxMCUgMCAzMCU7ICovXG4gIH1cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIC5yZXZpZXctY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5yYXRpbmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmNvbC12aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbiB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLm15Y2FyZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAubXljYXJvdXNlbCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMi41JTtcbiAgfVxuICAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIC5yb3ctbGVzcyAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkLWltZy1jYXB0aW9uIC5teS1jYXJvdXNlbC1jYXB0aW9uMiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg1NikgODAlLFxuICAgICAgYmxhY2sgMTAwJVxuICAgICk7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbjpob3ZlciAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLyogTUVESVVNICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAuY29sLXZpZGVvIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xuICB9XG4gIC5kZXNjcmlwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKiBtYXJnaW4tbGVmdDogMjBweDsgKi9cbiAgfVxuXG4gIC5jb2wtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMCAwIDAgNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIG1hcmdpbjogMCAyJSAwIDEwJTtcbiAgfVxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLnJldmlldy1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnJhdGluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuY29sLXZpZGVvIHtcbiAgICAvKiBtYXJnaW4tbGVmdDogLTEyMHB4OyAqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNhcmQtaW1nLWNhcHRpb24ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5teWNhcmQge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLm15Y2Fyb3VzZWwge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XG4gIH1cbiAgLnNsaWRlLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAucm93LWxlc3MgLnNsaWRlLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZC1pbWctY2FwdGlvbiAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTYpIDgwJSxcbiAgICAgIGJsYWNrIDEwMCVcbiAgICApO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLmNhcmQtaW1nLWNhcHRpb246aG92ZXIgLm15LWNhcm91c2VsLWNhcHRpb24yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC12aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIH1cbiAgLm15Y2FyZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAubXljYXJvdXNlbCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgMHB4KTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7XG4gIH1cblxuICAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbiAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTYpIDgwJSxcbiAgICAgIGJsYWNrIDEwMCVcbiAgICApO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk5JTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW46IDAgMCAwIDMlO1xuICB9XG5cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDIlOyAqL1xuICB9XG5cbiAgLnJldmlldy1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgfVxuICAucmF0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm9vdHN0cmFwIGdyaWQgKi9cbi5teS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5kZXNjLXRleHQge1xuICBjb2xvcjogIzk1OTZiMTtcbn1cblxuLmRldGFpbHMtdGl0bGUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmRldGFpbHMtdGV4dCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNoYXJlLWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNoYXJlLWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuLnNoYXJlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQ0FTVCBBTkQgQ1JFVyBzZWN0aW9uICovXG4uY2FzdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLm15LWZsZXgge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm15LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5teS1jYXJkLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15LWNhcmQtaW1nIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC8qIG1heC1oZWlnaHQ6IDIwMHB4OyAqL1xufVxuXG4vKiBSRVZJRVdTIHNlY3Rpb24gKi9cbi8qIC5yZXZpZXctY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG5cbi5yZXZpZXctZm9udCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXZpZXctZm9udC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5yZXZpZXctbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBPcGVuIG1vZGFsICovXG4ub3Blbi1tb2RhbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLm15LW1vZGFsLWNsYXNzIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIC8qIG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAubXktbW9kYWwtY2xhc3MgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgLyogbWF4LWhlaWdodDogNTAwcHg7ICovXG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm15LW1vZGFsLWNsYXNzIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgLyogd2lkdGg6IDQxMHB4OyAqL1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgfVxufVxuXG4vKiBIT01FIENPUElFRCAqL1xuXG5uZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLyogSG92ZXIgZWZmZWN0cyBmb3IgbWFpbiBjYXJvdXNlbCAqL1xuLm15LWNhcm91c2VsLWNhcHRpb24ge1xuICBvcGFjaXR5OiAwO1xuICAvKiB6LWluZGV4OiAyOyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNzk1KSwgYmxhY2spO1xuICBoZWlnaHQ6IDM1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNhcHRpb24tZm9udCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uY3Vycl9wbGF5aW5nX2ltZzpob3ZlciAubXktY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbiAgYm90dG9tOiAtNTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MHB4LCAwcHgpO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDBweCk7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwIDAgMCAxMiU7XG59XG5cbi5tb3ZpZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5yb3ctbGVzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLnJvdy1tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEltYWdlIGZvciBlYWNoIG1pbmkgY2Fyb3VzZWwgaXRlbTogKi9cblxuLnNsaWRlLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXB0aW9uLWZvbnQyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _services_modal_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/modal-container.service */ "./src/app/services/modal-container.service.ts");
/* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-content/modal-content.component */ "./src/app/components/movie/modal-content/modal-content.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");






// import { splitMovies } from "../home/myHelper.js";
// import { convertToHours } from "./detailsHelper.js";

// Modal materials




let MovieComponent = class MovieComponent {
    constructor(route, movieService, modalService, modalContainerService, localStorageService, breakpointObserver) {
        this.route = route;
        this.movieService = movieService;
        this.modalService = modalService;
        this.modalContainerService = modalContainerService;
        this.localStorageService = localStorageService;
        this.breakpointObserver = breakpointObserver;
        this.genres_list = [];
        this.langs = [];
        this.btn_text = "Add to Watchlist";
        this.isAdd = true;
        this.isSm = false;
        this.isReg = false;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"];
    }
    // gets called AFTER constructor
    ngOnInit() {
        this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge
        ])
            .subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall]) {
                this.isSm = true;
                this.isReg = false;
                console.log("Matches XSmall viewport");
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small]) {
                console.log("Matches Small viewport");
                this.isSm = true;
                this.isReg = false;
                console.log(this.isSm);
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium]) {
                console.log("Matches Medium viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large]) {
                console.log("Matches Large viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge]) {
                console.log("Matches XLarge viewport");
                this.isSm = false;
                this.isReg = true;
            }
        });
        this.id = this.route.snapshot.paramMap.get("id");
        this.movieService.getDetailsData("movie", this.id).subscribe(res => {
            this.movie_data = res;
            // console.log("Got details data from backend");
            // Youtube trailer
            if (!this.movie_data.video.results[0].key) {
                this.video = "https://www.youtube.com/watch?v=tzkWB85ULJY";
                this.video_id = "tzkWB85ULJY";
            }
            else {
                this.video =
                    "https://www.youtube.com/watch?v=" +
                        this.movie_data.video.results[0].key;
                this.video_id = this.movie_data.video.results[0].key;
            }
            // console.log("Video link:", this.video);
            // Details
            this.details = this.movie_data.details;
            this.details["year"] = this.details["release_date"].split("-")[0];
            this.details["runtime_hrs"] = this.convertToHours(this.details["runtime"]);
            for (var i = 0; i < this.details["genres"].length; i++) {
                this.genres_list.push(this.details["genres"][i]["name"]);
            }
            this.details["genres_list"] = this.genres_list.join(", ");
            for (var i = 0; i < this.details["spoken_languages"].length; i++) {
                this.langs.push(this.details["spoken_languages"][i]["name"]);
            }
            this.details["langs"] = this.langs.join(", ");
            this.cast = this.movie_data.cast;
            this.reviews = this.movie_data.reviews;
            this.recommended = this.movie_data.recommended.results;
            this.recommended_movies2 = this.splitMovies(this.recommended);
            this.recommended_movies3 = this.recommended_movies2.flat();
            this.similar = this.movie_data.similar.results;
            this.similar_movies2 = this.splitMovies(this.similar);
            this.similar_movies3 = this.similar_movies2.flat();
            // Add to local storage
            this.storage_data = {
                id: this.id,
                title: this.details.title,
                poster_path: this.details.poster_path,
                isWL: false
            };
            console.log("add to Continue Watching");
            this.localStorageService.set(this.id, JSON.stringify(this.storage_data));
        });
    }
    splitMovies(arr) {
        let res = [];
        while (arr.length > 0) {
            res.push(arr.splice(0, 6));
        }
        return res;
    }
    convertToHours(n) {
        let total_min = n;
        let hrs = total_min / 60;
        let f_hrs = Math.floor(hrs);
        let mins = (hrs - f_hrs) * 60;
        let r_mins = Math.round(mins);
        return f_hrs + "hrs " + r_mins + "mins";
    }
    // Called when cast card is clicked
    openModal(input_id) {
        console.log("Modal for cast id", input_id);
        const modalRef = this.modalService.open(_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_7__["ModalContentComponent"], {
            // size: "lg",
            windowClass: "my-modal-class",
            backdrop: "static"
        });
        // this.modalService.open(MyModalComponent, {
        //   windowClass: "myCustomModalClass"
        // });
        this.modalContainerService.getModalData(input_id).subscribe(res => {
            modalRef.componentInstance.cast_details = res;
            console.log(res);
        });
    }
    // when Add to Watchlist clicked
    addtoWL() {
        const wl_id = this.id.toString() + "_wl";
        if (this.isAdd) {
            this.btn_text = "Remove from Watchlist";
            console.log("add to WL");
            this.storage_data_wl = {
                id: this.id,
                title: this.details.title,
                poster_path: this.details.poster_path,
                isWL: true
            };
            this.localStorageService.set(wl_id, JSON.stringify(this.storage_data_wl));
            this.isAdd = false;
        }
        // if alrady on WL and want to remove it
        else {
            this.btn_text = "Add to Watchlist";
            console.log("rm from WL");
            this.localStorageService.remove(wl_id);
            this.isAdd = true;
        }
    }
};
MovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _services_modal_container_service__WEBPACK_IMPORTED_MODULE_6__["ModalContainerService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }
];
MovieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-movie",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")).default]
    })
], MovieComponent);



/***/ }),

/***/ "./src/app/components/mylist/mylist.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: white;\n}\n\nbody {\n  margin: auto;\n  padding: 1% 15% 1% 15%;\n}\n\n.row {\n  justify-content: flex-start;\n}\n\n.mycard {\n  flex-wrap: wrap;\n  flex-direction: row;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teWxpc3QvbXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlsaXN0L215bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDElIDE1JSAxJSAxNSU7XG59XG5cbi5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5teWNhcmQge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHotaW5kZXg6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/mylist/mylist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");



// import { splitMovies } from "../home/myHelper.js";
let MylistComponent = class MylistComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.wl_data = [];
        this.wl_data_arr = [];
        this.wl = [];
    }
    ngOnInit() {
        this.fetchWL();
    }
    splitMovies(arr) {
        let res = [];
        while (arr.length > 0) {
            res.push(arr.splice(0, 6));
        }
        return res;
    }
    fetchWL() {
        // console.log("start fetchWL()");
        this.wl_data = this.localStorageService.getAll();
        // console.log("WL data:", this.wl_data);
        for (var i = 0; i < this.wl_data.length; i++) {
            let curr = this.wl_data[i];
            // console.log("curr", curr);
            try {
                let curr_obj = JSON.parse(curr);
                if (curr_obj["id"] && curr_obj["isWL"]) {
                    this.wl_data_arr.push(curr_obj);
                }
            }
            catch (e) {
                console.log("Error", e);
            }
        }
        let res = [];
        while (this.wl_data_arr.length > 0) {
            res.push(this.wl_data_arr.splice(0, 6));
        }
        this.wl = res;
        console.log("WL", this.wl);
    }
};
MylistComponent.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
MylistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-mylist",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mylist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mylist/mylist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mylist.component.css */ "./src/app/components/mylist/mylist.component.css")).default]
    })
], MylistComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usc-navbar {\n  background-color: #040c22;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.nav-text {\n  color: white;\n}\n\na.nav-link-text:link {\n  color: #6c7085;\n}\n\na.nav-link-text:active,\na.nav-link-text:visited {\n  color: white;\n}\n\na.nav-link-text:hover {\n  color: #555d73;\n}\n\n.site-title {\n  padding-left: 3%;\n}\n\n.link-names {\n  padding-left: 1%;\n}\n\n.s-img {\n  max-width: 50px;\n}\n\n.my-search-bar {\n  background-color: transparent !important;\n  color: white !important;\n  border-style: none none solid none;\n  border-bottom: 1px solid white;\n  border-radius: 0 !important;\n  margin-right: 50px;\n}\n\n.dropdown-menu {\n  background-color: #080c33 !important;\n  color: white !important;\n  left: -10% !important;\n  right: 10% !important;\n  width: 500px;\n}\n\n.dropdown-item {\n  width: inherit;\n  background-color: #080c33;\n  color: white !important;\n  padding: 10px 50px 10px 10px;\n}\n\n.dropdown-item:hover {\n  background-color: #2789ff !important;\n}\n\n.search-link {\n  color: inherit; /* blue colors for links too */\n  text-decoration: inherit; /* no underline */\n}\n\n.search-link {\n  color: white; /* blue colors for links too */\n  text-decoration: none; /* no underline */\n}\n\n.search-link:hover {\n  color: white; /* blue colors for links too */\n  text-decoration: none; /* no underline */\n}\n\n.search-link:active {\n  color: white; /* blue colors for links too */\n  text-decoration: none; /* no underline */\n}\n\n/* mobile */\n\n.my-toggler {\n  padding-right: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWMsRUFBRSw4QkFBOEI7RUFDOUMsd0JBQXdCLEVBQUUsaUJBQWlCO0FBQzdDOztBQUVBO0VBQ0UsWUFBWSxFQUFFLDhCQUE4QjtFQUM1QyxxQkFBcUIsRUFBRSxpQkFBaUI7QUFDMUM7O0FBRUE7RUFDRSxZQUFZLEVBQUUsOEJBQThCO0VBQzVDLHFCQUFxQixFQUFFLGlCQUFpQjtBQUMxQzs7QUFFQTtFQUNFLFlBQVksRUFBRSw4QkFBOEI7RUFDNUMscUJBQXFCLEVBQUUsaUJBQWlCO0FBQzFDOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzYy1uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwYzIyO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5hdi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hLm5hdi1saW5rLXRleHQ6bGluayB7XG4gIGNvbG9yOiAjNmM3MDg1O1xufVxuXG5hLm5hdi1saW5rLXRleHQ6YWN0aXZlLFxuYS5uYXYtbGluay10ZXh0OnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmEubmF2LWxpbmstdGV4dDpob3ZlciB7XG4gIGNvbG9yOiAjNTU1ZDczO1xufVxuXG4uc2l0ZS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMyU7XG59XG5cbi5saW5rLW5hbWVzIHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cblxuLnMtaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG4ubXktc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZCBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBjMzMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IC0xMCUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBjMzM7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCAxMHB4O1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzg5ZmYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1saW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8qIGJsdWUgY29sb3JzIGZvciBsaW5rcyB0b28gKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiBubyB1bmRlcmxpbmUgKi9cbn1cblxuLnNlYXJjaC1saW5rIHtcbiAgY29sb3I6IHdoaXRlOyAvKiBibHVlIGNvbG9ycyBmb3IgbGlua3MgdG9vICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXG59XG5cbi5zZWFyY2gtbGluazpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTsgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIG5vIHVuZGVybGluZSAqL1xufVxuXG4uc2VhcmNoLWxpbms6YWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlOyAvKiBibHVlIGNvbG9ycyBmb3IgbGlua3MgdG9vICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXG59XG5cbi8qIG1vYmlsZSAqL1xuLm15LXRvZ2dsZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let NavBarComponent = class NavBarComponent {
    constructor(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.title = "USC Films";
        this.isMenuCollapsed = true;
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(searchText => this.searchService.getSearchData(searchText))
            // ,catchError(new ErrorInfo().parseObservableResponseError)
            );
        };
        this.formatter = (x) => x.title;
    }
    ngOnInit() {
        // this.setUpTypeAhead();
    }
    // Set up the observable
    setUpTypeAhead() {
        this.searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
            var searchTerm = this.searchData;
            observer.next(searchTerm);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((searchTerm) => this.searchService.getSearchData(searchTerm)));
    }
    resultFormatResults(value) {
        return value.img_path, value.title;
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav-bar",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/tv/modal-content/modal-content.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv/modal-content/modal-content.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body {\n  width: 100%;\n  padding: 5% 5% 2% 5%;\n  /* padding-bottom: 0; */\n  display: flex;\n  flex-direction: column;\n  /* input {\n    margin-bottom: 10px;\n  } */\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: black;\n}\n\n/* change modal screen sizes */\n\n@media only screen and (min-width: 1600px) {\n  .modal-img {\n    width: 300px;\n    padding-bottom: 20px;\n  }\n\n  .img-box {\n    text-align: left;\n    padding-right: 0px;\n    margin-right: 0;\n  }\n\n  .details-col {\n    margin-left: 0;\n    padding-left: 0;\n  }\n}\n\n@media only screen and (max-width: 1599px) {\n  .modal-img {\n    width: 200px;\n    padding-bottom: 20px;\n  }\n\n  .img-box {\n    text-align: left;\n    padding-right: 0px;\n    margin-right: 0px;\n  }\n\n  .details-col {\n    margin-left: -600px;\n  }\n}\n\n/* MOBILE */\n\n@media only screen and (max-width: 600px) {\n  .modal-img {\n    width: 98%;\n    padding-bottom: 5px;\n  }\n\n  .img-box {\n    padding-left: 3%;\n    justify-content: center;\n  }\n\n  .details-m {\n    padding-left: 2%;\n  }\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  font-size: larger;\n  /* color: inherit; */\n}\n\n.icon {\n  display: inline;\n  padding-right: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di9tb2RhbC1jb250ZW50L21vZGFsLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEI7O0tBRUc7QUFDTDs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkOztBQUNBLDhCQUE4Qjs7QUFDOUI7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90di9tb2RhbC1jb250ZW50L21vZGFsLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlIDUlIDIlIDUlO1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH0gKi9cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnAge1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBjaGFuZ2UgbW9kYWwgc2NyZWVuIHNpemVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAubW9kYWwtaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmRldGFpbHMtY29sIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLm1vZGFsLWltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmltZy1ib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgLmRldGFpbHMtY29sIHtcbiAgICBtYXJnaW4tbGVmdDogLTYwMHB4O1xuICB9XG59XG5cbi8qIE1PQklMRSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtaW1nIHtcbiAgICB3aWR0aDogOTglO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuICAuaW1nLWJveCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLW0ge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/tv/modal-content/modal-content.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/tv/modal-content/modal-content.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalContent2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent2Component", function() { return ModalContent2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");





let ModalContent2Component = class ModalContent2Component {
    constructor(activeModal, breakpointObserver) {
        this.activeModal = activeModal;
        this.breakpointObserver = breakpointObserver;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"];
        this.faImdb = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faImdb"];
        this.isSm = false;
        this.isReg = false;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge
        ])
            .subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall]) {
                this.isSm = true;
                this.isReg = false;
                console.log("Matches XSmall viewport");
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small]) {
                console.log("Matches Small viewport");
                this.isSm = true;
                this.isReg = false;
                console.log(this.isSm);
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium]) {
                console.log("Matches Medium viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large]) {
                console.log("Matches Large viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]) {
                console.log("Matches XLarge viewport");
                this.isSm = false;
                this.isReg = true;
            }
        });
    }
};
ModalContent2Component.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalContent2Component.prototype, "cast_details", void 0);
ModalContent2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-modal-content",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/modal-content/modal-content.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-content.component.css */ "./src/app/components/tv/modal-content/modal-content.component.css")).default]
    })
], ModalContent2Component);



/***/ }),

/***/ "./src/app/components/tv/tv.component.css":
/*!************************************************!*\
  !*** ./src/app/components/tv/tv.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* LARGE */\n@media only screen and (min-width: 1600px) {\n  .descrip {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  .col-details {\n    padding: 0 0 0 15%;\n    margin: 0;\n    width: 200%;\n  }\n\n  .container {\n    padding: 2% 2% 2% 2%;\n    /* margin: 0 10% 0 30%; */\n  }\n  .avatar {\n    width: 60px;\n    height: 60px;\n  }\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n  }\n  .rating {\n    display: inline-block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    position: absolute;\n  }\n  .col-video {\n    margin: 0;\n    /* text-align: left; */\n  }\n\n  .card-img-caption {\n    height: 250px;\n    overflow: hidden;\n  }\n\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    padding-left: 2.5%;\n  }\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .row-less .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.4s;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 40px;\n    position: relative;\n    width: 180px;\n  }\n\n  .card-img-caption:hover .my-carousel-caption2 {\n    cursor: pointer;\n    opacity: 1;\n    z-index: 1;\n  }\n}\n/* MEDIUM */\n@media only screen and (max-width: 1599px) {\n  .col-video {\n    margin-left: -20px !important;\n    margin-right: 0 !important;\n    /* text-align: left; */\n  }\n  .descrip {\n    padding: 0;\n    margin: auto;\n    /* margin-left: 20px; */\n  }\n\n  .col-details {\n    padding: 0 0 0 5%;\n    margin-left: 0 !important;\n    width: 200%;\n  }\n\n  .container {\n    padding: 1%;\n    margin: 0 2% 0 10%;\n  }\n  .avatar {\n    width: 60px;\n    height: 60px;\n  }\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n  }\n  .rating {\n    display: inline-block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    position: absolute;\n  }\n  .col-video {\n    /* margin-left: -120px; */\n    margin: auto;\n    text-align: left;\n  }\n\n  .card-img-caption {\n    height: 250px;\n    overflow: hidden;\n  }\n\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    padding-left: 2.5%;\n  }\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .row-less .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 250px !important;\n    width: 180px !important;\n  }\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.4s;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 40px;\n    position: relative;\n    width: 180px;\n  }\n\n  .card-img-caption:hover .my-carousel-caption2 {\n    cursor: pointer;\n    opacity: 1;\n    z-index: 1;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .col-video {\n    margin: 0;\n    /* text-align: left; */\n  }\n  .mycard {\n    flex-wrap: wrap;\n    flex-direction: row;\n    z-index: 0;\n  }\n  .mycarousel {\n    width: inherit;\n    margin: auto;\n    /* height: 500px; */\n    padding-left: 1%;\n  }\n\n  .carousel-indicators {\n    visibility: hidden;\n  }\n\n  .carousel-control-prev {\n    z-index: 20;\n    transform: translate(-10px, 0px);\n  }\n\n  .carousel-control-next {\n    z-index: 20;\n    transform: translate(10px, 0px);\n  }\n\n  .slide-item {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 150% !important;\n    width: 100% !important;\n    transition: all 0.3s ease;\n    z-index: 0;\n  }\n\n  .card-img-caption .my-carousel-caption2 {\n    opacity: 1;\n    z-index: 1;\n    background-image: linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.856) 80%,\n      black 100%\n    );\n    bottom: 50px;\n    padding-bottom: 30px;\n    position: relative;\n    width: 99%;\n  }\n  .container {\n    padding: 2%;\n    margin: 0 0 0 3%;\n  }\n\n  .avatar {\n    width: 100px !important;\n    height: 100px !important;\n    max-width: 100px !important;\n    max-height: 100px !important;\n    padding-left: 10%;\n    /* margin-bottom: 2%; */\n  }\n\n  .review-card {\n    margin-top: 10px;\n    border-radius: 10px;\n    width: 94%;\n  }\n  .rating {\n    display: block;\n    background-color: #000000;\n    color: white;\n    padding: 5px 10px 5px 10px;\n    font-size: smaller;\n    border-radius: 15px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n    position: absolute;\n  }\n}\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  color: white;\n}\n/* Bootstrap grid */\n.my-row {\n  margin-bottom: 2%;\n  margin-top: 2%;\n}\n.desc-text {\n  color: #9596b1;\n}\n.details-title {\n  font-size: medium;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 0;\n}\n.details-text {\n  word-wrap: break-word;\n}\n.share-div {\n  margin-left: -1px;\n  padding-left: 0;\n}\n@media only screen and (max-width: 600px) {\n  .share-div {\n    margin-left: auto;\n  }\n}\n.share-btn {\n  display: inline-block;\n  padding-right: 8px;\n  padding-left: 0;\n  padding-top: 0;\n  margin-left: 0;\n  margin-top: 0%;\n  text-decoration: none;\n}\n/* CAST AND CREW section */\n.cast-container {\n  margin-top: 3%;\n}\n.my-flex {\n  margin-left: 0;\n}\n.my-card {\n  border-radius: 20px;\n  height: 400px;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n}\n.my-card-text {\n  color: black;\n  text-align: center;\n}\n.my-card-img {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  /* max-height: 200px; */\n}\n/* REVIEWS section */\n/* .review-card {\n  margin-top: 10px;\n  border-radius: 10px;\n} */\n.review-font {\n  color: black !important;\n  display: inline-block;\n}\n.review-font-gray {\n  color: gray;\n}\n.review-link {\n  text-decoration: underline;\n}\n/* Open modal */\n.open-modal {\n  cursor: pointer;\n  outline: none;\n}\n@media only screen and (min-width: 1600px) {\n  .my-modal-class .modal-dialog {\n    max-width: 60%;\n    /* max-height: 500px; */\n  }\n}\n@media only screen and (max-width: 1599px) {\n  .my-modal-class .modal-dialog {\n    max-width: 70%;\n    /* max-height: 500px; */\n  }\n}\n@media only screen and (max-width: 600px) {\n  .my-modal-class .modal-dialog {\n    max-width: 400px;\n    /* width: 410px; */\n    /* text-align: center; */\n  }\n}\n/* HOME COPIED */\nngb-carousel {\n  max-width: 80%;\n  margin: 50px auto;\n  outline: none;\n}\nngb-carousel img {\n  width: 100%;\n  outline: none;\n}\n.carousel-inner {\n  padding: 15px;\n}\n/* Hover effects for main carousel */\n.my-carousel-caption {\n  opacity: 0;\n  /* z-index: 2; */\n  transition: all 0.4s;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.795), black);\n  height: 35%;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n.caption-font {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n  padding-top: 5%;\n}\n.curr_playing_img:hover .my-carousel-caption {\n  z-index: 2;\n  opacity: 1;\n  cursor: pointer;\n}\n.carousel-indicators {\n  z-index: 20;\n  bottom: -50px !important;\n}\n.carousel-control-prev {\n  z-index: 20;\n  transform: translate(-80px, 0px);\n}\n.carousel-control-next {\n  z-index: 20;\n  transform: translate(80px, 0px);\n}\n.section-heading {\n  padding: 0 0 0 12%;\n}\n.movie-container {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n.row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.row-less {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start !important;\n}\n.row-m {\n  width: 100%;\n  /* height: 500px; */\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n}\n/* Image for each mini carousel item: */\n.slide-item:hover {\n  transform: scale(1.08);\n  cursor: pointer;\n}\n.caption-font2 {\n  color: #fff;\n  font-weight: 400;\n  font-size: medium;\n  text-align: left;\n  padding-left: 6%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90di90di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVjtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7SUFDVCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixvQkFBb0I7SUFDcEI7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7QUFFQSxXQUFXO0FBQ1g7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixvQkFBb0I7SUFDcEI7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWOzs7O0tBSUM7SUFDRCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUE7Ozs7OztFQU1FLFlBQVk7QUFDZDtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBRUEsb0JBQW9CO0FBQ3BCOzs7R0FHRztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7QUFDRjtBQUVBLGdCQUFnQjtBQUVoQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiwyRUFBMkU7RUFDM0UsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztBQUNUO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtBQUNqQztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQSx1Q0FBdUM7QUFFdkM7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHYvdHYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExBUkdFICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAuZGVzY3JpcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gIC5jb2wtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMCAwIDAgMTUlO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMjAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlIDIlIDIlIDIlO1xuICAgIC8qIG1hcmdpbjogMCAxMCUgMCAzMCU7ICovXG4gIH1cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIC5yZXZpZXctY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5yYXRpbmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmNvbC12aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbiB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLm15Y2FyZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAubXljYXJvdXNlbCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMi41JTtcbiAgfVxuICAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIC5yb3ctbGVzcyAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkLWltZy1jYXB0aW9uIC5teS1jYXJvdXNlbC1jYXB0aW9uMiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg1NikgODAlLFxuICAgICAgYmxhY2sgMTAwJVxuICAgICk7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbjpob3ZlciAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLyogTUVESVVNICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAuY29sLXZpZGVvIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xuICB9XG4gIC5kZXNjcmlwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKiBtYXJnaW4tbGVmdDogMjBweDsgKi9cbiAgfVxuXG4gIC5jb2wtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMCAwIDAgNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIG1hcmdpbjogMCAyJSAwIDEwJTtcbiAgfVxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLnJldmlldy1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnJhdGluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuY29sLXZpZGVvIHtcbiAgICAvKiBtYXJnaW4tbGVmdDogLTEyMHB4OyAqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNhcmQtaW1nLWNhcHRpb24ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5teWNhcmQge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLm15Y2Fyb3VzZWwge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XG4gIH1cbiAgLnNsaWRlLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAucm93LWxlc3MgLnNsaWRlLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZC1pbWctY2FwdGlvbiAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTYpIDgwJSxcbiAgICAgIGJsYWNrIDEwMCVcbiAgICApO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLmNhcmQtaW1nLWNhcHRpb246aG92ZXIgLm15LWNhcm91c2VsLWNhcHRpb24yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC12aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIH1cbiAgLm15Y2FyZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAubXljYXJvdXNlbCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgMHB4KTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7XG4gIH1cblxuICAuc2xpZGUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuY2FyZC1pbWctY2FwdGlvbiAubXktY2Fyb3VzZWwtY2FwdGlvbjIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTYpIDgwJSxcbiAgICAgIGJsYWNrIDEwMCVcbiAgICApO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk5JTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW46IDAgMCAwIDMlO1xuICB9XG5cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDIlOyAqL1xuICB9XG5cbiAgLnJldmlldy1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgfVxuICAucmF0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm9vdHN0cmFwIGdyaWQgKi9cbi5teS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5kZXNjLXRleHQge1xuICBjb2xvcjogIzk1OTZiMTtcbn1cblxuLmRldGFpbHMtdGl0bGUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmRldGFpbHMtdGV4dCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNoYXJlLWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNoYXJlLWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuLnNoYXJlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQ0FTVCBBTkQgQ1JFVyBzZWN0aW9uICovXG4uY2FzdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLm15LWZsZXgge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm15LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5teS1jYXJkLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15LWNhcmQtaW1nIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC8qIG1heC1oZWlnaHQ6IDIwMHB4OyAqL1xufVxuXG4vKiBSRVZJRVdTIHNlY3Rpb24gKi9cbi8qIC5yZXZpZXctY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG5cbi5yZXZpZXctZm9udCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXZpZXctZm9udC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5yZXZpZXctbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBPcGVuIG1vZGFsICovXG4ub3Blbi1tb2RhbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLm15LW1vZGFsLWNsYXNzIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIC8qIG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAubXktbW9kYWwtY2xhc3MgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgLyogbWF4LWhlaWdodDogNTAwcHg7ICovXG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm15LW1vZGFsLWNsYXNzIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgLyogd2lkdGg6IDQxMHB4OyAqL1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgfVxufVxuXG4vKiBIT01FIENPUElFRCAqL1xuXG5uZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLyogSG92ZXIgZWZmZWN0cyBmb3IgbWFpbiBjYXJvdXNlbCAqL1xuLm15LWNhcm91c2VsLWNhcHRpb24ge1xuICBvcGFjaXR5OiAwO1xuICAvKiB6LWluZGV4OiAyOyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNzk1KSwgYmxhY2spO1xuICBoZWlnaHQ6IDM1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNhcHRpb24tZm9udCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uY3Vycl9wbGF5aW5nX2ltZzpob3ZlciAubXktY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbiAgYm90dG9tOiAtNTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MHB4LCAwcHgpO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDBweCk7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwIDAgMCAxMiU7XG59XG5cbi5tb3ZpZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5yb3ctbGVzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLnJvdy1tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEltYWdlIGZvciBlYWNoIG1pbmkgY2Fyb3VzZWwgaXRlbTogKi9cblxuLnNsaWRlLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXB0aW9uLWZvbnQyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/tv/tv.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/tv/tv.component.ts ***!
  \***********************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _services_modal_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/modal-container.service */ "./src/app/services/modal-container.service.ts");
/* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-content/modal-content.component */ "./src/app/components/tv/modal-content/modal-content.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/fesm2015/layout.js");






// import { splitMovies } from "../home/myHelper.js";

// Modal materials




let TvComponent = class TvComponent {
    constructor(route, movieService, modalService, modalContainerService, localStorageService, breakpointObserver) {
        this.route = route;
        this.movieService = movieService;
        this.modalService = modalService;
        this.modalContainerService = modalContainerService;
        this.localStorageService = localStorageService;
        this.breakpointObserver = breakpointObserver;
        this.genres_list = [];
        this.langs = [];
        this.btn_text = "Add to Watchlist";
        this.isAdd = true;
        this.isSm = false;
        this.isReg = false;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"];
    }
    // gets called AFTER constructor
    ngOnInit() {
        this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge
        ])
            .subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall]) {
                this.isSm = true;
                this.isReg = false;
                console.log("Matches XSmall viewport");
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small]) {
                console.log("Matches Small viewport");
                this.isSm = true;
                this.isReg = false;
                console.log(this.isSm);
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium]) {
                console.log("Matches Medium viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large]) {
                console.log("Matches Large viewport");
                this.isSm = false;
                this.isReg = true;
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge]) {
                console.log("Matches XLarge viewport");
                this.isSm = false;
                this.isReg = true;
            }
        });
        this.id = this.route.snapshot.paramMap.get("id");
        this.movieService.getDetailsData("tv", this.id).subscribe(res => {
            this.movie_data = res;
            console.log("Got details data from backend");
            // Youtube trailer
            if (!this.movie_data.video.results[0].key) {
                this.video = "https://www.youtube.com/watch?v=tzkWB85ULJY";
                this.video_id = "tzkWB85ULJY";
            }
            else {
                this.video =
                    "https://www.youtube.com/watch?v=" +
                        this.movie_data.video.results[0].key;
                this.video_id = this.movie_data.video.results[0].key;
            }
            // console.log("Video link:", this.video);
            // Details
            this.details = this.movie_data.details;
            // this.details["year"] = this.details["release_date"].split("-")[0];
            // this.details["runtime_hrs"] = convertToHours(this.details["runtime"]);
            this.details["runtime_hrs"] = this.details["episode_run_time"][0];
            for (var i = 0; i < this.details["genres"].length; i++) {
                this.genres_list.push(this.details["genres"][i]["name"]);
            }
            this.details["genres_list"] = this.genres_list.join(", ");
            for (var i = 0; i < this.details["spoken_languages"].length; i++) {
                this.langs.push(this.details["spoken_languages"][i]["name"]);
            }
            this.details["langs"] = this.langs.join(", ");
            console.log(this.details);
            this.cast = this.movie_data.cast;
            this.reviews = this.movie_data.reviews;
            this.recommended = this.movie_data.recommended.results;
            this.recommended_movies2 = this.splitMovies(this.recommended);
            this.recommended_movies3 = this.recommended_movies2.flat();
            this.similar = this.movie_data.similar.results;
            this.similar_movies2 = this.splitMovies(this.similar);
            this.similar_movies3 = this.similar_movies2.flat();
            // Add to local storage
            this.storage_data = {
                id: this.id,
                title: this.details.title,
                poster_path: this.details.poster_path,
                isWL: false
            };
            console.log("add to Continue Watching");
            this.localStorageService.set(this.id, JSON.stringify(this.storage_data));
        });
    }
    splitMovies(arr) {
        let res = [];
        while (arr.length > 0) {
            res.push(arr.splice(0, 6));
        }
        return res;
    }
    // Called when cast card is clicked
    openModal(input_id) {
        console.log("Modal for cast id", input_id);
        const modalRef = this.modalService.open(_modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_7__["ModalContent2Component"], {
            // size: "lg",
            windowClass: "my-modal-class",
            backdrop: "static"
        });
        this.modalContainerService.getModalData(input_id).subscribe(res => {
            modalRef.componentInstance.cast_details = res;
            console.log(res);
        });
    }
    // when Add to Watchlist clicked
    addtoWL() {
        const wl_id = this.id.toString() + "_wl";
        if (this.isAdd) {
            this.btn_text = "Remove from Watchlist";
            console.log("add to WL");
            this.storage_data_wl = {
                id: this.id,
                title: this.details.title,
                poster_path: this.details.poster_path,
                isWL: true
            };
            this.localStorageService.set(wl_id, JSON.stringify(this.storage_data_wl));
            this.isAdd = false;
        }
        // if alrady on WL and want to remove it
        else {
            this.btn_text = "Add to Watchlist";
            console.log("rm from WL");
            this.localStorageService.remove(wl_id);
            this.isAdd = true;
        }
    }
};
TvComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _services_modal_container_service__WEBPACK_IMPORTED_MODULE_6__["ModalContainerService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }
];
TvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tv",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv/tv.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tv.component.css */ "./src/app/components/tv/tv.component.css")).default]
    })
], TvComponent);



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeService = class HomeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHomeData() {
        let URL = "https://csci-571-combined.wl.r.appspot.com/apis/";
        // let URL = "http://localhost:8080/apis/"
        return this.httpClient.get(URL);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HomeService);



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() {
        this.localStorage = window.localStorage;
    }
    getAll() {
        if (this.isLocalStorageSupported) {
            let vals = [];
            let keys = Object.keys(localStorage);
            for (var i = 0; i < keys.length; i++) {
                let curr = localStorage.getItem(keys[i]).replace(/\\/g, "");
                let curr2 = curr.substring(1, curr.length - 1);
                vals.push(curr2);
            }
            return vals;
        }
        return null;
    }
    set(key, value) {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    }
    get isLocalStorageSupported() {
        return !!this.localStorage;
    }
};
LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/services/modal-container.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/modal-container.service.ts ***!
  \*****************************************************/
/*! exports provided: ModalContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerService", function() { return ModalContainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ModalContainerService = class ModalContainerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getModalData(cast_id) {
        let URL = `https://csci-571-combined.wl.r.appspot.com/apis/cast/${cast_id}`;
        // let URL = `http://localhost:8080/apis/cast/${cast_id}`;
        return this.httpClient.get(URL);
    }
};
ModalContainerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModalContainerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ModalContainerService);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MovieService = class MovieService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getDetailsData(media_type, id) {
        let URL = `https://csci-571-combined.wl.r.appspot.com/apis/watch/${media_type}/${id}`;
        // let URL = `http://localhost:8080/apis/${media_type}/${id}`;
        return this.httpClient.get(URL);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MovieService);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchService = class SearchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.results = [];
    }
    getSearchData(query) {
        let URL = `https://csci-571-combined.wl.r.appspot.com/apis/search/${query}`;
        // let URL = `http://localhost:8080/apis/search/${query}`;
        console.log("getSearchData() in searchService executed. this is query:", query);
        console.log(URL);
        // returns an Observable
        return this.httpClient.get(URL);
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SearchService);



/***/ }),

/***/ "./src/app/services/tv.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/tv.service.ts ***!
  \****************************************/
/*! exports provided: TvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvService", function() { return TvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TvService = class TvService {
    constructor() { }
};
TvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TvService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ericaxia/Documents/Github/csci-571-movie-app/Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map