import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'; 
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2500); //this makes sure user can see splash screen

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* If user is not logged in, show LoginScreen */}
        {!isLoggedIn ? (
          <><Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen><Stack.Screen name="Signup" component={SignupScreen} /></> 
        ) : (
          <>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

