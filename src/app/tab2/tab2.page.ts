import {Component} from '@angular/core';
import {ServiceService} from '../@core/service/service.service';
import {JsonParser} from '../@core/tools/jsonParser.tools';
import {Observable, Subscription} from 'rxjs';
import {Storage} from '@ionic/storage';
import {flatMap} from 'rxjs/operators';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-tab2',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Tab Two
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content [innerHTML]="form">
        </ion-content>
    `,
    styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
    form$: Observable<string>;
    observer: Subscription;
    form: SafeHtml;
    CURRENT_SERVICE_KEY = 'currentService';

    constructor(private serviceService: ServiceService, private jsonParser: JsonParser,
                private storage: Storage, private sanitizer: DomSanitizer) {
        this.form = undefined;
    }

    getCurrentService(): Observable<string> {
        return new Observable<string>(emitter => {
            this.storage.get(this.CURRENT_SERVICE_KEY).then((serviceName) => {
                emitter.next(serviceName);
                emitter.complete();
            });
        });
    }

    ionViewWillEnter() {
        console.log('Page enter');
        this.form$ = this.serviceService.getServices().pipe(
            flatMap(services => {
                return this.getCurrentService().pipe(
                    flatMap(currentServiceName => {
                        return this.jsonParser.getForm(services.find(service => {
                            return service.title === currentServiceName;
                        }));
                    })
                );
            })
        );

        this.observer = this.form$.subscribe(
            (result) => {
                this.form = this.sanitizer.bypassSecurityTrustHtml(result);
            },
            (error) => {
                console.error('Error', error);
            },
            () => {
                console.log('Subscription complete');
            }
        );
    }

    ionViewDidLeave() {
        console.log('Page leave');
        if (this.observer != null) {
            this.observer.unsubscribe();
        }
    }
}
