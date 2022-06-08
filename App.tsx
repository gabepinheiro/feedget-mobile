// import AppLoading from "expo-app-loading";

import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { theme } from './src/theme';
import { Widget }  from "./src/components/widget";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>

        <StatusBar
          style="light"
          backgroundColor='transparent'
          translucent
          />

      <Widget />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
