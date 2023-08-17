import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.css']
})
export class UserCreatePageComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) {}

    editId?: number;

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
            const editIdParam = params.get('editId');
            if (editIdParam) {
                this.editId = +editIdParam;
            }
        });
    }

}
