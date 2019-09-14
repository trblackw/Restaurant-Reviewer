import { useContext } from 'react';
import { NavigationScreenProp, NavigationRoute, NavigationContext } from 'react-navigation';

export default function useNavigation<P>() {
   return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, P>;
}
