import React from 'react';
import { Establishment } from '../types';
import styled from 'styled-components'
import { Text } from 'react-native';
import { PreviewContainer } from '../styledComponents/Layout';

interface Props extends Partial<Establishment> {
   index: number;
}
const EstablishmentPreview: React.FC<Props> = ({ name, index }) => {
   return (
      <PreviewContainer even={index % 2 === 0}>
         <Name>{name}</Name>
      </PreviewContainer>
   );
}

export default EstablishmentPreview;

const Name = styled(Text)`
   color: #141414;
   margin: 5px;
`;