import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSmallComponent } from './post-small.component';

describe('PostSmallComponent', () => {
  let component: PostSmallComponent;
  let fixture: ComponentFixture<PostSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
