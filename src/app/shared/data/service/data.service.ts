import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://localhost:8000/api/products')
  }
  deleteData(id: number) {
    return this.httpClient.delete('http://localhost:8000/api/deleteProduct/' + id)
  }
  insertData(product: any) {
    return this.httpClient.post('http://localhost:8000/api/addProduct', product)
  }
  editData(id: number, product: any) {
    return this.httpClient.put('http://localhost:8000/api/updateProduct/' + id, product)
  }
}
