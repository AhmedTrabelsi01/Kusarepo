import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Products } from './models/products';
import { productsDB } from './shared/data/products';
import { NgForm } from '@angular/forms';
import { AddPrductComponent } from './product/add-prduct/add-prduct.component';
import { EditPrductComponent } from './product/edit-prduct/edit-prduct.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, AddPrductComponent, EditPrductComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, FormsModule, HttpClientModule, NgxSkeletonLoaderModule, ReactiveFormsModule],
  providers: [productsDB],
  bootstrap: [AppComponent],
})
export class AppModule { }
