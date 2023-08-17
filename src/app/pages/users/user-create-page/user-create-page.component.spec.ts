import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatePageComponent } from './user-create-page.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';

describe('UserCreatePageComponent', () => {
    let component: UserCreatePageComponent;
    let fixture: ComponentFixture<UserCreatePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserCreatePageComponent,
                MockComponent(UserFormComponent),
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParamMap: of(new Map(Object.entries({
                            editId: 999,
                        }))),
                    },
                },
            ]
        });
        fixture = TestBed.createComponent(UserCreatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set editId', () => {
        expect(component.editId).toBe(999);
    });
});
