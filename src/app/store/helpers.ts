import { Action } from '@ngrx/store'
import { ofType } from '@ngrx/effects'
import { Observable, ObservableInput, pipe } from 'rxjs'
import { exhaustMap, withLatestFrom } from 'rxjs/operators'

type Callback = (action: Action) => ObservableInput<{}>
type CallbackWithState<T> = ([action, state]: [Action, T]) => ObservableInput<{}>

export function fromActionType(type, callback: Callback)
export function fromActionType<T>(type, observable: Observable<T>, callback: CallbackWithState<T>)
export function fromActionType<T>(
    type,
    observableOrCallback: Observable<T> | Callback,
    callback?: CallbackWithState<T>,
) {
    if (typeof observableOrCallback === 'function') {
        return pipe(ofType(type), exhaustMap(observableOrCallback))
    }

    return pipe(ofType(type), withLatestFrom(observableOrCallback), exhaustMap(callback))
}
