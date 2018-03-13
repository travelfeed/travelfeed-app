import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SignInPageComponent } from './sign-in-page.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [SignInPageComponent]
})
export class SignInPageModule {}
