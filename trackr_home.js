import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

/*Need to install and learn the React Native VSCode Extensions
so I can start testing this code better -.j.*/

const firstTrackrApp = () => {

    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    return (
    <View>
        <Text style={{flex:1}}>{yourLifeTotal}</Text> /* Your Life Total */
        <Text style={{flex:1}}>{opponentsLifeTotal}</Text> /* Your Opponent's Life Total */

        <Button
            onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
            title="Tap to gain life!"
            style={{flex: 1}} /*This is a button that will gain you life.
            Need to make a button to subtract life */
        />
    </View>
    );
};

export default firstTrackrApp;