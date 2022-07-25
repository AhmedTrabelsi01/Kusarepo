import { Component, OnInit } from '@angular/core';
import { productsExempleDB } from 'src/app/shared/data/products-exemple';
@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  products = [];
  constructor() {
    this.products = productsExempleDB.ProductsExemple
  }

  ngOnInit(): void { }

}
