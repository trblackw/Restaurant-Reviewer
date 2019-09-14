import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Text, TouchableHighlight } from 'react-native';
import { Restaurant } from '../types';
interface Props extends Restaurant {
   index: number;
   address: string;
}

const RestaurantPreview = ({ name, address, index }: Props): JSX.Element => {
   const [viewingInfo, setViewingInfo] = useState<boolean>(false);
   return (
      <Container even={index % 2 === 0}>
         <View>
            <Name>
               {index + 1}) {name}
            </Name>
            <Address>{address}</Address>
         {viewingInfo && (
            <Info>
               <Text>
                  Restaurant Info
               </Text>
            </Info>
         )}
         </View>
         <InfoButton onPress={() => setViewingInfo(!viewingInfo)} accessibilityLabel="Restaurant Info">
            <ButtonText>Info</ButtonText>
         </InfoButton>
      </Container>
   );
};

export default RestaurantPreview;

const Container = styled(View)`
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   padding: 5px;
   background-color: ${({ even }: { even: boolean }) => (even ? 'hsl(0, 0%, 86%)' : 'transparent')}
`;

const Name = styled(Text)`
   color: #141414;
   margin: 5px;
`;

const Address = styled(Text)`
   color: hsl(0, 0%, 54%);
   margin-left: 5px;
`;

const Info = styled(View)`
   margin: 10px auto;
   padding: 7px;
   border: 1px solid hsl(0, 0%, 54%);
   border-radius: 6px;
   background-color: #fff;
`

const InfoButton = styled(TouchableHighlight).attrs({ underlayColor: '#0066CC'})`
   padding: 3px 9px;
   border-radius: 20px;
   border: 1px solid #0066CC;
`;

const ButtonText = styled(Text)`
   color: #0066CC;
`