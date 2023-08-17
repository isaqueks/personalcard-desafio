import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatePageComponent } from './post-create-page.component';

describe('PostCreatePageComponent', () => {
  let component: PostCreatePageComponent;
  let fixture: ComponentFixture<PostCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreatePageComponent]
    });
    fixture = TestBed.createComponent(PostCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
