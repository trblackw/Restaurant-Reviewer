import { Coordinates, Establishment } from './types';
import * as constants from './constants';
import { Dispatch } from 'redux';
import http, { EndPoints } from './http';

export const fetchEstablishments = async (userLocation: Coordinates) => {
   const { latitude, longitude } = userLocation;
   const establishments = await http<{ establishment: Establishment }[]>(EndPoints.establishments, { latitude, longitude });

   return (dispatch: Dispatch) =>
      dispatch({ type: constants.FETCH_ESTABLISHMENTS, payload: establishments.map(({ establishment }) => establishment) });
};
