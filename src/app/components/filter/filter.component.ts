import { Component, EventEmitter, Input, Output } from '@angular/core';
import EntityQuery from 'src/app/entities/EntityQuery';

interface Filter {
    name: string;
    label: string;
    type?: 'string' | 'number' | 'user_id';
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    @Input() filters: Filter[] = [];

    @Output() onSubmit = new EventEmitter<EntityQuery<unknown>>();

    currentFilter: EntityQuery<any> = {};
    currentTimeoutHandler?: number;

    filterChange(name: string, value?: string | number) {
        value = String(value || '');
        this.currentFilter[name] = value.trim() || undefined;

        if (this.currentTimeoutHandler !== undefined) {
            window.clearTimeout(this.currentTimeoutHandler);
        }

        this.currentTimeoutHandler = window.setTimeout(() => this.submit(), 250);
    }

    submit() {
        this.onSubmit.emit({ ...this.currentFilter });
    }

}