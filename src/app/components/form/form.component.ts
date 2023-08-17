import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    @Input() title = '';
    @Output() submit = new EventEmitter<SubmitEvent>();

    onSubmit(event: SubmitEvent) {
        this.submit.emit(event);
    }

}
