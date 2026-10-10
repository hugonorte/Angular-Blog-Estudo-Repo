import { Component } from '@angular/core';

import { HeroComponent } from "../../components/hero/hero.component";
import { PostSmallComponent } from '../../components/card/post-small/post-small.component';

import { POSTS_DATA, Post } from '../../data/postData';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    PostSmallComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = POSTS_DATA;
}
