import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntityBrowserComponent } from './entity-browser.component';
import { MockComponent } from 'ng-mocks';
import { PaginatedDataComponent } from '../paginated-data/paginated-data.component';
import { SkeletonPlaceholderComponent } from '../skeleton-placeholder/skeleton-placeholder.component';
import { EntityService } from 'src/app/services/entity.service';
import { Observable, of } from 'rxjs';
import EntityPage from 'src/app/entities/EntityPage';
import EntityQuery from 'src/app/entities/EntityQuery';

describe('EntityBrowserComponent', () => {
    let component: EntityBrowserComponent;
    let fixture: ComponentFixture<EntityBrowserComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                EntityBrowserComponent,
                MockComponent(PaginatedDataComponent),
                MockComponent(SkeletonPlaceholderComponent)
            ]
        });
        fixture = TestBed.createComponent(EntityBrowserComponent);
        component = fixture.componentInstance;

        const svc: EntityService<any> = {
            fetch: (page: number, pageSize: number, query?: EntityQuery<any> | undefined): Observable<EntityPage<any>> => {
                return of({
                    page,
                    requestedPageSize: pageSize,
                    totalPages: 10,
                    data: [],
                })
            },
            fetchById: (id: number): Observable<any> => {
                return of({ });
            },
            create: (entity: Omit<any, 'id'>): Observable<any> => {
                return of({ });
            },
            updateById: (id: number, dataToUpdate: Partial<Omit<any, 'id'>>): Observable<any> => {
                return of({ });
            },
            deleteById: (id: number): Observable<void> => {
                return of(undefined);
            }
        }

        component.service = svc;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch the service', () => {
        const spy = spyOn(component.service, 'fetch').and.callThrough();
        component.fetch();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should fetch when gotoPage', () => {
        const spy = spyOn(component, 'fetch').and.callThrough();
        component.gotoPage(2);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(component.pageNumber).toBe(2);
    });

    it('should delete entity and refresh', () => {
        const spy = spyOn(component.service, 'deleteById').and.callThrough();
        const fetchSpy = spyOn(component, 'fetch').and.callThrough();
        component.deleteEntity(1);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit edit event when call editEntity()', () => {
        const emitSpy = spyOn(component.onEditEntity, 'emit').and.callThrough();
        component.editEntity(1);
        expect(emitSpy).toHaveBeenCalledTimes(1);
    });

});
