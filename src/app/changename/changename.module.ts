import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangenamePageRoutingModule } from './changename-routing.module';

import { ChangenamePage } from './changename.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangenamePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ChangenamePage]
})
export class ChangenamePageModule {}
