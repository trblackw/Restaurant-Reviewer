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

export default async <T>(endpoint: EndPoints, params?: any): Promise<T> => {
console.log("TCL: params", params)
   let _url: string = `https://developers.zomato.com/api/v2.1/${endpoint}?`;
   // append user coordinates if location-based endpoint
   if (locationBasedEndpoints.indexOf(endpoint) > -1 && params) {
      //Todo: handle params other than lat and lng in url
      _url = _url.concat(`lat=${params.latitude}&lon=${params.longitude}`);
   }
   if (Object.keys(params).length > 2) {
      //@ts-ignore
      _url = _url.concat(`&${Object.keys(params)[2]}=${Object.values(params)[2][Object.keys(params)[2]]}`)
   }
   console.log('_url', _url)
   return new Promise(async resolve => {
      const response = await fetch(_url, {
         headers: { 'Content-Type': 'application/json', 'X-Zomato-API-Key': 'b80a51fb71c77dec30df59dff753eda5' }, method: 'GET'
      });
      const json = await response.json();
      resolve(json[endpoint] ? json[endpoint] : json);
   })
};
