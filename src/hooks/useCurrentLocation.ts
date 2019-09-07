import { useState, useEffect } from 'react';
import { GeolocationReturnType } from 'react-native';

type Coords = Partial<GeolocationReturnType>;

export default (): Coords | null => {
   const [location, setLocation] = useState<Coords | null>(null);

   const geolocationAPI = (options = {}): Promise<GeolocationReturnType> => {
      return new Promise((resolve, reject) => {
         navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
   };

   useEffect(() => {
      (async () => {
         if (navigator) {
            try {
               const { coords } = await geolocationAPI();
               setLocation({ lat: coords.latitude, lng: coords.longitude } as Partial<Coords>);
            } catch (error) {
               console.error(error);
               setLocation(null);
            }
         }
      })();
   }, []);

   return location;
};
