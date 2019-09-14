import React, { useContext, useEffect } from 'react';
import { ViewContainer, ViewHeader } from '../styledComponents/Layout';
import { Cuisine } from '../types';
import { LocationContext } from '../App';
import { State } from '../store';
import { FlatList } from 'react-native';
import uuid from 'uuid';
import CuisinePreview from '../components/EstablishmentPreview';
import { fetchCuisines } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';

const Cuisines: React.FC = (): JSX.Element => {
   const cuisines: Cuisine[] = useSelector(({ cuisines }: State) => cuisines),
      userLocation = useContext(LocationContext),
      search: string = useSelector(({ search }: State) => search),
      dispatch = useDispatch();

   useEffect(
      () => {
         if (userLocation) {
            dispatch(fetchCuisines(userLocation));
         }
      },
      [userLocation]
   );

   return (
      <ViewContainer>
         <ViewHeader>Cuisines</ViewHeader>
         <Search />
         <FlatList
            data={cuisines.filter((cuisine: Cuisine) => new RegExp(search, 'ig').test(cuisine.cuisine_name))}
            renderItem={({ item, index }) => <CuisinePreview name={item.cuisine_name} index={index} />}
            keyExtractor={() => uuid.v4()}
         />
      </ViewContainer>
   );
};

export default Cuisines;
