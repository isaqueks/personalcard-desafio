import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/entities/User';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

    @Input() list = '';
    @Input() label = '';
    @Input() type = 'text';
    @Input() value = '';
    @Input() dropdownValues: { [key: string]: string | number } = {}
    @Output() valueChange = new EventEmitter<string>();
    @Output() blur = new EventEmitter<void>();

    setValue(value: string) {
        this.value = value;
        this.valueChange.emit(this.value);
    }

    dropdownKeys() {
        return Object.keys(this.dropdownValues);
    }

    onBlur() {
        this.blur.emit();
    }

}
