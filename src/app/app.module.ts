import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BlogService } from './services/blog.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { PostsComponent } from './components/posts/posts.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftPanelComponent,
    PostsComponent,
    RightPanelComponent,
    ListUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
