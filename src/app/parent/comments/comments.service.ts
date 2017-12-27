import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  fetchComments(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .map(res => res.json());
  }

}
