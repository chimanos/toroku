import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceService {

    constructor(private http: HttpClient) {

    }

    getServices(): Observable<Service> {
        return this.http.get<Service>('./assets/service.json');
    }
}
