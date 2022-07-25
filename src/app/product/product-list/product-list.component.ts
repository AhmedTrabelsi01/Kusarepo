import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 900)
  }
  onChange(searchText: string) {
    this.products = (productsDB.Product.filter((item) => { return (item.name.toString().toLocaleLowerCase().includes(searchText)) }))
  }
  onDelete(id: number) {
    let product = this.products.find(x => x.id === id);
    let index = this.products.indexOf(product!, 0);
    this.products.splice(index, 1);
  }
  radioFilter(type: string) {
    this.products = (productsDB.Product.filter((item) => { return (item.type.toString().toLocaleLowerCase() == type) }))
  }
}