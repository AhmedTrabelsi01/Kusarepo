import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { productsDB } from '../../shared/data/products';
import { DataService } from '../../shared/data/service/data.service';
@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public baseUrl = environment.IMG_URL
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products: any[] = [];
  tmp = []
  static id: number;
  constructor(private route: ActivatedRoute, private productesdb: DataService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getData()
      this.isLoaded = true
    }, 900)
  }




  getData() {
    this.productesdb.getData().subscribe((res: any) => {
      this.products = res
      console.log(this.products)
    })
  }



  onChange(searchText: string) {
    this.tmp = this.products
    this.products = this.products.filter((item) => { return (item.name.toString().toLocaleLowerCase().includes(searchText)) })
  }
  onDelete(id: number) {
    console.log(id)
    this.productesdb.deleteData(id).subscribe((res) => {
      this.getData()
    })
  }
  onEdit(id: number) {
    console.log(id)
    ProductListComponent.id = id
    this.router.navigateByUrl('/editprduct')
  }
  radioFilter(type: string) {
    this.products = (this.products.filter((item) => { return (item.type.toString().toLocaleLowerCase() == type) }))
  }
}