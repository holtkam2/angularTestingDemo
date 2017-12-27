import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentsService } from "./comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {

  @Input() activePost;
  comments = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {}

  ngOnChanges(){
    if (this.activePost !== undefined){
      this.commentsService.fetchComments(this.activePost.id).subscribe(res => {
        this.comments = res;
      })
    }
  }

}
