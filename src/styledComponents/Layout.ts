import styled from 'styled-components';
import { Text } from 'react-native';

export const ViewHeader = styled(Text)`
   padding: 40px;
   font-size: 30px;
   text-align: center;
   color: ${({ color = '#0066CC' }: { color?: string }) => color};
   font-weight: 300;
`;
