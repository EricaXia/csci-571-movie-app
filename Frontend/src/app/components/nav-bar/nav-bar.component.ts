import { Component, OnInit } from "@angular/core";

import { SearchService } from "./../../services/search.service";
import { ActivatedRoute } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";
import { Observable, of, Subscriber, OperatorFunction } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  catchError,
  mergeMap
} from "rxjs/operators";

import { TypeaheadModule } from "ngx-bootstrap/typeahead";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  public title: string = "USC Films";
  public isMenuCollapsed = true;
  public searchTerm!: string;
  // public searchResults: Observable<string[]>;
  public searchResults: any;
  public searchData: any;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // this.setUpTypeAhead();
  }

  // Set up the observable
  setUpTypeAhead() {
    this.searchResults = new Observable((observer: Subscriber<string>) => {
      var searchTerm = this.searchData;
      observer.next(searchTerm);
    }).pipe(
      mergeMap((searchTerm: string) =>
        this.searchService.getSearchData(searchTerm)
      )
    );
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(searchText => this.searchService.getSearchData(searchText))
      // ,catchError(new ErrorInfo().parseObservableResponseError)
    );
  };

  resultFormatResults(value: any) {
    return value.img_path, value.title;
  }

  formatter = (x: { title: string }) => x.title;
}
