import React, { useEffect, useContext } from 'react';
import { ViewContainer, ViewHeader } from '../styledComponents/Layout';
import { Collection } from '../types';
import { FlatList } from 'react-native';
import { LocationContext } from '../App';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from '../store';
import uuid from 'uuid';
import Search from '../components/Search';
import { fetchCollections } from '../actions';
import useNavigation from '../hooks/useNavigation';

const Collections: React.FC = (): JSX.Element => {
   const dispatch = useDispatch(),
   collections: Collection[] = useSelector(({ collections }: State) => collections, shallowEqual),
   search: string = useSelector(({ search }: State) => search),
   userLocation = useContext(LocationContext),
   navigation = useNavigation();

   useEffect(
      () => {
         if (userLocation) {
            dispatch(fetchCollections(userLocation));
         }
      },
      [userLocation]
   );
   return (
      <ViewContainer>
         <ViewHeader>Collections</ViewHeader>
         <Search />
         {/* <FlatList
            data={establishments.filter(establishment => new RegExp(search, 'ig').test(establishment.name))}
            renderItem={({ item, index }) => <CollectionPreview name={item.name} index={index} />}
            keyExtractor={() => uuid.v4()}
         /> */}
      </ViewContainer>
   );
}

export default Collections;
