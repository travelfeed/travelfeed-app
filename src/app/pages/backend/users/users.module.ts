import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../../../app-routing.module'
import { UsersComponent } from './users.component'
import { UsersListComponent } from './users-list/users-list.component'
import { UsersDetailsComponent } from './users-details/users-details.component'
import { UsersService } from './users.service'

@NgModule({
    imports: [CommonModule, AppRoutingModule],
    declarations: [UsersComponent, UsersListComponent, UsersDetailsComponent],
    providers: [UsersService],
})
export class UsersModule {}
