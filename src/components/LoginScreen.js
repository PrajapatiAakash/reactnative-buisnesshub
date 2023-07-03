import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/authActions';

const LoginScreen = () => {
    // const dispatch = useDispatch();
    // const error = useSelector((state) => state.auth.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //dispatch(login(email, password));
    };

    return (
        <View style={'flex itemsCenter justifyCenter'}>
          <TextInput
            style={'wFull h40 border m4 p2'}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={'wFull h40 border m4 p2'}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {/* {error && <Text style={'bgRed500 textWhite mb4 p2'}>{error}</Text>} */}
          <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;