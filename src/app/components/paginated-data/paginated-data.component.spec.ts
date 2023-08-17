import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedDataComponent } from './paginated-data.component';

describe('PaginatedDataComponent', () => {
  let component: PaginatedDataComponent;
  let fixture: ComponentFixture<PaginatedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatedDataComponent]
    });
    fixture = TestBed.createComponent(PaginatedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
