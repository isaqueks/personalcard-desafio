import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFieldComponent } from './user-search-field.component';
import { MockComponent } from 'ng-mocks';
import { FieldComponent } from '../field/field.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

describe('UserSearchFieldComponent', () => {
    let component: UserSearchFieldComponent;
    let fixture: ComponentFixture<UserSearchFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserSearchFieldComponent,
                MockComponent(FieldComponent)
            ],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        fetch: (...args: any) => of({data:[
                            { name: 'A', id: 5 },
                            { name: 'B', id: 6 }
                        ]})
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(UserSearchFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set currentValue to user name', () => {
        component.user = { name: 'C', id: 5 } as any;
        component.ngOnChanges({ user: true } as any);
        expect(component.currentValue).toBe('C');
    });

    it('should load suggestions when value changes', () => {
        component.setCurrentValue('jjj');
        window.clearTimeout(component['timeoutHandler']);
        component.loadSuggestions();
        expect(component.suggestedUsers).toEqual([
            { name: 'A', id: 5 },
            { name: 'B', id: 6 }
        ] as any);

        const subs = component.userChange.subscribe((user) => {
            expect(user).toBeUndefined(); // No user named "jjj"
        });
        component.checkSelected();
        subs.unsubscribe();
    })

    it('should select user matching name', () => {
        component.setCurrentValue('A');
        window.clearTimeout(component['timeoutHandler']);
        component.loadSuggestions();

        const subs = component.userChange.subscribe((user) => {
            expect(user).toEqual({
                name: 'A',
                id: 5
            } as any); // No user named "jjj"
        });
        
        component.checkSelected();
        subs.unsubscribe();
    })
});
