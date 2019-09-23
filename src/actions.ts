import * as constants from './constants';
import * as types from './types';
import { Dispatch } from 'redux';
import http, { EndPoints } from './http';
/**
 * @ThunkWithArgs
 * <typdefs for params, typedefs for payload>
 * @ThunkNoArgs
 * <typedefs for payload>
 * --------------------------------------------
 * 2 separate types are used to avoid unnecessary null checks for actionCreator args
 */

 //Note to anyone that's not me -- I realize the TypeScript chaos makes these actions a bit hard to read. I'm still learning how best to use generics in ways that are both helpful and _relatively_ readable ¯\_(ツ)_/¯

export const fetchEstablishments: types.ThunkWithArgs<types.Coordinates, types.Establishment[]> = userLocation => async (
   dispatch: Dispatch
) => {
   const { latitude, longitude } = userLocation;
   const establishments = await http<{ establishment: types.Establishment }[]>(EndPoints.establishments, { latitude, longitude });

   return dispatch({ type: constants.FETCH_ESTABLISHMENTS, payload: establishments.map(({ establishment }) => establishment) });
};

export const fetchCuisines: types.ThunkWithArgs<types.Coordinates, types.Cuisine[]> = userLocation => async (dispatch: Dispatch) => {
   const { latitude, longitude } = userLocation;
   const cuisines = await http<{ cuisine: types.Cuisine }[]>(EndPoints.cuisines, { latitude, longitude });

   return dispatch({ type: constants.FETCH_CUISINES, payload: cuisines.map(({ cuisine }) => cuisine) });
};

export const fetchCollections: types.ThunkWithArgs<types.Coordinates, types.Collection[]> = userLocation => async (dispatch: Dispatch) => {
   const { latitude, longitude } = userLocation;
   const collections = await http<{ collection: types.Collection }[]>(EndPoints.collections, { latitude, longitude });

   return dispatch({ type: constants.FETCH_COLLECTIONS, payload: collections.map(({ collection }) => collection) });
};

export const fetchAllRelatedEstablishments: types.ThunkWithArgs<
   [types.Coordinates, { establishment_type: string | number }],
   types.SearchResults
> = ([userLocation, establishmentId]) => async (dispatch: Dispatch) => {
   const { latitude, longitude } = userLocation;
   console.log("TCL: latitude", latitude)
   console.log("TCL: longitude", longitude)
   const searchResults = await http<types.SearchResults>(EndPoints.search, { latitude, longitude, establishment_type: establishmentId });
   console.log("TCL: searchResults", searchResults)

   return dispatch({ type: constants.SET_SEARCH_RESULTS, payload: searchResults });
};
