import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productsDB } from 'src/app/shared/data/products';
import { Products } from 'src/app/models/products';
import { UploadService } from 'src/app/image-upload.service';
import { DataService } from 'src/app/shared/data/service/data.service';

@Component({
  selector: 'app-edit-prduct',
  templateUrl: './edit-prduct.component.html',
  styleUrls: ['./edit-prduct.component.scss']
})
export class EditPrductComponent implements OnInit {
  constructor(private uploadService: UploadService, private route: ActivatedRoute, private products: DataService, private productesdb: productsDB, private router: Router) { }
  id: string;
  header: string;
  filedata: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = +!this.id == 0 ? "Edit Product" : "Add Product";
  }
  fileEvent(e) {
    this.filedata = e.target.files[0]
  }




  onSubmit(form: NgForm) {
    let produit: Products = {
      id: parseInt(form.value.id),
      images: this.filedata,
      name: form.value.name,
      price: parseFloat(form.value.price),
      rating: parseFloat(form.value.rating),
      feedback: parseFloat(form.value.feedback),
      category: form.value.category,
      type: form.value.type
    }
    const products: any = new FormData()


    products.append('images', this.filedata, this.filedata.name)
    products.append("name", produit.name)
    products.append("price", produit.price)
    products.append("rating", produit.rating)
    products.append("feedback", produit.feedback)
    products.append("category", produit.category)
    products.append("type", produit.type)
    console.log(products)

    console.log(produit)
    this.products.insertData(products).subscribe((res: any) => {
      console.log('Added sucessfully', res)
    })
    this.router.navigateByUrl('/products')
  }


}
