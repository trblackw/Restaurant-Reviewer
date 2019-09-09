import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

type Coordinates = { latitude: number, longitude: number };

export default (): Coordinates | null => {
   const [location, setLocation] = useState<Coordinates | null>(null);

   const onLocationChange = ({ coords }: { coords: Coordinates }) => {
      setLocation({
         latitude: coords.latitude,
         longitude: coords.longitude
      })
   }

   useEffect(() => {
      try {
         const watcher = Geolocation.watchPosition(onLocationChange);
         return () => {
            Geolocation.clearWatch(watcher)
         }
      } catch (error) {
         console.error(error);
      }
   }, [])

   return location;
};
