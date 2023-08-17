import { TestBed } from '@angular/core/testing';

import { GorestEntityService } from './gorest-entity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('GorestEntityService', () => {
    let service: GorestEntityService<any>;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(GorestEntityService);
        http = TestBed.inject(HttpTestingController);

        service['baseEndpoint'] = 'http://test.xyz';
        service['token'] = 'TEST_TOKEN';
        service['allowedQueryKeys'] = ['foo', 'bar'];
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should not allow unexpected query key', () => {
        expect(() => service.fetch(1, 10, { foo: 5, unexpected: 10 })).toThrowError();
        http.expectNone('http://test.xyz?page=1&per_page=10&foo=5&unexpected=10');
    })

    it('should return correct page object', () => {
        const obs = service.fetch(1, 8, { foo: 5, bar: 10 });
        expect(obs).toBeInstanceOf(Observable);

        obs.subscribe(data => {
            expect(data.page).toBe(1);
            expect(data.requestedPageSize).toBe(8);
            expect(data.totalPages).toBe(5);
            expect(data.data).toEqual([{ foo: 5, bar: 10 }]);
        });

        const req = http.expectOne('http://test.xyz?page=1&per_page=8&foo=5&bar=10');
        expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service['token']}`);
        expect(req.request.method).toEqual('GET');
        req.flush([{ foo: 5, bar: 10 }], { headers: { 'X-Pagination-Pages': '5' } });
    });

    it('should return by id', () => {
        service.fetchById(111).subscribe(item => {
            expect(item).toEqual({ foo: 5, bar: 10 });
        });

        const req = http.expectOne('http://test.xyz/111');
        expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service['token']}`);
        expect(req.request.method).toEqual('GET');
        req.flush({ foo: 5, bar: 10 });
    });

    it('should send a post request to create a entity', () => {

        service.create({ foo: 5, bar: 10 }).subscribe(item => {
            expect(item).toEqual({ foo: 5, bar: 10 });
        });

        const req = http.expectOne(r => r.url === 'http://test.xyz' && r.method === 'POST');
        expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service['token']}`);

        expect(req.request.body).toEqual({ foo: 5, bar: 10 });
        req.flush({ foo: 5, bar: 10 });

    });

    it('should send a patch request to update a entity', () => {

        service.updateById(111, { bar: 99 }).subscribe(item => {
            expect(item).toEqual({ foo: 5, bar: 99 });
        });

        const req = http.expectOne(r => r.url === 'http://test.xyz/111' && r.method === 'PATCH');
        expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service['token']}`);

        expect(req.request.body).toEqual({ bar: 99 });
        req.flush({ foo: 5, bar: 99 });
    });

    it('should send a delete request to delete a entity', () => {

        service.deleteById(123).subscribe(item => {
            expect(item).toBeFalsy();
        });

        const req = http.expectOne(r => r.url === 'http://test.xyz/123' && r.method === 'DELETE');
        expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service['token']}`);

        req.flush(null);
    });
});
