import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class JsonParser {

    constructor() {
    }

    getForm(service: ServiceData): Observable<string> {
        let form = '<form [formGroup]="subscribeForm" id="subscribe" #form="ngForm">';
        for (let i = 0; i < service.elements.length; i++) {
            const element = service.elements[i];
            switch (element.type.toLocaleLowerCase()) {
                case 'image':
                    form = `<ion-img style="width: 80px; height: 80px; margin-top: 20px; margin-left: auto; margin-right: auto;" src="${element.value[0]}"></ion-img>` + form;
                    break;
                case 'edit':
                    form += `<ion-item>
                  <ion-label>${element.value[0]}</ion-label>`;
                    if (element.mandatory) {
                        form += `<ion-input type="text" name="${element.value[0]}" placeholder="${element.value[0]}" value="${element.value[0]}" required></ion-input>`;
                    } else {
                        form += `<ion-input type="text" name="${element.value[0]}" placeholder="${element.value[0]}" value="${element.value[0]}"></ion-input>`;
                    }
                    form += `</ion-item>`;
                    break;
                case 'label':
                    if (element.mandatory) {
                        form += `<ion-label color="primary">${element.value[0]}</ion-label>`;
                    } else {
                        form += `<ion-label color="secondary">${element.value[0]}</ion-label>`;
                    }
                    break;
                case 'switch':
                    form += '<ion-item>';
                    if (element.value[0]) {
                        form += `<ion-checkbox slot="start" value="biff" checked></ion-checkbox>`;
                    } else {
                        form += `<ion-checkbox slot="start" value="biff"></ion-checkbox>`;
                    }
                    form += '</ion-item>';
                    break;
                case 'radiogroup':
                    form += `<ion-list>
                      <ion-radio-group>`;
                    element.value.forEach(radio => {
                        form += `<ion-item>
                          <ion-label>${radio}</ion-label>
                          <ion-radio value="${radio}"></ion-radio>
                        </ion-item>`;
                    });

                    form += `</ion-radio-group>
              </ion-list>`;
                    break;
                case 'button':
                    if (element.mandatory) {
                        form += `<ion-button color="primary">${element.value[0]}</ion-button>`;
                    } else {
                        form += `<ion-button color="secondary">${element.value[0]}</ion-button>`;
                    }
                    break;
                default:
                    form += 'Type not implemented: ' + element.type;
                    break;
            }
        }
        form += '<ion-button id="subscribeButton" (click)="logForm()">Subscribe</ion-button>';
        form += '</form>';
        return new Observable<string>(emitter => {
            emitter.next(form);
            emitter.complete();
        });
    }
}
