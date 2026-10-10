import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { POSTS_DATA, Post } from '../../data/postData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  private route = inject(ActivatedRoute);

  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : 1;
      this.post = POSTS_DATA.find(p => p.id === id) || POSTS_DATA[0];
    });
  }
}
