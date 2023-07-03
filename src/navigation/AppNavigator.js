import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginScreen from '../components/LoginScreen';
// import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    //const user = useSelector((state) => state.auth.user);

    return (
        <NavigationContainer>
          <Stack.Navigator>
            {false ? (
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
        </NavigationContainer>
    );
};
    
export default AppNavigator;