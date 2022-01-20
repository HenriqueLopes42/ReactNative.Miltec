import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title/index';

export default function App() {
  return (
    <View style={styles.container}>
     <Title />
     <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
    paddingTop: 80,
    
  },
});
