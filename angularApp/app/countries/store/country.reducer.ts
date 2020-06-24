import { CountryState } from './country.state';
import { Region } from './../../models/region';
import * as countryAction from './country.action';

export const initialState: CountryState = {
    regions: [
        { name: 'Asia', countries: [] },
        { name: 'Europe', countries: [] },
    ]
};

export function countryReducer(state = initialState, action: countryAction.Actions): CountryState {
    switch (action.type) {

        case countryAction.SELECTREGION_COMPLETE:
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region) : item;
                })
            });

        case countryAction.COLLAPSEREGION:
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region) : item;
                })
            });

        default:
            return state;

    }
}
