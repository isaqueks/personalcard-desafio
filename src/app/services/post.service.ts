import { Injectable } from '@angular/core';
import { GorestEntityService } from './gorest-entity.service';
import Post from '../entities/Post';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'src/env';

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
        this.token = API_KEY;
    }


}
