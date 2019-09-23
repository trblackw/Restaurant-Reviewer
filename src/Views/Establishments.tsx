import React, { useEffect, useContext, useState } from 'react';
import { ViewContainer, ViewHeader } from '../styledComponents/Layout';
import { Establishment } from '../types';
import { FlatList } from 'react-native';
import EstablishmentPreview from '../components/EstablishmentPreview';
import uuid from 'uuid';
import { LocationContext } from '../App';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from '../store';
import Search from '../components/Search';
import { fetchEstablishments } from '../actions';
import Loader from '../components/Loader';

const Establishments: React.FC = (): JSX.Element => {
   const dispatch = useDispatch(),
      establishments: Establishment[] = useSelector(({ establishments }: State) => establishments, shallowEqual),
      search: string = useSelector(({ search }: State) => search),
      userLocation = useContext(LocationContext),
      [loading, setLoading] = useState<boolean>(false);

   useEffect(
      () => {
         (async () => {
            if (userLocation) {
               setLoading(true);
               await dispatch(fetchEstablishments(userLocation));
               setLoading(false);
            }
         })();
      },
      [userLocation]
   );
   return (
      <ViewContainer>
         <ViewHeader>Establishments</ViewHeader>
         <Search />
         {loading ? (
            <Loader />
         ) : (
            <FlatList
               data={establishments.filter(establishment => new RegExp(search, 'ig').test(establishment.name))}
               renderItem={({ item, index }) => <EstablishmentPreview name={item.name} index={index} id={item.id} />}
               keyExtractor={() => uuid.v4()}
            />
         )}
      </ViewContainer>
   );
};

export default Establishments;
