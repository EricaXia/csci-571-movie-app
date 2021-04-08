import { Component, OnInit } from "@angular/core";

@Component({
  template: '<youtube-player videoId="tzkWB85ULJY"></youtube-player>',
  selector: "app-video"
})
class YoutubePlayerComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
