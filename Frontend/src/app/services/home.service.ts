import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getHomeData() {
    let URL = "https://csci-571-combined.wl.r.appspot.com/apis/";
    // let URL = "http://localhost:8080/apis/"
    return this.httpClient.get(URL);
  }
}
