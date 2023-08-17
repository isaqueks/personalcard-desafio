import { Component, OnInit } from '@angular/core';
import Post from 'src/app/entities/Post';
import EntityQuery from 'src/app/entities/EntityQuery';
import { PostService } from 'src/app/services/post.service';
import BaseEntity from 'src/app/entities/BaseEntity';

@Component({
  selector: 'app-post-browser',
  templateUrl: './post-browser.component.html',
  styleUrls: ['./post-browser.component.css']
})
export class PostBrowserComponent {

    posts?: Post[];
    filter: EntityQuery<Post> = {};
    refreshId = 0;

    constructor(
        protected service: PostService
    ) {}

    load(posts: BaseEntity[]): void {
        this.posts = posts as Post[];
    }

    applyFilter(filter: EntityQuery<Post>) {
        this.filter = filter;
    }

    deleteEntity(id: number): void {
        this.service.deleteById(id)
        .subscribe(() => this.refreshId++);
    }

    editEntity(id: number): void {
        window.location.href = `/users/create?editId=${id}`;
    }

}
