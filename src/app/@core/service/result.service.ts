import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class ResultService {

    constructor(private storage: Storage) {

    }

    setResult(result: Result): void {
        this.storage.set(result.serviceName, result);
    }
}
