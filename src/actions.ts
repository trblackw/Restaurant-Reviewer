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
