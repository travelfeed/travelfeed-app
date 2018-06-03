import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImpressumComponent } from './impressum.component'
import { HomebuttonModule } from '../../components/homebutton/homebutton.module'
import { ContainerModule } from '../../components/container/container.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FooterModule } from '../../components/footer/footer.module'

@NgModule({
    imports: [CommonModule, ContainerModule, HomebuttonModule, NavigationModule, FooterModule],
    declarations: [ImpressumComponent],
    exports: [ImpressumComponent],
})
export class ImpressumModule {}
