/* trackr */
/* Lorcana - Gameplay [lorcana.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function MagicGameplay() {
  const [yourLoreTotal, setYourLoreTotal] = useState(0);
  const [opponentsLoreTotal, setOpponentsLoreTotal] = useState(0);

  const plusYourLore = () => {
    setYourLoreTotal((previousStartingLoreTotal) => Math.min(20, previousStartingLoreTotal + 1));
  };

  const minusYourLore = () => {
    setYourLoreTotal((previousStartingLoreTotal) => Math.max(0, previousStartingLoreTotal - 1));
  };

  const plusOponenetsLore = () => {
    setOpponentsLoreTotal((previousStartingLoreTotal) => Math.min(20, previousStartingLoreTotal + 1));
  };

  const minusOpponenetsLore = () => {
    setOpponentsLoreTotal((previousStartingLoreTotal) => Math.max(0, previousStartingLoreTotal - 1));
  };

  return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
            <View style={styles.opponentPlusButton}>
                <Button
                  onPress={plusOponenetsLore}
                  title="+"
                  color='#8ECDDD'
                />
              </View>
              <View style={styles.opponentMinusButton}>
                <Button
                  onPress={minusOpponenetsLore}
                  title="-"
                  color='#8ECDDD'
                />
              </View>
            </View>
          </View>
          <Text style={styles.playerTwo}>{opponentsLoreTotal}</Text>
        </View>
        <View>
          <Text style={styles.playerOne}>{yourLoreTotal}</Text>
          <View>
            <View style={styles.flexDirectionRow}>
              <View style={styles.yourMinusButton}>
                <Button
                  onPress={minusYourLore}
                  title="-"
                  color='#8ECDDD'
                />
              </View>
              <View style={styles.yourPlusButton}>
                <Button
                  onPress={plusYourLore}
                  title="+"
                  color='#8ECDDD'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC70',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /*text: {
    color: '#FFFADD',
  },*/

  flexDirectionRow: {
    flexDirection: 'row',
  },

  playerOne: {
    fontSize: 100,
    fontWeight: 900,
    color: "#8ECDDD",
    alignSelf: "center",
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#FFFADD',
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
    color: "#8ECDDD",
    alignSelf: "center",
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#FFFADD',
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

  /*yourLifeButtons: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
  },*/

  yourPlusButton: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 50,
  },

  yourMinusButton: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginRight: 50,
  },

  opponentPlusButton: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginRight: 50,
  },

  opponentMinusButton: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 50,
  },
});
