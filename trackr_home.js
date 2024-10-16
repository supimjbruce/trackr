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

            <View style={styles.yourLifeButtons}>
                <Button
                onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
                title="Tap to gain life!"
                color='white'
                />
                    <Button
                    style={styles.buttonPadding}
                    title="     "
                    />
                <Button
                    onPress={() => setYourLifeTotal(yourLifeTotal - 1)}
                    title="Tap to lose life!"
                    color='white'
                />
            </View>
            
            <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>

            <View style={styles.opponentsLifeButtons}>
                <Button
                    onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                    title="Tap to gain life!"
                    color='white'
                />
                    <Button
                    style={styles.buttonPadding}
                    title="     "     
                    />
                <Button
                    onPress={() => setOpponentsLifeTotal(opponentsLifeTotal - 1)}
                    title="Tap to lose life!"
                    color='white'
                />
            </View>
        </View>
    </View>
    );
};

/*Things to do: -writing this on a plane
1. Need to make buttons to Subtract Life -> DONE!
2. Need to test styles/style the app
3. Keep learning and creating!
*/

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
        paddingBottom: 100,
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
        backgroundColor: '#595959',
        padding: 10,
        borderRadius: 5,
  },

    opponentsLifeButtons: {
        flexDirection: 'row',
        backgroundColor: '#595959',
        padding: 10,
        borderRadius: 5,
  },

    buttonPadding: {
      width: 15,
    }
});

export default firstTrackrApp;
