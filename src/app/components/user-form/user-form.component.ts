import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/entities/User';
import { EntityService } from 'src/app/services/entity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    providers: [{
        provide: EntityService<User>,
        useClass: UserService
    }]
})
export class UserFormComponent implements OnInit {

    name: string = '';
    email: string = '';
    gender: string = 'male';
    status: string = 'active';
    loading: boolean = false;

    @Input() editId?: number;


    constructor(
        private service: EntityService<User>
    ) {

    }

    ngOnInit(): void {
        if (this.editId !== undefined) {
            this.loading = true;
            this.service.fetchById(this.editId)
                .subscribe({
                    next: user => {
                        this.name = user.name;
                        this.email = user.email;
                        this.gender = user.gender;
                        this.status = user.status;
                        this.loading = false;
                    },
                    error: error => {
                        console.error(error);
                        alert('Erro ao carregar usuário');
                        window.location.href = '/users';
                        this.loading = false;
                    }
                });
        }
    }

    submitUser(event: SubmitEvent) {
        event.preventDefault();

        const user = {
            name: this.name,
            email: this.email,
            gender: this.gender,
            status: this.status as 'active' | 'inactive'
        }

        this.loading = true;

        let request: Observable<User>;

        if (this.editId) {
            request = this.service.updateById(this.editId, user);
        }
        else {
            request = this.service.create(user);
        }

        request.subscribe({
            next: () => {
                window.location.href = '/users';
                this.loading = false;
            },
            error: error => {
                console.error(error);
                alert('Erro ao salvar usuário');
                this.loading = false;
            }
        });

    }

}
