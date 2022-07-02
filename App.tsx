import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageScreen from "./screens/ImageScreen";
import {Icon} from "react-native-elements";
import {Session} from "@supabase/supabase-js";
import {supabase} from "./lib/supabase";
import Auth from "./components/Auth";
import {RootStackParamList} from "./types/RootStackParams";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])


    return (
        <NavigationContainer>
            {session && session.user
                ?
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
                    {/*<Account key={session.user.id} session={session} />*/}

                </Stack.Navigator>
                :
                <Auth/>
            }


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