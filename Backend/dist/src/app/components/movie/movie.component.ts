import { MovieService } from "./../../services/movie.service";
import { LocalStorageService } from "./../../services/local-storage.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";
// import { splitMovies } from "../home/myHelper.js";
// import { convertToHours } from "./detailsHelper.js";
import {
  faTwitter,
  faFacebook,
  faImdb,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
// Modal materials
import { ModalContainerService } from "./../../services/modal-container.service";
import { ModalContentComponent } from "./modal-content/modal-content.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  public id: any;
  public movie_data: any;
  public details: any;
  public video: any;
  public video_id: any;
  public cast: any;
  public reviews: any;
  public recommended: any;
  public similar: any;
  public recommended_movies2: any;
  public similar_movies2: any;
  public recommended_movies3: any;
  public similar_movies3: any;
  public genres_list: any = [];
  public langs: any = [];
  public input_id: any;
  public storage_data: any;
  public storage_data_wl: any;
  public btn_text: string = "Add to Watchlist";

  isAdd = true;

  isSm = false;
  isReg = false;

  faTwitter = faTwitter;
  faFacebook = faFacebook;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private modalService: NgbModal,
    private modalContainerService: ModalContainerService,
    private localStorageService: LocalStorageService,
    public breakpointObserver: BreakpointObserver
  ) {}

  // gets called AFTER constructor
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

    this.id = this.route.snapshot.paramMap.get("id");

    this.movieService.getDetailsData("movie", this.id).subscribe(res => {
      this.movie_data = res;
      // console.log("Got details data from backend");

      // Youtube trailer
      if (!this.movie_data.video.results[0].key) {
        this.video = "https://www.youtube.com/watch?v=tzkWB85ULJY";
        this.video_id = "tzkWB85ULJY";
      } else {
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

  splitMovies(arr: any[]) {
    let res = [];
    while (arr.length > 0) {
      res.push(arr.splice(0, 6));
    }
    return res;
  }

  convertToHours(n: any) {
    let total_min = n;
    let hrs = total_min / 60;
    let f_hrs = Math.floor(hrs);
    let mins = (hrs - f_hrs) * 60;
    let r_mins = Math.round(mins);
    return f_hrs + "hrs " + r_mins + "mins";
  }

  // Called when cast card is clicked
  openModal(input_id: any) {
    console.log("Modal for cast id", input_id);
    const modalRef = this.modalService.open(ModalContentComponent, {
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
}
