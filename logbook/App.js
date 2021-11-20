/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import TabNavigation from './navigation/tabNavigation'

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
