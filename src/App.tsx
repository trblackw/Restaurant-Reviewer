import React, { createContext } from 'react';
import { Coordinates, Views } from './types';
import useCurrentLocation from './hooks/useCurrentLocation';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './store';
//VIEWS
import Establishments from './Views/Establishments';
import EstablishmentInfo from './components/EstablishmentInfo';
import Cuisines from './Views/Cuisines';
import Collections from './Views/Collections';

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

const EstablishmentStack = createStackNavigator({
   [Views.Establishments]: { screen: Establishments },
   [Views.EstablishmentInfo]: { screen: EstablishmentInfo }
})

const Tabs = createBottomTabNavigator({
   [Views.Establishments]: { screen: EstablishmentStack },
[Views.Cuisines]: { screen: Cuisines },
   [Views.Collections]: { screen: Collections },
});
// @ts-ignore
const Navigation = createAppContainer(Tabs);
