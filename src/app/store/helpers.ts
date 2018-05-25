import { ofType } from '@ngrx/effects'
import { pipe } from 'rxjs'
import { exhaustMap } from 'rxjs/operators'

export function fromActionType(type, callback) {
    return pipe(ofType(type), exhaustMap(callback))
}
