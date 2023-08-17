import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewPageComponent } from './user-view-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { UserSingleViewComponent } from 'src/app/components/user-single-view/user-single-view.component';

describe('UserViewPageComponent', () => {
    let component: UserViewPageComponent;
    let fixture: ComponentFixture<UserViewPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserViewPageComponent,
                MockComponent(UserSingleViewComponent)
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParamMap: of(new Map(Object.entries({
                            id: 777,
                        }))),
                    },
                },
            ]
        });
        fixture = TestBed.createComponent(UserViewPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set userId', () => {
        expect(component.userId).toBe(777);
    });
});
