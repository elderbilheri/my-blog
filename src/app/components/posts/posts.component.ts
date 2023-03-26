import { Component, OnInit } from '@angular/core';

import { BlogService } from './../../services/blog.service';
import { Post } from './../../interfaces/IPosts';
import { Comment } from './../../interfaces/IComments';
import { User } from './../../interfaces/IUsers';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss', './posts.responsive.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];
  users: User[] = [];
  selectedPostId: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  // Método que carrega os dados dos posts e salva na propriedade posts
  loadPosts() {
    this.blogService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // Método que carrega os dados dos comentários e salva na propriedade comments
  loadComments(postId: number) {
    this.selectedPostId = postId;
    this.blogService.getComments(postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  // Método que carrega os dados dos usuários e salva na propriedade users
  loadUsers() {
    this.blogService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // Método que busca o nome do usuário através do id do post
  getUserName(post: Post): string {
    const user = this.users.find((user) => user.id === post.userId);
    return user ? user.name : '';
  }
}
