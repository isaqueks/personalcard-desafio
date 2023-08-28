import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/app/entities/User';
import { EntityService } from 'src/app/services/entity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-search-field',
    templateUrl: './user-search-field.component.html',
    styleUrls: ['./user-search-field.component.css'],
    providers: [{
        provide: EntityService<User>,
        useClass: UserService
    }]
})
export class UserSearchFieldComponent implements OnInit, OnChanges {

    suggestedUsers: User[] = [];

    currentValue: string = '';

    private subscription?: Subscription;
    private timeoutHandler?: number;

    @Input() label = 'Usuário';
    @Input() user?: User;
    @Output() userChange = new EventEmitter<User | undefined>();

    constructor(
        private userService: EntityService<User>
    ) { }

    ngOnInit(): void {
        if (this.user) {
            this.currentValue = this.user.name;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            this.currentValue = this.user?.name || '';
        }
    }

    checkSelected(clean: boolean = true) {
        const selected = this.suggestedUsers.find(({ name }) => name === this.currentValue);
        if (selected) {
            this.userChange?.emit(selected);
        }
        else if (clean) {
            this.userChange?.emit(undefined);
            this.currentValue = '';
        }
    }

    onBlur() {
        this.checkSelected();
    }

    setCurrentValue(value: string) {
        value = value.trim();
        if (value.toLowerCase() === this.currentValue.toLowerCase()) {
            return;
        }
        this.currentValue = value;

        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
        }

        this.timeoutHandler = window.setTimeout(() => {
            this.loadSuggestions();
            this.checkSelected(false);
        }, 250);

    }

    loadSuggestions() {

        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        this.subscription = this.userService.fetch(1, 20, {
            name: this.currentValue
        })
            .subscribe(users => {
                this.suggestedUsers = users.data;
            })
    }

}
