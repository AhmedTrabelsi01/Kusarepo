import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Contact } from '../models/products';

@Component({
  selector: 'll-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    let contact: Contact = {
      name:form.value.name,
      number:parseInt(form.value.number),
      email:form.value.email,
      subject:form.value.subject,
      core:form.value.core
    }
    console.log(contact)
  }
}
