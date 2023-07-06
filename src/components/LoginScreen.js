import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import tw from 'twrnc';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login(email, password));
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Image
                source={require('./../assets/images/logo.png')}
                style={tw`h-48 mb-6 w-4/5`}
            />

            <Text style={tw`text-2xl font-bold mb-6`}>Login</Text>

            <View style={tw`w-4/5 mb-4`}>
                <TextInput
                style={tw`border border-gray-400 rounded px-4 py-2`}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                />
            </View>

            <View style={tw`w-4/5 mb-4`}>
                <TextInput
                style={tw`border border-gray-400 rounded px-4 py-2`}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
            </View>

            <View style={tw`w-4/5 flex flex-row justify-between`}>
                <TouchableOpacity style={tw`bg-blue-500 rounded px-4 py-2`} onPress={handleLogin}>
                    <Text style={tw`text-white font-semibold text-lg`}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-green-500 rounded px-4 py-2`}>
                    <Text style={tw`text-white font-semibold text-lg`}>Register</Text>
                </TouchableOpacity>
            </View>
            {error && <Text style={tw`w-4/5 mt-4`}>{error}</Text>}
        </View>
    );
};

export default LoginScreen;