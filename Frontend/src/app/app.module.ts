import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";
import { TvComponent } from "./components/tv/tv.component";
import { MylistComponent } from "./components/mylist/mylist.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HomeService } from "./services/home.service";
import { MovieService } from "./services/movie.service";
import { SearchService } from "./services/search.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ModalContentComponent } from "./components/movie/modal-content/modal-content.component";
import { ModalContent2Component } from "./components/tv/modal-content/modal-content.component";
import { ModalContainerService } from "./services/modal-container.service";
import { FormsModule } from "@angular/forms";
import { LocalStorageService } from "./services/local-storage.service";
import { LayoutModule } from "@angular/cdk/layout";
import { TvService } from './services/tv.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    TvComponent,
    MylistComponent,
    NavBarComponent,
    ModalContentComponent,
    ModalContent2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    FormsModule,
    LayoutModule
  ],
  providers: [
    HomeService,
    MovieService,
    SearchService,
    ModalContainerService,
    LocalStorageService,
    TvService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent, ModalContent2Component]
})
export class AppModule { }
