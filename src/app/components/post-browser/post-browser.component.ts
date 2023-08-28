import { Component, OnInit } from '@angular/core';
import Post from 'src/app/entities/Post';
import EntityQuery from 'src/app/entities/EntityQuery';
import { PostService } from 'src/app/services/post.service';
import BaseEntity from 'src/app/entities/BaseEntity';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-post-browser',
  templateUrl: './post-browser.component.html',
  styleUrls: ['./post-browser.component.css'],
  providers: [{
    provide: EntityService<Post>,
    useClass: PostService
  }]
})
export class PostBrowserComponent {

    posts?: Post[];
    filter: EntityQuery<Post> = {};
    refreshId = 0;

    constructor(
        protected service: EntityService<Post>
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
