import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../@core/service/service.service';
import {Observable} from 'rxjs';

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
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>{{ service.title }}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <img class="service-logo" src="{{ getServiceLogoUrl(service) }}"/>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    `,
    styles: [`
        .welcome-card ion-img {
            max-height: 35vh;
            overflow: hidden;
        }
        
        .service-logo {
            height: 70px;
            width: 70px;
        }
    `]
})
export class Tab1Page implements OnInit {

    services$: Observable<ServiceData[]>;

    constructor(private serviceService: ServiceService) {

    }

    ngOnInit(): void {
        this.services$ = this.serviceService.getServices();
    }

    getServiceLogoUrl(service: ServiceData): string {
        const logoUrl = this.serviceService.getServiceLogoUrl(service);

        if (logoUrl != null) {
            return logoUrl;
        } else {
            return './assets/nologo.png';
        }
    }
}
