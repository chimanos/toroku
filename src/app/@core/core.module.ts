import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from './service/service.service';

const SERVICES = [
    ServiceService
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ...SERVICES
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
