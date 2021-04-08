import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  public results: any = [];

  getSearchData(query: String) {
    let URL = `https://csci-571-movie-app-backend.wl.r.appspot.com/search/${query}`;

    // let URL = `http://localhost:3000/search/${query}`;

    console.log(
      "getSearchData() in searchService executed. this is query:",
      query
    );
    console.log(URL);

    // returns an Observable
    return this.httpClient.get(URL);
  }
}