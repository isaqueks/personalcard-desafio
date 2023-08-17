import { TestBed } from '@angular/core/testing';

import { GorestEntityService } from './gorest-entity.service';

describe('GorestEntityService', () => {
    let service: GorestEntityService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GorestEntityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
