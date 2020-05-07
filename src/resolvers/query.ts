import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_:void, __:any, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async recesByYear(_:void, { year }, { dataSources }) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        } 
        
    }
};

export default query;