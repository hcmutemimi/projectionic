import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ExploreContainerComponent} from './explore-container/explore-container.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginPage, ExploreContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  
})
export class LoginPageModule {}
