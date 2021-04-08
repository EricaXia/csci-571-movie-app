import { HomeService } from "./../../services/home.service";
import { LocalStorageService } from "./../../services/local-storage.service";

import { Component, Input, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
// import { splitMovies } from "./myHelper.js";

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public continue_watching_data: any = [];
  public continue_watching_arr: any = [];
  public continue_watching: any = [];
  public continue_watching2: any = [];
  public home_data: any = {};
  public curr_movies: any = [];
  public popular_movies: any = [];
  public top_rated_movies: any = [];
  public trending_movies: any = [];
  public popular_tv: any = [];
  public top_rated_tv: any = [];
  public trending_tv: any = [];
  public popular_movies2: any = [];
  public popular_movies3: any = [];
  public top_rated_movies2: any = [];
  public trending_movies2: any = [];
  public popular_tv2: any = [];
  public top_rated_tv2: any = [];
  public trending_tv2: any = [];
  public top_rated_movies3: any = [];
  public trending_movies3: any = [];
  public popular_tv3: any = [];
  public top_rated_tv3: any = [];
  public trending_tv3: any = [];

  isSm = false;
  isReg = false;

  constructor(
    private homeService: HomeService,
    private localStorageService: LocalStorageService,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.isSm = true;
          this.isReg = false;
          console.log("Matches XSmall viewport");
        }
        if (state.breakpoints[Breakpoints.Small]) {
          console.log("Matches Small viewport");
          this.isSm = true;
          this.isReg = false;
          console.log(this.isSm);
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          console.log("Matches Medium viewport");
          this.isSm = false;
          this.isReg = true;
        }
        if (state.breakpoints[Breakpoints.Large]) {
          console.log("Matches Large viewport");
          this.isSm = false;
          this.isReg = true;
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          console.log("Matches XLarge viewport");
          this.isSm = false;
          this.isReg = true;
        }
      });

    this.fetchHomeData();
    this.fetchCW();
  }

  splitMovies(arr: any[]) {
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
      } catch (e) {
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
}
