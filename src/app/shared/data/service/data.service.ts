import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const headers = new HttpHeaders
    return this.httpClient.post('http://localhost:8000/api/addProduct', product, { headers: headers })
  }
  editData(id: number, product: any) {
    return this.httpClient.put('http://localhost:8000/api/updateProduct/' + id, product)
  }
  insertComment(comment: any) {
    return this.httpClient.post('http://localhost:8000/api/addComment', comment)
  }
  insertContact(contact: any) {
    return this.httpClient.post('http://localhost:8000/api/addContact', contact)
  }
  getComments() {
    return this.httpClient.get('http://localhost:8000/api/comments')
  }
}
