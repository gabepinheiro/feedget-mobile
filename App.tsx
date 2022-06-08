import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>

      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff'
  }
});
