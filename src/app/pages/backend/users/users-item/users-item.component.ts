import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { User } from '../typings'

@Component({
    selector: 'cmp-users-item',
    templateUrl: './users-item.component.html',
    styleUrls: ['./users-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersItemComponent {
    @Input() public user: User

    public once: boolean = false

    public twice: boolean = false

    public wait: boolean = false

    public text: string

    public constructor() {}

    public delete(user): void {
        console.log('==> you want to delete', user)
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
        console.log('==> delete article', user)

        this.wait = false
        this.once = false
        this.twice = false
        this.text = undefined
    }
}
