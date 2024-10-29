import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function ChooseStartingLifePopup() {
    const [startingLifeTotal, setStartingLifeTotal] = useState(0);
    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    const handleLifeUpdate = () => {
        setYourLifeTotal(startingLifeTotal);
        setOpponentsLifeTotal(startingLifeTotal);
    }; /*I still need help working on the logic of this section, to make the
    selected life total for startingLifeTotal the starting life total for
    both players.*/

    return (
        <View style={styles.container}>
            <Text style={styles.startingLifeTotalTitleText}>What life total would you like to start at?</Text>
            <Button
                style={styles.buttonPadding}
                title="         "
            />
            <Button
                onPress={() => setStartingLifeTotal(20)}
                title="20"
                color='white'
            />
            <Button
                onPress={() => setStartingLifeTotal(40)}
                title="40"
                color='white'
            />
            <Button
                onPress={() => handleLifeUpdate()}
                title="Update"
                color='white'
            />
        </View>
    );
}

/*Things to do: -writing this on a plane
1. Once the handleLifeUpdate function has been called, figure out how to hide/kill\
the screen so it doesn't disturb the game.
*/

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "dimgray",
        padding: 10,
        margin: 40,
        transform: [
            {rotateY: '180deg'},
            {scaleY: -1},
        ]
    },

    startingLifeTotalTitleText: {
        color: "white",
    },

    buttonPadding: {
        width: 15,
    },
});
