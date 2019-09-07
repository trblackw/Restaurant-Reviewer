import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { View, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import { ViewHeader } from './styledComponents/Layout';
import { Restaurant } from './types';
import RestaurantPreview from './components/RestaurantPreview';
import useCurrentLocation from './hooks/useCurrentLocation';

const App: React.FC = (): JSX.Element => {
   // const userLocation = useCurrentLocation()
   const [restaurants, setRestaurants] = useState<Restaurant[]>([
      { name: 'React Cafe', address: '123 Anywhere St' },
      { name: 'Fancy Restaurant', address: '799 Main St' },
   ]);
   const [search, setSearch] = useState('');

   // useEffect(() => {
   //    (async () => {
   //       // fetch()
   //    })();
   // }, [])
   return (
      <Container>
         <ViewHeader>Restaurant Reviewer</ViewHeader>
         <Search value={search} onChangeText={(text: string) => setSearch(text)} />
         <FlatList
            data={restaurants.filter(restaurant => new RegExp(search, 'ig').test(restaurant.name))}
            renderItem={({ item, index }) => <RestaurantPreview name={item.name} address={item.address} index={index} />} keyExtractor={() => String(Math.random().toFixed(5))}
         />
      </Container>
   );
};
const Container = styled(View)`
   flex: 1;
`;

const StyledScrollView = styled(ScrollView).attrs({
   contentContainerStyle: () => ({ paddingTop: '5%' })
})`
`;

const Search = styled(TextInput).attrs({ placeholder: 'Search for a restaurant' })`
   margin: 0 auto 5px auto;
   padding: 5px;
   border: 1px solid hsl(0, 0%, 86%);
   border-radius: 20px;
   width: 60%;
`;

export default App;
