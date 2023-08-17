import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { MockComponent } from 'ng-mocks';
import { FormComponent } from '../form/form.component';
import { FieldComponent } from '../field/field.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

describe('UserFormComponent', () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserFormComponent,
                MockComponent(FormComponent),
                MockComponent(FieldComponent),
                MockComponent(ButtonComponent)
            ],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        updateById: (...args: any) => of({}),
                        create: (...args: any) => of({})
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create the user', () => {
        component.email = 'a@b.c';
        component.name = 'A';
        component.gender = 'male';
        component.status = 'active';

       const spy = spyOn(component['service'], 'create');

       component.submitUser({ preventDefault: () => {} } as any);
       expect(spy).toHaveBeenCalledTimes(1);
    })

    it('should edit the user', () => {
        component.email = 'K@b.c';
        component.name = 'K';
        component.gender = 'female';
        component.status = 'active';

       const spy = spyOn(component['service'], 'updateById');

       component.submitUser({ preventDefault: () => {} } as any);
       expect(spy).toHaveBeenCalledTimes(1);
    })
});
