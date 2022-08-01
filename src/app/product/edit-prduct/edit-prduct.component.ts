import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productsDB } from 'src/app/shared/data/products';
import { Products } from 'src/app/models/products';
import { DataService } from 'src/app/shared/data/service/data.service';
@Component({
  selector: 'app-edit-prduct',
  templateUrl: './edit-prduct.component.html',
  styleUrls: ['./edit-prduct.component.scss']
})
export class EditPrductComponent implements OnInit {


  constructor(private route: ActivatedRoute, private products: DataService, private productesdb: productsDB, private router: Router) { }
  id: string;
  header: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = +!this.id == 0 ? "Edit Product" : "Add Product";
  }
  onSubmit(form: NgForm) {
    let produit: Products = {
      id: parseInt(form.value.id),
      images: form.value.images,
      name: form.value.name,
      price: parseFloat(form.value.price),
      rating: parseFloat(form.value.rating),
      feedback: parseFloat(form.value.feedback),
      category: form.value.category,
      type: form.value.type
    }
    console.log(produit)
    this.products.insertData(produit).subscribe((res: any) => {
      console.log('Added sucessfully')
    })
    this.router.navigateByUrl('/products')
  }

}
