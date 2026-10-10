import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBigComponent } from './post-big.component';

describe('PostBigComponent', () => {
  let component: PostBigComponent;
  let fixture: ComponentFixture<PostBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
