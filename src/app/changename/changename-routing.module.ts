import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangenamePage } from './changename.page';

const routes: Routes = [
  {
    path: '',
    component: ChangenamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangenamePageRoutingModule {}
