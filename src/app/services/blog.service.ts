import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from './../interfaces/IPosts';
import { Comment } from './../interfaces/IComments';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private Urlposts = 'https://jsonplaceholder.typicode.com/posts';
  private Urlcomments = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.Urlposts);
  }

  getComments(postId: number): Observable<Comment[]> {
    const url = `${this.Urlcomments}?postId=${postId}`;
    return this.http.get<Comment[]>(url);
  }
}
