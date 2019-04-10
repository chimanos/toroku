import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Injectable()
export class ServiceService {

    constructor(private http: HttpClient) {

    }

    getServices(): Observable<ServiceData[]> {
        return this.http.get<Service>('./assets/service.json').pipe(
            flatMap(service => {
                return new Observable(emitter => {
                    emitter.next(service.services);
                });
            })
        );
    }

    /*
        For a better way to get the logo of the service, need to check if the element contain image url or not
     */
    getServiceLogoUrl(service: ServiceData): string {
        let logoUrl = null;
        service.elements.forEach(function (value: ServiceElement) {
            if (value.type === 'image') {
                logoUrl = value.value[0];
            }
        });
        return logoUrl;
    }
}
