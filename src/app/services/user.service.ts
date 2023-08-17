import { Injectable } from '@angular/core';
import User from '../entities/User';
import { GorestEntityService } from './gorest-entity.service';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'src/env';

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
        this.token = API_KEY;
    }


}
