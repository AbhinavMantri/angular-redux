import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {Color} from '../models/Color';


@Injectable()
export class ColorService {
    constructor(private http: HttpClient) {};

    public getColors(): Observable<Array<Color>> {
        return this.http.get<Array<Color>>('./assets/db.json')
        .pipe(
            catchError((error: any) => Observable.throw(error.json()))
        );
    }
}