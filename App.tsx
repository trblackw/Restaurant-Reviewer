import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { View, Text, Button, TextInput } from 'react-native';

type Restaurant = { name: string; address: string };

const App: React.FC = (): JSX.Element => {
   const [restaurants, setRestaurants] = useState<Restaurant[]>([
      { name: 'React Cafe', address: '123 Anywhere St' },
      { name: 'Fancy Restaurant', address: '799 Main St' },
      { name: 'Taco Place', address: '234 Maple Rd' }
   ]);
   const [search, setSearch] = useState('');
   return (
      <Container>
         <StyledText>Restaurant Reviewer</StyledText>
         <Search value={search} onChangeText={(text: string) => setSearch(text)} />
         {restaurants
            .filter(restaurant => new RegExp(search, 'ig').test(restaurant.name))
            .map(({ name, address }, i: number): JSX.Element => (
               <RestaurantContainer key={i} even={i % 2 === 0}>
                  <RestaurantHeader>
                     <RestaurantTitle>
                        {i + 1}) {name}
                     </RestaurantTitle>
                     <RestaurantSubtitle>{address}</RestaurantSubtitle>
                  </RestaurantHeader>
                  <InfoButton title='info' onPress={() => {}}>
                     Info
                  </InfoButton>
               </RestaurantContainer>
            ))}
      </Container>
   );
};
const Container = styled(View)`
   flex: 1;
`;
const StyledText = styled(Text)`
   padding: 40px;
   font-size: 30px;
   text-align: center;
   color: #0066CC;
   font-weight: 300;
`;

const RestaurantContainer = styled(View)`
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   padding: 5px;
   background-color: ${({ even }: { even: boolean }) => (even ? 'hsl(0, 0%, 86%)' : 'transparent')}
`;

const RestaurantHeader = styled(View)`

`;

const Search = styled(TextInput).attrs({ placeholder: 'Search for a restaurant' })`
   margin: 0 auto 20px auto;
   padding: 5px;
   border: 1px solid hsl(0, 0%, 86%);
   border-radius: 20px;
   width: 60%;
`;

const RestaurantTitle = styled(Text)`
   color: #141414;
   margin: 5px;
`;

const RestaurantSubtitle = styled(Text)`
   color: hsl(0, 0%, 54%);
   margin-left: 5px;
`;

const InfoButton = styled(Button)`
   background-color: hsl(170, 29%, 43%);
   color: #eee;
   padding: 5px 7px;
   border-radius: 4px
`;

export default App;
