import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Products } from '../models/products';
import { productsDB } from '../shared/data/products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productesdb: productsDB) { }
  id: string;
  header: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = +!this.id == 0 ? "Edit Product" : "Add Product";
  }
  onSubmit(form: NgForm) {
    let produit = {
      id: form.value.id,
      images: form.value.images,
      name: form.value.name,
      price: form.value.price,
      rating: form.value.rating,
      feedback: form.value.feedback,
      category: form.value.category,
      type: form.value.type
    }
    this.productesdb.onAdd(produit);
  }
}




