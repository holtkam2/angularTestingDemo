import { Component, OnInit } from '@angular/core';
import { ParentService } from "./services/parent.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  posts = [];
  comments = [];

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getPosts().subscribe(res => {
      console.log(res);
    })
  }

}
