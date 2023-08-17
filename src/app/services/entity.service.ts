import { Injectable } from '@angular/core';
import EntityQuery from '../entities/EntityQuery';
import BaseEntity from '../entities/BaseEntity';
import { Observable } from 'rxjs';
import EntityPage from '../entities/EntityPage';

@Injectable({
    providedIn: 'root'
})
export abstract class EntityService<T extends BaseEntity> {

    constructor() { }

    public abstract fetch(page: number, pageSize: number, query?: EntityQuery<T>): Observable<EntityPage<T>>;

    public abstract fetchById(id: number): Observable<T>;

    public abstract create(entity: Omit<T, 'id'>): Observable<T>;

    public abstract updateById(id: number, dataToUpdate: Partial<Omit<T, 'id'>>): Observable<T>;

    public abstract deleteById(id: number): Observable<void>;

}
