import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.css']
})
export class PostCreatePageComponent implements OnInit {

    editId?: number;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        this.route.queryParamMap.subscribe(params => {
            const idParam = params.get('editId');
            if (idParam) {
                this.editId = +idParam;
            }
        });

    }


}
