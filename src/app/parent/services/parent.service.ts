import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ParentService {

  root = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  getPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .map(res => res.json());
  }

  sortById(arr){
    return arr.sort((post1, post2) => {
      return post1.id - post2.id;
    });
  }

}
