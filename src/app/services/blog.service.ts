import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from './../interfaces/IPosts';
import { Comment } from './../interfaces/IComments';
import { User } from './../interfaces/IUsers';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
