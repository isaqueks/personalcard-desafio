import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityBrowserComponent } from './entity-browser.component';

describe('EntityBrowserComponent', () => {
  let component: EntityBrowserComponent;
  let fixture: ComponentFixture<EntityBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityBrowserComponent]
    });
    fixture = TestBed.createComponent(EntityBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
