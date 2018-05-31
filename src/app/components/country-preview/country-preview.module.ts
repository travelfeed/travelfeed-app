import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CountryPreviewComponent } from './country-preview.component'

@NgModule({
    imports: [CommonModule],
    declarations: [CountryPreviewComponent],
    exports: [CountryPreviewComponent],
})
export class CountryPreviewModule {}
