import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrductComponent } from './product/add-prduct/add-prduct.component';
import { EditPrductComponent } from './product/edit-prduct/edit-prduct.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout/base-layout.component';

const baseLayoutRouting: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: baseLayoutRouting
  }
  ,
  {
    path: 'addproject',
    component: EditPrductComponent
  },
  {
    path: 'editprduct',
    component: AddPrductComponent
  },
  {
    path: 'readmore/:id',
    component: ProductDetailsComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
