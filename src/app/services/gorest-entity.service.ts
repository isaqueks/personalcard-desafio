import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import BaseEntity from '../entities/BaseEntity';
import { Observable, map } from 'rxjs';
import EntityQuery from '../entities/EntityQuery';
import { HttpClient, HttpParams } from '@angular/common/http';
import EntityPage from '../entities/EntityPage';

@Injectable({
    providedIn: 'root'
})
export abstract class GorestEntityService<T extends BaseEntity> extends EntityService<T> {
    
    protected baseEndpoint: string = '';
    protected token: string = '';
    protected allowedQueryKeys: string[] = [];

    constructor(
        protected http: HttpClient
    ) {
        super();
    }

    public override fetch(page: number, pageSize: number, query?: EntityQuery<T>): Observable<EntityPage<T>> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('per_page', pageSize.toString());

        if (query) {
            for (const key in query) {

                if (!this.allowedQueryKeys.includes(key)) {
                    throw new Error(`Unexpected query item "${key}".`)
                }

                const value = query[key];
                if (value !== undefined) {
                    params = params.set(key, value);
                }
            }
        }

        return this.http.get<T[]>(this.baseEndpoint, { params, observe: 'response', headers: { 'Authorization': `Bearer ${this.token}` }  })
            .pipe(map(res => {

                return {
                    data: res.body as T[],
                    page: page,
                    requestedPageSize: pageSize,
                    totalPages: +(res.headers.get('X-Pagination-Pages') || '1')
                }
            }));
    }

    public override fetchById(id: number): Observable<T> {
        return this.http.get<T>(`${this.baseEndpoint}/${id}`, { headers: { 'Authorization': `Bearer ${this.token}` }  });

    }

    public override create(entity: Omit<T, 'id'>): Observable<T> {
        return this.http.post<T>(this.baseEndpoint, entity, { headers: { 'Authorization': `Bearer ${this.token}` }  });
    }

    public override updateById(id: number, dataToUpdate: Partial<Omit<T, 'id'>>): Observable<T> {
        return this.http.patch<T>(`${this.baseEndpoint}/${id}`, dataToUpdate, { headers: { 'Authorization': `Bearer ${this.token}` }  });
    }

    public override deleteById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseEndpoint}/${id}`, { headers: { 'Authorization': `Bearer ${this.token}` }  });
    }
  

}
