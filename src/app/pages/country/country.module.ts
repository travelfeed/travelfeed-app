import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { FooterModule } from './../../components/footer/footer.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { HomebuttonModule } from '../../components/homebutton/homebutton.module'
import { ContainerModule } from '../../components/container/container.module'
import { CountryComponent } from './country.component'
import { CountryService } from './country.service'

@NgModule({
    imports: [SharedModule, FooterModule, NavigationModule, HomebuttonModule, ContainerModule],
    declarations: [CountryComponent],
    exports: [CountryComponent],
    providers: [CountryService],
})
export class CountryModule {}
