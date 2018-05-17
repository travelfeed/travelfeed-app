import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Article } from '../typings'

@Component({
    selector: 'cmp-articles-item',
    templateUrl: './articles-item.component.html',
    styleUrls: ['./articles-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesItemComponent {
    @Input() public article: Article

    public once: boolean = false

    public twice: boolean = false

    public wait: boolean = false

    public text: string

    public constructor() {}

    public delete(article): void {
        console.log('==> you want to delete', article)
        this.once = true
        this.text = 'Click twice to confirm!'

        if (!this.twice) {
            if (this.wait) {
                return
            }

            this.wait = true

            setTimeout(() => {
                this.wait = false
                this.twice = true
                console.log('wait finish')
            }, 2000)

            return
        }

        // actually delete the item
        console.log('==> delete article', article)

        this.wait = false
        this.once = false
        this.twice = false
        this.text = undefined
    }
}
