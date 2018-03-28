import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { NavigationModule } from '../../components/navigation/navigation.module'

@NgModule({
    imports: [CommonModule, FormElementsModule, NavigationModule],
    declarations: [HomeComponent],
    exports: []
})
export class HomeModule {}
