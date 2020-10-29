import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  // {
  //   path: 'deliver',
  //   loadChildren: () => import('./deliver/deliver.module').then( m => m.DeliverPageModule)
  // },
  
  // {
  //   path: 'order',
  //   loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  // },
  // {
  //   path: 'order/:id',
  //   resolve:{
  //     say: DataResolverService
  //   },
  //   loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  // },
  // {
  //   path: 'news',
  //   loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  // },
  // {
  //   path: 'app-explore-container',
  //   loadChildren: () => import('./app-explore-container/app-explore-container.module').then( m => m.NewsPageModule)
  // },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
