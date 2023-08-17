import { Injectable } from '@angular/core';
import User from '../entities/User';
import { GorestEntityService } from './gorest-entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService extends GorestEntityService<User> {

    constructor(
        http: HttpClient
    ) {
        super(http);
        this.allowedQueryKeys = ['name', 'email'];
        this.baseEndpoint = 'https://gorest.co.in/public/v2/users';
        this.token = '34b0a6c9a512ea7fcaeeba70d5d677cb3fd7cb639e51162bf705c1196e80f600';
    }


}
