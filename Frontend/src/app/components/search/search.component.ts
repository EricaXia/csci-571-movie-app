import { SearchService } from "./../../services/search.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public query: any;
  public results: any;
  public first_20: any;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get("query");
    this.searchService.getSearchData(this.query).subscribe(res => {
      this.results = res;
      this.first_20 = this.results.results;
      for (var i = 0; i < this.first_20.length; i++) {
        this.first_20[i]["img_path"] =
          "https://image.tmdb.org/t/p/w500" + this.first_20[i]["poster_path"];
      }
      console.log(this.first_20);
    });
  }
}
