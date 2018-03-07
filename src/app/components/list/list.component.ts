import { Component } from '@angular/core'
import { ListService } from './list.service'

@Component({
    selector: 'cmp-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public title: string = 'Mein Liste'
    public listElements: Array<string> = []

    public constructor(private listService: ListService) {
        this.listElements = listService.getListContent()
    }
}
