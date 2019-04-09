import {Component} from '@angular/core';

@Component({
    selector: 'app-tabs',
    template: `
        <ion-tabs>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1">
                    <ion-icon name="book"></ion-icon>
                    <ion-label>Service</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab2">
                    <ion-icon name="list-box"></ion-icon>
                    <ion-label>Formulaire</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab3">
                    <ion-icon name="apps"></ion-icon>
                    <ion-label>Résultat</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab4">
                    <ion-icon name="contacts"></ion-icon>
                    <ion-label>Devs</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    `
})
export class TabsPage {
}
