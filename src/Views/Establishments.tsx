import React, { useEffect, useContext } from 'react';
import { ViewContainer, ViewHeader } from '../styledComponents/Layout';
import { Establishment } from '../types';
import { FlatList } from 'react-native';
import EstablishmentPreview from '../components/EstablishmentPreview';
import uuid from 'uuid';
import { LocationContext } from '../App';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from '../store';
import * as actions from '../actions';

const Establishments: React.FC = (): JSX.Element => {
   const dispatch = useDispatch();
   const establishments: Establishment[] = useSelector(({ establishments }: State) => establishments, shallowEqual);
   const search: string = useSelector(({ search }: State) => search, shallowEqual);
   const userLocation = useContext(LocationContext);

   useEffect(
      () => {
         if (userLocation) {
            dispatch(actions.fetchEstablishments(userLocation));
         }
      },
      [userLocation]
   );
   return (
      <ViewContainer>
         <ViewHeader>Establishments</ViewHeader>
         <FlatList
            data={establishments.filter(establishment => new RegExp(search, 'ig').test(establishment.name))}
            renderItem={({ item, index }) => <EstablishmentPreview name={item.name} index={index} />}
            keyExtractor={() => uuid.v4()}
         />
      </ViewContainer>
   );
};

export default Establishments;
