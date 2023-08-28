import { Component, EventEmitter, Input, Output } from '@angular/core';
import Post from 'src/app/entities/Post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {

    buzy = false;
    
    @Input() post?: Post;

    @Output() edit = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();

    editPost(id: number) {
        this.edit.emit(id);
    }

    deletePost(id: number) {
        this.buzy = true;
        this.delete.emit(id);
    }

}
