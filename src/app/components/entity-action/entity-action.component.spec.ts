import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityActionComponent } from './entity-action.component';

describe('EntityActionComponent', () => {
  let component: EntityActionComponent;
  let fixture: ComponentFixture<EntityActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityActionComponent]
    });
    fixture = TestBed.createComponent(EntityActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
