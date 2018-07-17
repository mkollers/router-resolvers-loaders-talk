import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { LanguagesService } from './languages.service';

@Injectable()
export class LanguagesResolver implements Resolve<Promise<any>> {
    constructor(
        private _languagesService: LanguagesService
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        return await this._languagesService.getAll().toPromise();
    }
}
