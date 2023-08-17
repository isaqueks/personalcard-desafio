import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleViewComponent } from './user-single-view.component';
import { MockComponent } from 'ng-mocks';
import { SkeletonPlaceholderComponent } from '../skeleton-placeholder/skeleton-placeholder.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

describe('UserSingleViewComponent', () => {
    let component: UserSingleViewComponent;
    let fixture: ComponentFixture<UserSingleViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserSingleViewComponent,
                MockComponent(SkeletonPlaceholderComponent),
                MockComponent(UserViewComponent)
            ],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        fetchById: (id: number) => of({
                            id,
                            name: 'mocked name',
                            email: 'mocked email',
                        })
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(UserSingleViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load the user by id', () => {
        component.userId = 111;
        component.ngOnInit();
        expect(component.user).toEqual({
            id: 111,
            name: 'mocked name',
            email: 'mocked email',
        } as any);
    })
});
