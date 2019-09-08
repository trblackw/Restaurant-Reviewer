/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
console.disableYellowBox = true;
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration({ skipPermissionRequests: false, authorizationLevel: 'always' });

AppRegistry.registerComponent(appName, () => App);
