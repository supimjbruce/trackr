import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

/*Need to install and learn the React Native VSCode Extensions
so I can start testing this code better -.j.*/

const firstTrackrApp = () => {

    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.playerOne}>{yourLifeTotal}</Text>
            <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>

            <Button
                onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
                title="Tap to gain life!"
            /*This is a button that will gain you life.
            Need to make a button to subtract life */
            />

            <Button
                onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                title="Tap to gain life!"
            /*This is a button that will gain you life.
            Need to make a button to subtract life */
            />
        </View>
    </View>
    );
};

/*Things to do: -writing this on a plane
1. Need to make buttons to Subtract Life
2. Need to test styles/style the app
3. Keep learning and creating!
*/

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: "skyblue",
        alignItems: "center",
    },

    playerOne: {
        fontSize: 100,
        color: "black",
        alignSelf: "center",
    },

    playerTwo: {
      fontSize: 100,
      color: "red",
      alignSelf: "center",
  },
});

export default firstTrackrApp;
