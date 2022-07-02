import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function NewScreen () {
    return (
        <View style={styles.container}>
            <Text
                style={styles.body}
            >This the <Text style={styles.importantText}>home Screen</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        textAlign: 'center',

    },
    importantText:{
        fontWeight: 'bold',

    },

});