import {Component} from '@angular/core';

@Component({
    selector: 'app-tab4',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Développeurs
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>M2 TNSI FA</ion-card-subtitle>
                    <ion-card-title>Romain Pamart</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Leroy Merlin (Full Stack)
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>M2 TNSI FA</ion-card-subtitle>
                    <ion-card-title>Maxime Petit</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    OVH (Backend)
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>M2 TNSI FA</ion-card-subtitle>
                    <ion-card-title>Florent Berrez</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Inconnue
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>M2 TNSI FA</ion-card-subtitle>
                    <ion-card-title>Maxime Devallez</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Inconnue
                </ion-card-content>
            </ion-card>
            <div class="credit">
                <p class="text">Not develop with love.</p>
                <ion-icon name="heart-dislike"></ion-icon>
            </div>
        </ion-content>
    `,
    styles: [`
        .welcome-card ion-img {
            max-height: 35vh;
            overflow: hidden;
        }

        .credit {
            margin-top: 25px;
            text-align: center;
        }
    `]
})
export class Tab4Page {
}
