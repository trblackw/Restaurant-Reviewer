import { useContext } from 'react';
import { NavigationScreenProp, NavigationRoute, NavigationContext } from 'react-navigation';

export default <P>() => useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, P>;
