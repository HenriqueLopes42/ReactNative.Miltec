import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/index';
import Main from './src/components/Main/index';

export default function App() {
  return (
    <View style={styles.container}>
     <Title />
     <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textConfg: {
    fontSize: 30,
  },
});
