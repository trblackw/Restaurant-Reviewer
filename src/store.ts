import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import update from 'immutability-helper';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { EndPoints as StateKeys } from './http';
import * as APITypes from './types';
import * as constants from './constants';

const middleware = [thunk];

export interface State {
   [StateKeys.categories]: APITypes.Category[];
   [StateKeys.cities]: APITypes.City[];
   [StateKeys.collections]: APITypes.Collection[];
   [StateKeys.cuisines]: APITypes.Cuisine[];
   [StateKeys.daily_menu]: APITypes.DailyMenuItem[];
   [StateKeys.establishments]: APITypes.Establishment[];
   [StateKeys.location_details]: APITypes.LocationDetails | {};
   [StateKeys.locations]: APITypes.Location[];
   [StateKeys.restaurant]: APITypes.Restaurant | {};
   [StateKeys.reviews]: APITypes.Review[];
   [StateKeys.search]: string;
   search_results: APITypes.SearchResults | {};
}

const initialAppState: State = {
   [StateKeys.categories]: [],
   [StateKeys.cities]: [],
   [StateKeys.collections]: [],
   [StateKeys.cuisines]: [],
   [StateKeys.daily_menu]: [],
   [StateKeys.establishments]: [],
   [StateKeys.location_details]: {},
   [StateKeys.locations]: [],
   [StateKeys.restaurant]: {},
   [StateKeys.reviews]: [],
   [StateKeys.search]: '',
   search_results: {}
};

const appReducer = (state: State = initialAppState, { type, payload }: { type: string; payload: any }): State => {
   switch (type) {
      case constants.FETCH_CATEGORIES:
         return update(state, {
            [StateKeys.categories]: {
               $set: payload
            }
         });
      case constants.FETCH_CITIES:
         return update(state, {
            [StateKeys.cities]: {
               $set: payload
            }
         });
      case constants.FETCH_COLLECTIONS:
         return update(state, {
            [StateKeys.collections]: {
               $set: payload
            }
         });
      case constants.FETCH_CUISINES:
         return update(state, {
            [StateKeys.cuisines]: {
               $set: payload
            }
         });
      case constants.FETCH_DAILY_MENU:
         return update(state, {
            [StateKeys.daily_menu]: {
               $set: payload
            }
         });
      case constants.FETCH_ESTABLISHMENTS:
         return update(state, {
            [StateKeys.establishments]: {
               $set: payload
            }
         });
      case constants.FETCH_LOCATION_DETAILS:
         return update(state, {
            [StateKeys.location_details]: {
               $set: payload
            }
         });
      case constants.FETCH_LOCATIONS:
         return update(state, {
            [StateKeys.locations]: {
               $set: payload
            }
         });
      case constants.FETCH_RESTAURANT:
         return update(state, {
            [StateKeys.restaurant]: {
               $set: payload
            }
         });
      case constants.FETCH_REVIEWS:
         return update(state, {
            [StateKeys.reviews]: {
               $set: payload
            }
         });
      case constants.SET_SEARCH:
         return update(state, {
            [StateKeys.search]: {
               $set: payload
            }
         });
      case constants.SET_SEARCH_RESULTS:
         return update(state, {
            search_results: {
               $set: payload
            }
         });
      default:
         return state;
   }
};

export default createStore(appReducer, initialAppState, composeWithDevTools(applyMiddleware(...middleware)));
