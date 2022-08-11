import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/products';
import { DataService } from '../shared/data/service/data.service';
@Component({
  selector: 'll-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contact: DataService) { }
  public comments = []
  isLoaded: boolean;
  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    let contact: Contact = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      core: form.value.core
    }
    this.contact.insertContact(contact).subscribe((res: any) => {
    })
  }
}
