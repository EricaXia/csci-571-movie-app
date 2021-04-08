import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ModalContainerService {
  public cast_id: any;

  constructor(private httpClient: HttpClient) {}

  getModalData(cast_id: any) {
    let URL = `https://csci-571-combined.wl.r.appspot.com/apis/cast/${cast_id}`;
    // let URL = `http://localhost:8080/apis/cast/${cast_id}`;

    return this.httpClient.get(URL);
  }
}
