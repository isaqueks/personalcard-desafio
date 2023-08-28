import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/entities/User';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

    buzy = false;
    
    @Input() user?: User;

    @Output() edit = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();


    editUser(id: number) {
        this.edit.emit(id);
    }

    deleteUser(id: number) {
        this.buzy = true;
        this.delete.emit(id);
    }

}
