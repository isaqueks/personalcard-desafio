import { Injectable } from '@angular/core';
import { GorestEntityService } from './gorest-entity.service';
import Post from '../entities/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService extends GorestEntityService<Post> {

    constructor(
        http: HttpClient
    ) {
        super(http);
        this.allowedQueryKeys = ['title', 'user_id'];
        this.baseEndpoint = 'https://gorest.co.in/public/v2/posts';
        this.token = '34b0a6c9a512ea7fcaeeba70d5d677cb3fd7cb639e51162bf705c1196e80f600';
    }


}
