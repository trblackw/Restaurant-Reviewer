import useCurrentLocation from './hooks/useCurrentLocation';
import { Coordinates } from './types';

export enum EndPoints {
   categories = 'categories',
   cities = 'cities',
   collections = 'collections',
   cuisines = 'cuisines',
   establishments = 'establishments',
   location_details = 'location_details',
   locations = 'locations',
   daily_menu = 'daily_menu',
   restaurant = 'restaurant',
   reviews = 'reviews',
   search = 'search'
}

const locationBasedEndpoints = [EndPoints.collections, EndPoints.cuisines, EndPoints.establishments, EndPoints.cities, EndPoints.search];

export default async <T>(endpoint: EndPoints, params?: Partial<Coordinates>): Promise<T> => {
   let _url: string = `https://developers.zomato.com/api/v2.1/${endpoint}?`;
   // append user coordinates if location-based endpoint
   if (locationBasedEndpoints.indexOf(endpoint) > -1 && params) {
      //Todo: handle params other than lat and lng in url
      _url = _url.concat(`lat=${params.latitude}&lon=${params.longitude}`);
   }
   return new Promise(async resolve => {
      const response = await fetch(_url, {
         headers: { 'Content-Type': 'application/json', 'X-Zomato-API-Key': 'b80a51fb71c77dec30df59dff753eda5' }, method: 'GET'
      });
      const json = await response.json();
      resolve(json[endpoint]);
   })
};
