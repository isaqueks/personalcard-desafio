import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entity-action',
  templateUrl: './entity-action.component.html',
  styleUrls: ['./entity-action.component.css']
})
export class EntityActionComponent {

    @Input() url?: string;
    @Input() queryParams?: { [key: string]: string | number };
   
}
