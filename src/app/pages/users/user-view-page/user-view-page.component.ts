import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view-page',
  templateUrl: './user-view-page.component.html',
  styleUrls: ['./user-view-page.component.css']
})
export class UserViewPageComponent {
    userId?: number;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {

        this.route.queryParamMap.subscribe(params => {
            const idParam = params.get('id');
            if (idParam) {
                this.userId = +idParam;
            }
        });
    }
}
