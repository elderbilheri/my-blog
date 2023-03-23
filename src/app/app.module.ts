import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BlogService } from './services/blog.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { PostsComponent } from './components/posts/posts.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftPanelComponent,
    PostsComponent,
    RightPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
