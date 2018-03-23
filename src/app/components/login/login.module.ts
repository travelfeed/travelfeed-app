import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconModule } from '../icon/icon.module'
import { LoginComponent } from './login.component'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { ButtonModule } from '../button/button.module'
import { FormInputModule } from '../../components/form-input/form-input.module'

@NgModule({
    imports: [CommonModule, IconModule, HeadlinesModule, ButtonModule, FormInputModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {}
