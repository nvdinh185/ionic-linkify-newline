import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiAuthService {

    constructor(public httpClient: HttpClient) { }

    getDynamicUrl(url: string) {
        return this.httpClient.get(url)
            .toPromise()
            .then(data => {
                let rtn: any;
                rtn = data;
                return rtn;
            });
    }
}