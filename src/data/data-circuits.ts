import { F1 } from './data-source';
import { paginationOptions } from '../lib/utils';

export class CircuitsData extends F1 {
    constructor() {
        super();
    }

    async getCirtuis(pageElements: number = -1, page:number = 1) {
        if (pageElements === -1) {
            return await this.get('circuits.json?limit=1000', {
                cacheOptions: { ttl: 60}
            });
        }

        return await this.get(`circuits.json?${ paginationOptions(pageElements, page) }`, {
            cacheOptions: { ttl: 60}
        });
    }
}