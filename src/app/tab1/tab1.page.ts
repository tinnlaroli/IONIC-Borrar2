import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-chat',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [
    { trackId: 1, username: "ma cherie", date: "13h45", message: "muack", avatarUrl: "assets/macherie.png" },
    { trackId: 2, username: "el coreano", date: "14h45", message: "tu novia te engaña conmigo", avatarUrl: "assets/skz.webp" },
    { trackId: 3, username: "--", date: "15h45", message: "---", avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg" },
  ];

  trackItems(index: number, item: any) {
    return item.trackId;
  }
  
}
