import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import Welcome from './screens/Welcome';
import './gesture-handler';
import RootStack from './navigators/RootStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export function App(){
  return (
    <GestureHandlerRootView>
          <RootStack/>
    </GestureHandlerRootView>
  );
}


export default App;
