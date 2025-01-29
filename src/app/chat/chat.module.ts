import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { ComponentsModule } from '../../../../IONIC-Borrar1/src/app/components/components.module';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    //aqui es donde se importan los componentes de components
    ComponentsModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {

}
