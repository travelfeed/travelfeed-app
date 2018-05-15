import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { LinkModule } from '../../../components/link/link.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { SignOutComponent } from './sign-out.component'

@NgModule({
    imports: [CommonModule, HeadlinesModule, LinkModule, FormElementsModule],
    declarations: [SignOutComponent],
})
export class SignOutPageModule {}
