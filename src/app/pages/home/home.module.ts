import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { ButtonModule } from '../../components/button/button.module'

@NgModule({
    imports: [CommonModule, NavigationModule, ButtonModule],
    declarations: [HomeComponent],
    exports: []
})
export class HomeModule {}
