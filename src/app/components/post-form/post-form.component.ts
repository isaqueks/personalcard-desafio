import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

    @Input() editId?: number;

    title: string = '';
    body: string = '';
    userId: string = '';

    loading: boolean = false;

    constructor(
        private postService: PostService,
    ) {}

    ngOnInit(): void {
        if (this.editId !== undefined) {
            this.loading = true;
            this.postService.fetchById(this.editId)
            .subscribe(post => {
                this.title = post.title;
                this.body = post.body;
                this.userId = String(post.user_id);
                this.loading = false;
            }, error => {
                console.error(error);
                alert('Erro ao carregar post');
                window.location.href = '/posts';
            });
        }
    }

    submitPost(event: SubmitEvent) {
        event.preventDefault();

        const post = {
            title: this.title,
            body: this.body,
            user_id: +this.userId,
        };

        this.loading = true;

        const req = this.editId ? this.postService.updateById(this.editId, post) : this.postService.create(post);

        req.subscribe(null, error => {
            console.error(error);
            alert('Erro ao salvar post');
        }, () => {
            this.loading = false;
            window.location.href = '/posts'
        });
    }

}
