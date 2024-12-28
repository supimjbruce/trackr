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
              <View style={styles.yourLifeButtons}>
                <Button /* Should I make these a Button component with Props so the code is less? */
                  onPress={() => setYourLifeTotal(yourLifeTotal - 1)}
                  title="Tap to lose life!"
                  color='#8ECDDD'
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
                  color='#8ECDDD'
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
                  color='#8ECDDD'
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
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
  },

  playerTwo: {
    fontSize: 100,
    color: "#8ECDDD",
    alignSelf: "center",
  },

  buttonPadding: {
    width: 15,
  },

  yourLifeButtons: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [{ rotate: '180deg' }]
  },

  opponentsLifeButtons: {
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
  },
});
