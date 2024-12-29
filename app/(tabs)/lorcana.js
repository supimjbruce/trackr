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
  const [yourLifeTotal, setYourLifeTotal] = useState(0);
  const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

  return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
            <View style={styles.opponentPlusButton}>
                <Button
                  onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)}
                  title="+"
                  color='#8ECDDD'
                /> {/*Figure out a different way to make a button element so I can change fontSize and Weight to make it more
                  like the Figma design, like react-native-elemements, etc.*/}
              </View>
              <View style={styles.opponentMinusButton}>
                <Button /* Should I make these a Button component with Props so the code is less? */
                  onPress={() => setOpponentsLifeTotal(opponentsLifeTotal - 1)}
                  title="-"
                  color='#8ECDDD'
                />
              </View>
            </View>
          </View>
          <Text style={styles.playerTwo}>{opponentsLifeTotal}</Text>
        </View>
        <View>
          <Text style={styles.playerOne}>{yourLifeTotal}</Text>
          <View>
            <View style={styles.flexDirectionRow}>
              <View style={styles.yourMinusButton}>
                <Button
                  onPress={() => setYourLifeTotal(yourLifeTotal - 1)}
                  title="-"
                  color='#8ECDDD'
                />
              </View>
              <View style={styles.yourPlusButton}>
                <Button
                  onPress={() => setYourLifeTotal(yourLifeTotal + 1)}
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
  },

  playerTwo: {
    fontSize: 100,
    color: "#8ECDDD",
    alignSelf: "center",
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#FFFADD',
    borderRadius: 23,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    width: 192,
    height: 155,
    textAlign: 'center',
  },

  buttonPadding: {
    width: 15,
  },

  yourLifeButtons: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
  },

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
