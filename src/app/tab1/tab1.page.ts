import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../@core/service/service.service';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-tab1',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Services
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div class="service-container" *ngFor="let service of services$ | async">
                <ion-card class="service-content-container">
                    <div class="service-container">
                        <div class="service-infos-container">
                            <img class="service-logo" src="{{ getServiceLogoUrl(service) }}"/>
                            <ion-text class="service-title" color="primary">
                                <h1><b>{{ service.title }}</b></h1>
                                <p *ngIf="isCurrentService(service)">This is the current selected service.</p>
                            </ion-text>
                        </div>
                        <div class="service-button-container">
                            <ion-button class="service-button" color="primary" (click)="select(service)">Selectionner</ion-button>
                        </div>
                    </div>
                </ion-card>
            </div>
        </ion-content>
    `,
    styles: [`
        .service-content-container {
            height: 150px;
            padding: 10px;
        }

        .service-container {
            position: relative;
        }

        .service-infos-container {
            width: 300px;
            height: 130px;
            position: relative;
            float: left;
        }

        .service-button-container {
            width: 200px;
            height: 130px;
            position: relative;
            float: right;
        }

        .service-title {
            float: right;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            margin-left: 15px;
        }

        .service-logo {
            width: 130px;
            height: 130px;
            float: left;
        }

        .service-button {
            float: right;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
    `]
})
export class Tab1Page implements OnInit {

    services$: Observable<ServiceData[]>;
    currentServiceName: string;

    CURRENT_SERVICE_KEY = 'currentService';

    constructor(private serviceService: ServiceService, private storage: Storage) {

    }

    ngOnInit(): void {
        this.services$ = this.serviceService.getServices();
        this.storage.get(this.CURRENT_SERVICE_KEY).then((serviceName) => {
            this.currentServiceName = serviceName;
        });
    }

    getServiceLogoUrl(service: ServiceData): string {
        const logoUrl = this.serviceService.getServiceLogoUrl(service);

        if (logoUrl != null) {
            return logoUrl;
        } else {
            return './assets/nologo.png';
        }
    }

    select(service: ServiceData) {
        this.storage.set(this.CURRENT_SERVICE_KEY, service.title);
        this.currentServiceName = service.title;
        console.log('Current service is set to:', service.title);
    }

    isCurrentService(service: ServiceData): boolean {
        if (service.title === this.currentServiceName) {
            return true;
        } else {
            return false;
        }
    }
}
