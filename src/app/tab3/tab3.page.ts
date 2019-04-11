import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../@core/service/service.service';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-tab3',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Résultats
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-text *ngIf="!isServiceSelected()" class="no-result" color="primary">
                <h1><b>Please, select service for see the results. </b></h1>
            </ion-text>
            <div *ngIf="isServiceSelected()">
                <div class="result-container" *ngFor="let result of results$ | async">
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Je sais pas quoi mettre</ion-card-subtitle>
                            <ion-card-title>Nom Prenom</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Content
                        </ion-card-content>
                    </ion-card>
                </div>
            </div>
        </ion-content>
    `,
    styles: [`

    `]
})
export class Tab3Page implements OnInit {

    results$: Observable<Result[]>;
    currentServiceName: string;

    CURRENT_SERVICE_KEY = 'currentService';

    constructor(private serviceService: ServiceService, private storage: Storage) {

    }

    ngOnInit(): void {
        this.storage.get(this.CURRENT_SERVICE_KEY).then((serviceName) => {
            this.currentServiceName = serviceName;
        });
    }

    isServiceSelected(): boolean {
        if (this.currentServiceName != null) {
            return true;
        } else {
            return false;
        }
    }
}
