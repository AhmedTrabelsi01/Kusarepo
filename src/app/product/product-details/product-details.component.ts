import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/products';
import { DataService } from 'src/app/shared/data/service/data.service';
@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private comment: DataService) { }
  comments = []
  ngOnInit(): void {
    this.getComments()
  }
  getComments() {
    this.comment.getComments().subscribe((res: any) => {
      this.comments = res
    })
  }

  onSubmit(form: NgForm) {
    let comment: Comment = {
      username: form.value.username,
      comment: form.value.comment
    }
    console.log(comment)
    this.comment.insertComment(comment).subscribe((res: any) => {
      this.comments.push(res)
      console.log(this.comments)
    })
  }
}
