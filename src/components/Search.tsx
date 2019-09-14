import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as constants from '../constants';

const Search = () => {
   const dispatch = useDispatch();
   const [search, setSearch] = useState<string>("")
   return (
      <Container>
         <Input value={search} onChangeText={(value: string) => setSearch(value)}/>
         <Button title='search' onPress={() => dispatch({ type: constants.SET_SEARCH, payload: search })}>
            Search
         </Button>
      </Container>
   );
};

export default Search;

const Container = styled(View)`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

const Input = styled(TextInput).attrs({ placeholder: 'Search for a restaurant' })`
   margin: 0 auto 5px auto;
   padding: 5px;
   border: 1px solid hsl(0, 0%, 86%);
   border-radius: 20px;
   width: 60%;
`;
