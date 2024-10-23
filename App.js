import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={'#8145DB'} barStyle={'light-content'}/>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </>
  );
}
