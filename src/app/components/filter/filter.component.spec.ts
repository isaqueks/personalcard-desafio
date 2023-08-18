import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { MockComponent } from 'ng-mocks';
import { FieldComponent } from '../field/field.component';
import { UserSearchFieldComponent } from '../user-search-field/user-search-field.component';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FilterComponent,
                MockComponent(FieldComponent),
                MockComponent(UserSearchFieldComponent)
            ]
        });
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        window.clearTimeout(component.currentTimeoutHandler);
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not consider whitespace-only values', () => {
        component.filterChange('name', ' \t');
        expect(component.currentFilter['name']).toBeUndefined();
    });

    it('should change currentFilter with valid values', () => {
        component.filterChange('name', ' I am a name   ');
        component.filterChange('id', 52);
        component.filterChange('foo', 'bar');
        expect(component.currentFilter).toEqual({
            name: 'I am a name',
            id: '52',
            foo: 'bar'
        });
    });
});
