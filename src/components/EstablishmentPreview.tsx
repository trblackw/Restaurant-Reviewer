import React from 'react';
import { Establishment, Views } from '../types';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import { PreviewContainer } from '../styledComponents/Layout';
import InfoButton from './InfoButton';
import useNavigation from '../hooks/useNavigation';

interface Props extends Establishment {
   index: number;
}
const EstablishmentPreview: React.FC<Props> = ({ name, index, id }) => {
   const navigation = useNavigation();
   return (
      <PreviewContainer even={index % 2 === 0}>
         <View>
            <Name>{name}</Name>
         </View>
         <InfoButton label="Establishment Info" onPress={() => navigation.navigate(Views.EstablishmentInfo, { establishmentId: id })}>Info</InfoButton>
      </PreviewContainer>
   );
};

export default EstablishmentPreview;

const Name = styled(Text)`
   color: #141414;
   margin: 5px;
`;
