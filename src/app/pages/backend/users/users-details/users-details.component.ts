import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { takeWhile } from 'rxjs/operators'
import { User } from '../../../../store/users/user.model'
import { UsersState } from '../../../../store/users/users.reducer'
import { UsersAction, UsersActionTypes } from '../../../../store/users/users.action'

@Component({
    selector: 'cmp-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public user: User

    public userForm: FormGroup

    private alive: boolean = true

    public constructor(private formBuilder: FormBuilder, private store: Store<UsersState>) {}

    public ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            username: this.user.username,
            email: this.user.email,
            firstname: this.user.firstname,
            lastname: this.user.lastname,
        })

        this.userForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(values => {
            this.user = { ...this.user, ...values }
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const { firstChange, currentValue } = changes.user

        if (firstChange) {
            return
        }

        this.userForm.setValue({
            username: currentValue.username,
            email: currentValue.email,
            firstname: currentValue.firstname,
            lastname: currentValue.lastname,
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get username(): AbstractControl {
        return this.userForm.get('username')
    }

    public get email(): AbstractControl {
        return this.userForm.get('email')
    }

    public get firstname(): AbstractControl {
        return this.userForm.get('firstname')
    }

    public get lastname(): AbstractControl {
        return this.userForm.get('lastname')
    }

    public save(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.SAVE_USER,
            payload: this.user,
        })
    }

    public delete(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.DELETE_USER,
            payload: this.user,
        })
    }
}
