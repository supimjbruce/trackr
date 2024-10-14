import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const firstTrackrApp = () => {

    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.playerOne}>{yourLifeTotal}</Text>

            <View style={styles.yourLifeButtons}>
                <Button
                onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
                title="Tap to gain life!"
                /*This is a button that will gain you life.
                Need to make a button to subtract life */
                />

                <Button
                    onPress={() => setYourLifeTotal(yourLifeTotal - 1)}
                    title="Tap to lose life!"
                />
            </View>
            
            <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>

            <View style={styles.opponentsLifeButtons}>
                <Button
                    onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                    title="Tap to gain life!"
                /*This is a button that will gain your opponent life.
                Need to make a button to subtract life */
                />

                <Button
                    onPress={() => setOpponentsLifeTotal(opponentsLifeTotal - 1)}
                    title="Tap to lose life!"
                />
            </View>
        </View>
    </View>
    );
};

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

    yourLifeButtons: {
      flexDirection: 'row',
  },

  opponentsLifeButtons: {
    flexDirection: 'row',
},
});

export default firstTrackrApp;
