import React, { Fragment } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: React.FC = (): JSX.Element => {
   return (
      <Fragment>
         <Container>
            <StyledText>Woohoo react native!</StyledText>
         </Container>
      </Fragment>
   );
};

const Container = styled(View)`
   display: flex;
   background: #eee;
   justify-content: center;
   align-items: center;
   text-align: center;
`;

const StyledText = styled(Text)`
   color: #898;
   margin: 20%;
`;

const styles = StyleSheet.create({
   scrollView: {
      backgroundColor: Colors.lighter
   },
   engine: {
      position: 'absolute',
      right: 0
   },
   body: {
      backgroundColor: Colors.white
   },
   sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24
   },
   sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black
   },
   sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark
   },
   highlight: {
      fontWeight: '700'
   },
   footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right'
   }
});

export default App;
