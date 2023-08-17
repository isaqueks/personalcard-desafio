import { Component, EventEmitter, Input, Output } from '@angular/core';
import EntityPage from 'src/app/entities/EntityPage';

@Component({
    selector: 'app-paginated-data',
    templateUrl: './paginated-data.component.html',
    styleUrls: ['./paginated-data.component.css']
})
export class PaginatedDataComponent {

    @Input() page?: EntityPage<any>;

    @Output() setPageNumber = new EventEmitter<number>();


    setPage(num: number) {
        this.setPageNumber.emit(num);
    }

}
