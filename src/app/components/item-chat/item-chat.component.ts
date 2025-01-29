import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
})
export class ItemChatComponent  implements OnInit {

  @Input() username : string = '';
  @Input() date : string = '';
  @Input() message : string = '';
  @Input() avatarUrl : string = '';

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
