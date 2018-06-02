import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'toLocale',
})
export class ToLocalePipe implements PipeTransform {
    public transform(value: string): any {
        return new Date(value).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }
}
