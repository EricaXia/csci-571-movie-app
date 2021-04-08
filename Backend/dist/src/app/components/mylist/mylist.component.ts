import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "./../../services/local-storage.service";
// import { splitMovies } from "../home/myHelper.js";

@Component({
  selector: "app-mylist",
  templateUrl: "./mylist.component.html",
  styleUrls: ["./mylist.component.css"]
})
export class MylistComponent implements OnInit {
  public wl_data: any = [];
  public wl_data_arr: any = [];
  public wl: any = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.fetchWL();
  }
  splitMovies(arr: any[]) {
    let res = [];
    while (arr.length > 0) {
      res.push(arr.splice(0, 6));
    }
    return res;
  }

  fetchWL() {
    // console.log("start fetchWL()");

    this.wl_data = this.localStorageService.getAll();

    // console.log("WL data:", this.wl_data);

    for (var i = 0; i < this.wl_data.length; i++) {
      let curr = this.wl_data[i];
      // console.log("curr", curr);

      try {
        let curr_obj = JSON.parse(curr);
        if (curr_obj["id"] && curr_obj["isWL"]) {
          this.wl_data_arr.push(curr_obj);
        }
      } catch (e) {
        console.log("Error", e);
      }
    }

    let res = [];
    while (this.wl_data_arr.length > 0) {
      res.push(this.wl_data_arr.splice(0, 6));
    }

    this.wl = res;
    console.log("WL", this.wl);
  }
}
