import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.css']
})
export class UserCreatePageComponent implements OnInit {

    editId?: number;

    ngOnInit(): void {
        if (window.location.search) {
            const params = new URLSearchParams(window.location.search);
            this.editId = Number(params.get('editId'));
        }
    }

}
