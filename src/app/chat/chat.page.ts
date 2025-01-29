import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [
    { trackId: 1, username: "ma cherie", date: "13h45", message: "muack", avatarUrl: "assets/macherie.png" },
    { trackId: 2, username: "ma cherie", date: "13h45", message: "muack", avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg" },
    { trackId: 3, username: "ma cherie", date: "13h45", message: "muack", avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg" },
  ];

  trackItems(index: number, item: any) {
    return item.trackId;
  }
  
}
