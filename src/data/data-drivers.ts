import { F1 } from './data-source';
import { checkYear } from '../lib/utils';

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(pageElements: number = -1, page:number = 1) {
        if (pageElements === -1) {
            return await this.get('drivers.json?limit=1000', {
                cacheOptions: { ttl: 60}
            });
        }

        const offset = (page - 1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${ limit }&offset=${ offset }`;
        return await this.get(`drivers.json?${ filter }`, {
            cacheOptions: { ttl: 60}
        });
    }

    async getDriversByYear(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/drivers.json'),{
            cacheOptions: { ttl: 60}
        });
        
    }
}