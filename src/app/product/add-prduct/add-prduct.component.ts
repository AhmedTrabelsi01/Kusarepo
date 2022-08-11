
import { NgForm } from '@angular/forms';
import { Products } from 'src/app/models/products';
import { ProductListComponent } from '../product-list/product-list.component';
import { productsDB } from 'src/app/shared/data/products';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload'
import { DataService } from 'src/app/shared/data/service/data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UploadService } from 'src/app/image-upload.service';
@Component({
  selector: 'app-add-prduct',
  templateUrl: './add-prduct.component.html',
  styleUrls: ['./add-prduct.component.scss']
})
export class AddPrductComponent implements OnInit {
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  formBuilder: any;
  constructor(private productData: DataService, private route: ActivatedRoute, private productesdb: productsDB, private router: Router, private uploadService: UploadService) { }
  public prod: any
  form: FormGroup;
  error: string;
  id: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  event: any | undefined;


  ngOnInit(): void {
    this.productData.getData().subscribe((res: any) => {
      this.prod = res.find((x: Products) => x.id == ProductListComponent.id)
      console.log(this.prod)
      this.form = this.formBuilder.group({
        image: ['']
      });
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


  uploadFile(file) {
    observe: 'events'
    const formData = new FormData();
    formData.append('file', file.data);

    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  private uploadFiles() {

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

}
