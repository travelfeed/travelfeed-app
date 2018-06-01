import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { RegistrationComponent } from './registration.component'

@NgModule({
    imports: [SharedModule, HeadlinesModule, FormElementsModule],
    declarations: [RegistrationComponent],
})
export class RegistrationPageModule {}
