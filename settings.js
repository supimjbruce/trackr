import React from 'react';
import {View, Text} from 'react-native';

/*Whenever I learn Expo Router, I would like to use this as one of the bottom "pages" of the app.*/

const settingsPage = () => {
    
    return (
        <View>
            <Text style={styles.bigTitle}>Settings</Text>
        </View>
    ); /*I'm thinking of a simple settings page. Maybe one that has a button for light/dark mode, languages, stuff
    like that. I would also like to put socials/contact me at the bottom of this page.*/
};

const styles = StyleSheet.create ({
    bigTitle: {
        fontSize: 35,
        color: black,
    },
});

export default settingsPage;
