import { Component, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  standalone : false
})
export class HeaderToolbarComponent  implements OnInit {
  isMenuOpen = false;
  menuEvent: any;

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async openMenu(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MenuPopoverComponent, // Usa el menú creado
      event: event, // Posiciona el popover en el botón
      translucent: true,
      showBackdrop: false, // Evita que oscurezca la pantalla
    });

    await popover.present();
  }
}
