import React, { createContext } from 'react';
import { Coordinates } from './types';
import useCurrentLocation from './hooks/useCurrentLocation';
import Establishments from './Views/Establishments';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './store';
import Cuisines from './Views/Cuisines';

export const LocationContext = createContext<Coordinates | null>(null);

export default function App (): JSX.Element {
   const userLocation = useCurrentLocation();

   return (
      <Provider store={store}>
         <LocationContext.Provider value={userLocation}>
            <Navigation />
         </LocationContext.Provider>
      </Provider>
   );
};

const Stack = createStackNavigator({
   Home: { screen: Establishments },
   Cuisines: { screen: Cuisines }
});

const Navigation = createAppContainer(Stack);
