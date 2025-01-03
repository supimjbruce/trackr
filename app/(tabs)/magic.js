/* trackr */
/* Magic - Gameplay [magic.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { MyContext } from '../../components/MyContext';
import { MyProvider } from '../../components/MyContext';
import MagicLifeModal from '../../components/MagicLifeModal';

export default function MagicGameplay() {
  const [startingLifeTotal, setStartingLifeTotal] = useState(0);
  const [yourLifeTotal, setYourLifeTotal] = useState(0);
  const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

  const handleLifeUpdate = () => {
    setStartingLifeTotal(MyContext);
    setYourLifeTotal(MyContext);
    setOpponentsLifeTotal(MyContext);
  };

  const minusYourLife = () => {
    setYourLifeTotal((previousStartingLifeTotal) => Math.max(0, previousStartingLifeTotal - 1));
  };

  const minusOpponenetsLife = () => {
    setOpponentsLifeTotal((previousStartingLifeTotal) => Math.max(0, previousStartingLifeTotal - 1));
  };

  return (
    <MyProvider>
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
            <MagicLifeModal />
            <View style={styles.opponentPlusButton}>
                <Button
                  onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                  title="+"
                  color='#FFFADD'
                />
              </View>
              <View style={styles.opponentMinusButton}>
                <Button
                  onPress={minusOpponenetsLife}
                  title="-"
                  color='#FFFADD'
                />
              </View>
            </View>
          </View>
          <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>
        </View>
        <Text>Value from Context: {startingLifeTotal}</Text>
        <View>
          <Text style={styles.playerOne}>{yourLifeTotal}</Text>
          <View>
            <View style={styles.flexDirectionRow}>
              <View style={styles.yourMinusButton}>
                <Button
                  onPress={minusYourLife}
                  title="-"
                  color='#FFFADD'
                />
              </View>
              <View style={styles.yourPlusButton}>
                <Button
                  onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
                  title="+"
                  color='#FFFADD'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },

  text: {
    color: '#FFFADD',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  playerOne: {
    fontSize: 100,
    fontWeight: 900,
    color: "#FFFADD",
    alignSelf: "center",
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8ECDDD',
    borderRadius: 23,
    width: 192,
    height: 155,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontVariant: ['tabular-nums'],
  },

  playerTwo: {
    fontSize: 100,
    fontWeight: 900,
    color: "#FFFADD",
    alignSelf: "center",
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8ECDDD',
    borderRadius: 23,
    width: 192,
    height: 155,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontVariant: ['tabular-nums'],
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
  },

  /*buttonPadding: {
    width: 15,
  },*/

  yourPlusButton: {
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 50,
  },

  yourMinusButton: {
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginRight: 50,
  },

  opponentPlusButton: {
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginRight: 50,
  },

  opponentMinusButton: {
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 50,
  },
});

/*TODO: Update this new Magic page with the old code mixed with new logic, new modal and new design. */

/* [OLD 'trackr_home.js CODE]:
.
.
.
*/

/*import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ChooseStartingLifePopup from '/Users/jonathanbruce/Coding/FirstExpoProject/app/chooseYourStartingLife_popup.js'

[TODO: Need to install and learn the React Native VSCode Extensions
so I can start testing this code better -.j.]

const firstTrackrApp = () => {

    const [startingLifeTotal, setStartingLifeTotal] = useState(0);
    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    const handleLifeUpdate = () => {
        setYourLifeTotal(startingLifeTotal);
        setOpponentsLifeTotal(startingLifeTotal);
    }; [TODO: I need to figure out how to get this code to work,
    I need it to set the player's life totals to whatever startingLifeTotal is.]

    return (
    <View style={styles.container}>
        <ChooseStartingLifePopup />
        <View>
            <View>
                    <View>
                        <View style={styles.flexDirectionRow}>
                            <View style={styles.yourLifeButtons}>
                                <Button
                                onPress={() => setYourLifeTotal(yourLifeTotal - 1)}
                                title="Tap to lose life!"
                                color='white'
                                />
                            </View>
                                    <Button
                                    style={styles.buttonPadding}
                                    title="     "
                                    />
                            <View style={styles.yourLifeButtons}>
                                <Button
                                onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
                                title="Tap to gain life!"
                                color='white'
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.playerOne}>{yourLifeTotal}</Text>
            </View>
            <View>
                <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>
                    <View>
                        <View style={styles.flexDirectionRow}>
                            <View style={styles.opponentsLifeButtons}>
                                <Button
                                onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                                title="Tap to gain life!"
                                color='white'
                                />
                            </View>
                                    <Button
                                    style={styles.buttonPadding}
                                    title="     "
                                    />
                            <View style={styles.opponentsLifeButtons}>
                                <Button
                                onPress={() => setOpponentsLifeTotal(opponentsLifeTotal - 1)}
                                title="Tap to lose life!"
                                color='white'
                                />
                            </View>
                        </View>
                    </View>
            </View>
        </View>
    </View>
    );
};

[Things to do: -writing this on a plane
1. Need to make buttons to Subtract Life -> DONE!
2. Need to test styles/style the app
3. Keep learning and creating!]

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
        paddingBottom: 50,
    },

    flexDirectionRow: {
      flexDirection: 'row',
    },  

    playerOne: {
        fontSize: 100,
        color: "black",
        alignSelf: "center",
        transform: [
          {rotateY: '180deg'},
          {scaleY: -1},
        ]
    },

    playerTwo: {
        fontSize: 100,
        color: "red",
        alignSelf: "center",
    },

    buttonPadding: {
      width: 15,
    },

    yourLifeButtons: {
        backgroundColor: '#595959',
        padding: 10,
        borderRadius: 5,
        transform: [
          {rotateY: '180deg'},
          {scaleY: -1},
        ]
    },

    opponentsLifeButtons: {
        backgroundColor: '#595959',
        padding: 10,
        borderRadius: 5,
    },
});

export default firstTrackrApp;*/
