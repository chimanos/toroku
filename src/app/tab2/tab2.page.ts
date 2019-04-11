import {Component, OnInit, SecurityContext} from '@angular/core';
import {ServiceService} from '../@core/service/service.service';
import {JsonParser} from '../@core/tools/jsonParser.tools';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {flatMap} from 'rxjs/operators';
import {BrowserModule, DomSanitizer, SafeHtml} from '@angular/platform-browser'

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

export class Tab2Page implements OnInit {
    form$: Observable<string>;
    observer: any;
    form: SafeHtml
    CURRENT_SERVICE_KEY = 'currentService';

    constructor(private serviceService: ServiceService, private jsonParser: JsonParser, private storage: Storage, private sanitizer: DomSanitizer) {
      this.form = undefined
    }

    ngOnInit(): void {
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
          console.error("Error", error);
        },
        () => {
          console.log("Subscription complete");
        }
      )
    }

    ionViewDidLeave() {
      this.observer.unsubscribe(
        (result) => {
          console.log("unsubscribe done");
        },
        (error) => {
          console.error("Error", error);
        },
        () => {
          console.log("unsubscription complete");
        }
      )
    }

    getCurrentService(): Observable<string> {
        return new Observable<string>(emitter => {
            this.storage.get(this.CURRENT_SERVICE_KEY).then((serviceName) => {
                emitter.next(serviceName);
                emitter.complete();
            });
        });
    }

    logForm(): void {
      console.log("test")
    }
}
