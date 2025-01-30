import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  profileImage: string = 'assets/macherie.png'; 
  userName: string = 'Tu Nombre';
  userStatus: string = 'Disponible';
  
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async changeProfilePicture() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cambiar foto de perfil',
      buttons: [
        {
          text: 'Tomar foto',
          icon: 'camera',
          handler: () => {
            console.log('Abrir cámara');
          }
        },
        {
          text: 'Seleccionar de la galería',
          icon: 'image',
          handler: () => {
            console.log('Abrir galería');
          }
        },
        {
          text: 'Eliminar foto',
          icon: 'trash',
          handler: () => {
            this.profileImage = 'assets/img/default-profile.png';
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  goToAccount() {
    console.log('Ir a Cuenta');
  }

  goToPrivacy() {
    console.log('Ir a Privacidad');
  }

  goToNotifications() {
    console.log('Ir a Notificaciones');
  }

  goToHelp() {
    console.log('Ir a Ayuda');
  }

  ngOnInit() {
  }

}
