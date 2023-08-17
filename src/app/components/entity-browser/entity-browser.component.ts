import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import BaseEntity from 'src/app/entities/BaseEntity';
import EntityPage from 'src/app/entities/EntityPage';
import { Subscription } from 'rxjs';
import { EntityService } from 'src/app/services/entity.service';
import EntityQuery from 'src/app/entities/EntityQuery';

@Component({
  selector: 'app-entity-browser',
  templateUrl: './entity-browser.component.html',
  styleUrls: ['./entity-browser.component.css']
})
export class EntityBrowserComponent {

    entityPage?: EntityPage<BaseEntity>;
    pageNumber: number = 1;
    isLoading: boolean = true;
   
    @Input() refreshid: number = 0;
    @Input() query: EntityQuery<BaseEntity> = {};
    @Input() service!: EntityService<BaseEntity>;
    @Output() onLoadEntities = new EventEmitter<BaseEntity[]>();
    @Output() onEditEntity = new EventEmitter<number>();
    @ContentChildren('filter') filterComponents: any;
    
    private currFetchSubscription?: Subscription;

    constructor(
    ) {}

    ngOnInit(): void {
        this.fetch();
    }

    ngOnChanges() {
        this.pageNumber = 1;
        this.fetch();
    }

    gotoPage(page: number) {
        this.pageNumber = page;
        this.fetch();
    }

    fetch(): void {
        this.isLoading = true;

        if (this.currFetchSubscription) {
            this.currFetchSubscription.unsubscribe();
        }

        this.currFetchSubscription = this.service.fetch(this.pageNumber, 25, this.query)
            .subscribe(page => {
                this.isLoading = false;
                this.entityPage = page;
                this.onLoadEntities.emit(page.data);
            });
    }

    deleteEntity(id: number): void {
        this.service.deleteById(id)
        .subscribe(() => this.fetch());
    }

    editEntity(id: number): void {
        this.onEditEntity.emit(id);
    }


}
