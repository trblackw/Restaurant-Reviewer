import React from 'react';
import styled from 'styled-components'
import { TouchableHighlight, Text } from 'react-native';

interface Props {
   onPress: () => void;
   label: string;
   children: string;
}

const InfoButton: React.FC<Props> = ({ onPress, label, children }): JSX.Element => {
   return (
      <Button onPress={onPress} accessibilityLabel={label}>
         <ButtonText>
            {children}
         </ButtonText>
      </Button>
   );
}

export default InfoButton;


const Button = styled(TouchableHighlight).attrs({ underlayColor: '#0066CC'})`
   padding: 3px 9px;
   border-radius: 20px;
   border: 1px solid #0066CC;
`;

const ButtonText = styled(Text)`
   color: #0066CC;
`