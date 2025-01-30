import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MenuPopoverComponent } from './menu-popover/menu-popover.component';


@NgModule({
  declarations: [
    ItemChatComponent,
    HeaderToolbarComponent,
    MenuPopoverComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports:[
    ItemChatComponent,
    HeaderToolbarComponent,
    MenuPopoverComponent
  ]
})
export class ComponentsModule { }
