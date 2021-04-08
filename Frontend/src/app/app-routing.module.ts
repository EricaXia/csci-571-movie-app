import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { fromEventPattern } from "rxjs";
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";
import { TvComponent } from "./components/tv/tv.component";
import { MylistComponent } from "./components/mylist/mylist.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", component: HomeComponent },
  
  {
    path: "watch",
    children: [
      { path: "movie/:id", component: MovieComponent },
      { path: "tv/:id", component: TvComponent }
    ]
  },
  {
    path: "mylist",
    component: MylistComponent
  },
  {
    path: "search/:query",
    component: NavBarComponent
  },
  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
