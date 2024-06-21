import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Splash/Splash';
import Onboard from './src/Component/Onboard';
import SignUp from './src/Component/SignUp';
import SignIn from './src/Component/SignIn';
import HomeExplore from './src/Component/Home/HomeExplore';
import HomeMarket from './src/Component/Home/HomeMarket';
import HomeDashboard from './src/Component/Home/HomeDashboard';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="HomeExplore" component={HomeExplore} options={{ headerShown: false }} />
        <Stack.Screen name="HomeMarket" component={HomeMarket} options={{ headerShown: false }} />
        <Stack.Screen name="HomeDashboard" component={HomeDashboard} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
