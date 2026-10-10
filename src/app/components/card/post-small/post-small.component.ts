import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-small',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-small.component.html',
  styleUrl: './post-small.component.css'
})
export class PostSmallComponent {
  @Input() postData!: { id: number, imagePath: string, category: string, title: string };
}
