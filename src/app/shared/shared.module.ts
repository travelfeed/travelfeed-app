import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ObjectKeysPipe } from './object-keys/object-keys.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [ObjectKeysPipe],
    exports: [ObjectKeysPipe]
})
export class SharedModule {}
