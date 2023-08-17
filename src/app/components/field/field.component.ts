import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

    @Input() label = '';
    @Input() type = 'text';
    @Input() value = '';
    @Input() dropdownValues: { [key: string]: string | number } = {}
    @Output() valueChange = new EventEmitter<string>();

    setValue(value: string) {
        console.log(value)
        this.value = value;
        this.valueChange.emit(this.value);
    }

    dropdownKeys() {
        return Object.keys(this.dropdownValues);
    }



}
