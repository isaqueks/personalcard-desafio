import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrowserComponent } from './user-browser.component';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { EntityBrowserComponent } from '../entity-browser/entity-browser.component';
import { FilterComponent } from '../filter/filter.component';

describe('UserBrowserComponent', () => {
    let component: UserBrowserComponent;
    let fixture: ComponentFixture<UserBrowserComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserBrowserComponent,
                MockComponent(EntityBrowserComponent),
                MockComponent(FilterComponent)
            ],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        deleteById: (id: number) => of({})
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(UserBrowserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should request refresh when deleteEntity is called', () => {
        expect(component.refreshId).toBe(0);
        const spy = spyOn(component['service'], 'deleteById').and.callThrough();
        component.deleteEntity(53);
        expect(spy).toHaveBeenCalledWith(53);
        expect(component.refreshId).toBe(1);
    });
});
