import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Components/Onboarding';
import Route from './Routes/Route';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" backgroundColor='#d9fce6' />
        <Route/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AC2681A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
