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
  imgIcon = '../assets/images/news.png';
  imgNews = '../assets/images/news2.jpg';
  imgUsers = '../assets/images/perfil/img4.jpg';

  posts: Post[] = [];
  comments: Comment[] = [];
  users: User[] = [];
  selectedPostId: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts() {
    this.blogService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  loadComments(postId: number) {
    this.selectedPostId = postId;
    this.blogService.getComments(postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  loadUsers() {
    this.blogService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  getUserName(post: Post): string {
    const user = this.users.find((user) => user.id === post.userId);
    return user ? user.name : '';
  }
}
