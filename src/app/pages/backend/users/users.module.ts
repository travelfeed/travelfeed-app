import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { AppRoutingModule } from '../../../app-routing.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { IconModule } from '../../../components/icon/icon.module'
import { UsersComponent } from './users.component'
import { UsersListComponent } from './users-list/users-list.component'
import { UsersItemComponent } from './users-item/users-item.component'
import { UsersDetailsComponent } from './users-details/users-details.component'
import { UsersService } from './users.service'

@NgModule({
    imports: [SharedModule, AppRoutingModule, FormElementsModule, HeadlinesModule, IconModule],
    declarations: [UsersComponent, UsersListComponent, UsersItemComponent, UsersDetailsComponent],
    providers: [UsersService],
})
export class UsersModule {}
