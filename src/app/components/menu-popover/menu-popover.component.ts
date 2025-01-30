import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
  standalone: false,
})
export class MenuPopoverComponent implements OnInit {
  constructor(
    private popoverCtrl: PopoverController,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  goToSettings() {
    this.popoverCtrl.dismiss();
    this.router.navigate(['/settings']);
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Aviso',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async goToGroup() {
    this.popoverCtrl.dismiss();
    await this.showAlert('Estamos trabajando en esto');
  }

  async goToDifution() {
    this.popoverCtrl.dismiss();
    await this.showAlert('Estamos trabajando en esto');
  }

  async goToStarred() {
    this.popoverCtrl.dismiss();
    await this.showAlert('Estamos trabajando en esto');
  }
}
