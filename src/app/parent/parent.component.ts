import { Component, OnInit } from '@angular/core';
import { ParentService } from "./services/parent.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  posts = [];
  activePost;

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getPosts().subscribe(res => {
      this.posts = this.parentService.sortById(res);
      this.activePost =  res[0];
    })
  }

  setActivePost(post){
    console.log(post)
    this.activePost = post;
  }

}
