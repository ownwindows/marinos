import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { Image, StyleSheet, Text, TouchableOpacity, Platform, View } from 'react-native';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#228CDB'
                        },
                        headerTintColor: '#fff'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        padding: 20,
        borderRadius: 5,

    },
    buttonText: {
        fontSize: 20,
        color: 'gray',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});