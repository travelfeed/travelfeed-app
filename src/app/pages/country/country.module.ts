import { FooterModule } from './../../components/footer/footer.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CountryComponent } from './country.component'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { HomebuttonModule } from '../../components/homebutton/homebutton.module'
import { ContainerModule } from '../../components/container/container.module'

@NgModule({
    imports: [CommonModule, FooterModule, NavigationModule, HomebuttonModule, ContainerModule],
    declarations: [CountryComponent],
    exports: [CountryComponent],
})
export class CountryModule {}
