import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {Image, StyleSheet, Text, TouchableOpacity, Platform, View} from 'react-native';
import React from 'react';
import ImageScreen from "./screens/ImageScreen";
import {Icon} from "react-native-elements";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={styles.header}
                initialRouteName="Home">
                <Stack.Screen
                    name="Finalist"
                    component={HomeScreen}
                    options={({navigation}) => ({
                        headerRight: () => (
                            <Icon
                                name="plus"
                                type="feather"
                                color="orange"
                                style={styles.headerIcon}
                                onPress={() => navigation.navigate('Image')}
                            />
                        )
                    })}
                />
                <Stack.Screen
                    name="Image"
                    component={ImageScreen}
                    options={styles.header}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header: {
        headerStyle: {
            backgroundColor: 'black',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Georgia',
            fontSize: 25,
            letterSpacing: 1,
        }
    },
    headerIcon: {
        marginRight: 10,
        color: 'white',

    }
});