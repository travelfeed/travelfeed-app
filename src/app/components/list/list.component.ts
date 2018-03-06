import { ListService } from './list.service'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'cmp-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public title = 'Mein Liste'
    public listelements

    public constructor(service: ListService) {
        this.listelements = service.getListContent()
    }

    public ngOnInit() {}
}
