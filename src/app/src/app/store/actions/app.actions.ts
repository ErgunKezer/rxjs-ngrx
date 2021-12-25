import { Action } from '@ngrx/store';

export class AppActions implements Action {
    type: string;
    payload: any;
    constructor(type: string) {
        this.type = type;
        this.payload = 'payload';
    }
}
