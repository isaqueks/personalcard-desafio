import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view-page',
  templateUrl: './user-view-page.component.html',
  styleUrls: ['./user-view-page.component.css']
})
export class UserViewPageComponent {
    userId?: number;

    ngOnInit(): void {
        const params = new URLSearchParams(window.location.search);
        this.userId = Number(params.get('id'));
    }
}
