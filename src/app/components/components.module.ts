import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemChatComponent } from './item-chat/item-chat.component';


@NgModule({
  declarations: [
    ItemChatComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    ItemChatComponent
  ]
})
export class ComponentsModule { }
