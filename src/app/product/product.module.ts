import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { EditPrductComponent } from './edit-prduct/edit-prduct.component';
import { productsDB } from '../shared/data/products';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPrductComponent } from './add-prduct/add-prduct.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductHeroComponent, EditPrductComponent, AddPrductComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [productsDB]
})
export class ProductModule { }
