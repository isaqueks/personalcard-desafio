import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatePageComponent } from './post-create-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';

describe('PostCreatePageComponent', () => {
    let component: PostCreatePageComponent;
    let fixture: ComponentFixture<PostCreatePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PostCreatePageComponent,
                MockComponent(PostFormComponent)
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
        fixture = TestBed.createComponent(PostCreatePageComponent);
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
