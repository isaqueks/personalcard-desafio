import { Component, OnInit } from '@angular/core';
import EntityQuery from 'src/app/entities/EntityQuery';
import User from 'src/app/entities/User';
import { UserService } from 'src/app/services/user.service';
import BaseEntity from 'src/app/entities/BaseEntity';
import { EntityService } from 'src/app/services/entity.service';

@Component({
    selector: 'app-user-browser',
    templateUrl: './user-browser.component.html',
    styleUrls: ['./user-browser.component.css'],
    providers: [{
        provide: EntityService<User>,
        useClass: UserService
    }]
})
export class UserBrowserComponent {

    refreshId: number = 0;
    users?: User[];
    filter: EntityQuery<User> = {};

    constructor(
        protected service: EntityService<User>
    ) { }

    load(users: BaseEntity[]): void {
        this.users = users as User[];
    }

    applyFilter(filter: EntityQuery<User>) {
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
