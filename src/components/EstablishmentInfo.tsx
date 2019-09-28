import React, { useEffect, useState, useContext } from 'react';
import useNavigation from '../hooks/useNavigation';
import { NavParams, Establishment, SearchResults } from '../types';
import { ViewContainer, ViewHeader } from '../styledComponents/Layout';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store';
import Loader from './Loader';
import { fetchAllRelatedEstablishments } from '../actions';
import { LocationContext } from '../App';

const EstablishmentInfo: React.FC = (): JSX.Element => {
   const navigation = useNavigation<{ establishmentId: string }>(),
      establishments: Establishment[] = useSelector(({ establishments }: State) => establishments),
      searchResults: SearchResults | {} = useSelector(({ search_results }: State) => search_results),
      dispatch = useDispatch(),
      [selectedEstablishment, setSelectedEstablishment] = useState<Establishment | undefined>(undefined),
      userLocation = useContext(LocationContext),
      [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      setLoading(true);
      (async () => {
         const establishmentId: string | null = navigation.getParam(NavParams.establishmentId);
         if (!establishmentId) {
            return setLoading(false);
         }
         userLocation && (await dispatch(fetchAllRelatedEstablishments([userLocation, { establishment_type: establishmentId }])));
         console.log('TCL: searchResults', searchResults);
         await setSelectedEstablishment(establishments.find(({ id }) => id === establishmentId));
         setLoading(false);
      })();
   }, []);

   return loading ? (
      <Loader />
   ) : selectedEstablishment ? (
      <ViewContainer>
         <ViewHeader>{selectedEstablishment.name}</ViewHeader>
         <Text>ESTABLISHMENT INFO</Text>
      </ViewContainer>
   ) : (
      <ViewContainer>
         <Text>We weren't able to get any info on that establishment!</Text>
      </ViewContainer>
   );
};

export default EstablishmentInfo;
