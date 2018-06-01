import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { SignInComponent } from './sign-in.component'

@NgModule({
    imports: [SharedModule, HeadlinesModule, FormElementsModule],
    declarations: [SignInComponent],
})
export class SignInModule {}
