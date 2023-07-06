import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return (
        <NavigationContainer>
          <Stack.Navigator>
            {isLoggedIn ? (
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
    );
};
    
export default AppNavigator;