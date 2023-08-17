import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewPageComponent } from './user-view-page.component';

describe('UserViewPageComponent', () => {
  let component: UserViewPageComponent;
  let fixture: ComponentFixture<UserViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewPageComponent]
    });
    fixture = TestBed.createComponent(UserViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
