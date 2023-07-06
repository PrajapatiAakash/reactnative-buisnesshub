import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {

    React.useEffect(() => {
    }, []);

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Image
                source={require('./../assets/images/logo.png')}
                style={tw`h-48 mb-6 w-4/5`}
            />
            <Text style={tw`text-2xl font-bold mb-6`}>Dashboard</Text>
        </View>
    );
};

export default HomeScreen;