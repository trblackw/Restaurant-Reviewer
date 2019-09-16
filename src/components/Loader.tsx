import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader: React.FC = (): JSX.Element => (
   <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size='large' color='#0066CC' />
   </View>
);

export default Loader;
