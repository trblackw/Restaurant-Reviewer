import styled from 'styled-components';
import { Text, View } from 'react-native';

export const ViewContainer = styled(View)`
   flex: 1
`

export const ViewHeader = styled(Text)`
   padding: 40px;
   font-size: 30px;
   text-align: center;
   color: ${({ color = '#0066CC' }: { color?: string }) => color};
   font-weight: 300;
`;

export const PreviewContainer = styled(View)`
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 5px;
background-color: ${({ even }: { even: boolean }) => (even ? 'hsl(0, 0%, 86%)' : 'transparent')}
`;