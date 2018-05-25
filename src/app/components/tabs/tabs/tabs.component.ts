import { Component, AfterViewInit, ContentChildren, QueryList } from '@angular/core'
import { TabComponent } from '../tab/tab.component'

@Component({
    selector: 'cmp-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterViewInit {
    public static readonly cmpName: string = 'TabsComponent'

    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>

    public constructor() {}

    public ngAfterViewInit(): void {
        if (this.tabs.filter(tab => tab.active).length === 0) {
            this.select(this.tabs.first)
        }
    }

    public select(tab: TabComponent): void {
        this.tabs.toArray().forEach(item => {
            item.active = false
        })

        tab.active = true

        console.log('==>', tab, this.tabs)
    }
}
