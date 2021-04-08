import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  public id: any;

  constructor(private httpClient: HttpClient) {}

  getDetailsData(media_type: string, id: any) {
    // let URL = `https://csci-571-movie-app-backend.wl.r.appspot.com/watch/${media_type}/${id}`;
    let URL = `http://localhost:8080/apis/${media_type}/${id}`;
    return this.httpClient.get(URL);
  }
}
