import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import EntityPage from 'src/app/entities/EntityPage';

@Component({
    selector: 'app-paginated-data',
    templateUrl: './paginated-data.component.html',
    styleUrls: ['./paginated-data.component.css']
})
export class PaginatedDataComponent {

    @Input() page?: EntityPage<any>;

    @Output() setPageNumber = new EventEmitter<number>();

    @ViewChild('contentView') contentView?: ElementRef<HTMLDivElement>;


    setPage(num: number) {
        this.setPageNumber.emit(num);
        this.contentView?.nativeElement.scroll({
            top: 0
        })
    }

}
