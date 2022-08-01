import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from 'src/app/models/products';
import { ProductListComponent } from '../product-list/product-list.component';
import { productsDB } from 'src/app/shared/data/products';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/service/data.service';
@Component({
  selector: 'app-add-prduct',
  templateUrl: './add-prduct.component.html',
  styleUrls: ['./add-prduct.component.scss']
})
export class AddPrductComponent implements OnInit {

  constructor(private productData: DataService, private route: ActivatedRoute, private productesdb: productsDB, private router: Router) { }
  public prod: any
  ngOnInit(): void {
    this.productData.getData().subscribe((res: any) => {
      this.prod = res.find((x: Products) => x.id == ProductListComponent.id)
      console.log(this.prod)
    })
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
    this.productData.editData(ProductListComponent.id, produit).subscribe((res: any) => {
      console.log('edit success')
    })
    this.router.navigateByUrl('/products')
  }
}
