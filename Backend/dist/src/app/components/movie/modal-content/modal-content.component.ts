import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  faTwitter,
  faFacebook,
  faImdb,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-modal-content",
  templateUrl: "./modal-content.component.html",
  styleUrls: ["./modal-content.component.css"]
})
export class ModalContentComponent implements OnInit {
// export class ModalContentComponent implements AfterViewInit {
  @Input() public cast_details: any;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faImdb = faImdb;
  isSm = false;
  isReg = false;

  constructor(
    public activeModal: NgbActiveModal,
    public breakpointObserver: BreakpointObserver
  ) {}

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
  }

  // ngAfterViewInit() {
  //   console.log("init Model Content. Cast details are:");
  //   console.log(this.cast_details);
  // }
}
