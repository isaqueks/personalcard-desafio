import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { FormsModule } from '@angular/forms';

describe('FieldComponent', () => {
    let component: FieldComponent;
    let fixture: ComponentFixture<FieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FieldComponent],
            imports: [
                FormsModule
            ]
        });
        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a input for text, number and email types', () => {
        component.type = 'text';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('input[type="text"]')).toBeTruthy();

        component.type = 'number';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('input[type="number"]')).toBeTruthy();

        component.type = 'email';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('input[type="email"]')).toBeTruthy();
    });

    it('should have a textarea for textarea type', () => {
        component.type = 'textarea';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('textarea')).toBeTruthy();
    });

    it('should have a select for dropdowm type', () => {
        component.type = 'dropdown';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('select')).toBeTruthy();
    });
});
