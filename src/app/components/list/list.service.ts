import { Injectable } from '@angular/core'

@Injectable()
export class ListService {
    public constructor() {}

    public getListContent(): Array<string> {
        return ['Erster Eintrag', 'Der hier kommt als zweites', 'Und der zuletzt']
    }
}
