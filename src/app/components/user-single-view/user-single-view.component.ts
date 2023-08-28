import { Component, Input } from '@angular/core';
import User from 'src/app/entities/User';
import { EntityService } from 'src/app/services/entity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-single-view',
  templateUrl: './user-single-view.component.html',
  styleUrls: ['./user-single-view.component.css'],
  providers: [{
    provide: EntityService<User>,
    useClass: UserService
  }]
})
export class UserSingleViewComponent {

    user?: User;
    
    @Input() userId?: number;

    constructor(
        private userService: EntityService<User>
    ) { }

    ngOnInit(): void {
        if (this.userId === undefined) {
            return;
        }

        this.userService.fetchById(this.userId)
        .subscribe({
            next: user => {
                this.user = user;
            },
            error: error => {
                console.error(error);
                alert('Erro ao carregar usuário');
                window.location.href = '/users';
            }
        });
    }

}
