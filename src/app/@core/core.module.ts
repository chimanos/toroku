import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceService} from './service/service.service';
import {HttpClientModule} from '@angular/common/http';
import {ResultService} from './service/result.service';

const SERVICES = [
    ServiceService,
    ResultService
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
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
