import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ModalContainerService {
  public cast_id: any;

  constructor(private httpClient: HttpClient) {}

  getModalData(cast_id: any) {
    let URL = `https://csci-571-movie-app-backend.wl.r.appspot.com/cast/${cast_id}`;
    // let URL = `http://localhost:3000/cast/${cast_id}`;

    return this.httpClient.get(URL);
  }
}
