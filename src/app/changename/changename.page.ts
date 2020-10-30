import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-changename',
  templateUrl: './changename.page.html',
  styleUrls: ['./changename.page.scss'],
})
export class ChangenamePage implements OnInit {

  constructor(private modalController: ModalController) { 
    
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalpopupPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  // openModal (){
  //   this.modalController.create({component: ModalpopupPage}).then ((modalElement) => {
  //     modalElement.present();
  //   })
  // }

  ngOnInit() {
  }

}
