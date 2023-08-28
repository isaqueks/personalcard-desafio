import { Component, Input, OnInit } from '@angular/core';
import { catchError, flatMap, mergeMap } from 'rxjs';
import Post from 'src/app/entities/Post';
import User from 'src/app/entities/User';
import { EntityService } from 'src/app/services/entity.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css'],
    providers: [{
        provide: EntityService<Post>,
        useClass: PostService
    }, {
        provide: EntityService<User>,
        useClass: UserService
    }]
})
export class PostFormComponent implements OnInit {

    title: string = '';
    body: string = '';
    user?: User;

    loading: boolean = false;

    @Input() editId?: number;


    constructor(
        private postService: EntityService<Post>,
        private userService: EntityService<User>
    ) { }

    ngOnInit(): void {
        if (this.editId !== undefined) {
            this.loading = true;
            this.postService.fetchById(this.editId)
                .pipe(
                    mergeMap(post => {
                        this.title = post.title;
                        this.body = post.body;
                        return this.userService.fetchById(post.user_id)
                    })
                )
                .subscribe({
                    next: user => {
                        this.user = user;
                        this.loading = false;
                    },
                    error: error => {
                        console.error(error);
                        alert('Erro ao carregar post');
                        window.location.href = '/posts';
                    }
                });
        }
    }

    submitPost(event: SubmitEvent) {
        event.preventDefault();

        if (this.user === undefined) {
            return;
        }

        const post = {
            title: this.title,
            body: this.body,
            user_id: this.user.id,
        };

        this.loading = true;

        const req = this.editId ? this.postService.updateById(this.editId, post) : this.postService.create(post);

        req.subscribe({
            next: () => {
                window.location.href = '/posts';
                this.loading = false;
            },
            error: error => {
                console.error(error);
                alert('Erro ao salvar post');
                this.loading = false;
            }
        })
    }

}
