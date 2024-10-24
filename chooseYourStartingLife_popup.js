import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function ChooseStartingLifePopup() {
    const [startingLifeTotal, setStartingLifeTotal] = useState(0);
    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    const handleLifeUpdate = () => {
        setYourLifeTotal(startingLifeTotal);
        setOpponentsLifeTotal(startingLifeTotal);
    };

    return (
        <View>
            <Text>What life total would you like to start at?</Text>
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

const styles = StyleSheet.create ({
    buttonPadding: {
      width: 15,
    },
});