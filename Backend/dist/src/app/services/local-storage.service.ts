import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getAll(): any {
    if (this.isLocalStorageSupported) {
      let vals = [];
      let keys = Object.keys(localStorage);
      for (var i = 0; i < keys.length; i++) {
        let curr = localStorage.getItem(keys[i])!.replace(/\\/g, "");
        let curr2 = curr.substring(1, curr.length - 1);
        vals.push(curr2);
      }
      return vals;
    }
    return null;
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));

      return true;
    }

    return false;
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);

      return true;
    }

    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
