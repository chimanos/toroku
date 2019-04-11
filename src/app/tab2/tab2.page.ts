import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab2',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Formulaire
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
          
        </ion-content>
    `,
    styles: [`

    `]
})

export class Tab2Page implements OnInit {

    CURRENT_SERVICE_KEY = 'currentService';

    constructor() {

    }

    ngOnInit(): void {

    }
}
