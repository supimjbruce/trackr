/* trackr */
/* Lorcana - Gameplay [lorcana.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function LorcanaGameplay() {
  const [yourLoreTotal, setYourLoreTotal] = useState(0);
  const [opponentsLoreTotal, setOpponentsLoreTotal] = useState(0);

  const plusYourLore = () => {
    setYourLoreTotal((yourPreviousLoreTotal) => Math.min(20, yourPreviousLoreTotal + 1));
  };

  const minusYourLore = () => {
    setYourLoreTotal((yourPreviousLoreTotal) => Math.max(0, yourPreviousLoreTotal - 1));
  };

  const plusOponenetsLore = () => {
    setOpponentsLoreTotal((previousOpponenetLoreTotal) => Math.min(20, previousOpponenetLoreTotal + 1));
  };

  const minusOpponenetsLore = () => {
    setOpponentsLoreTotal((previousOpponenetLoreTotal) => Math.max(0, previousOpponenetLoreTotal - 1));
  };

  const [yourLoreTextColor, setYourLoreTextColor] = useState('');
  const [opponentsLoreTextColor, setOpponentsLoreTextColor] = useState('');
  const winningLoreNumber = 20;  

  useEffect(() => {
    if (opponentsLoreTotal == winningLoreNumber) {
      setOpponentsLoreTextColor('green');
    } else {
      setOpponentsLoreTextColor('#8ECDDD');
    }
  }, [opponentsLoreTotal]);
 
  useEffect(() => {
    if (yourLoreTotal == winningLoreNumber) {
      setYourLoreTextColor('green');
    } else {
      setYourLoreTextColor('#8ECDDD');
    }
  }, [yourLoreTotal]);

  return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
              <Pressable onPress={plusOponenetsLore} style={styles.opponentPlusButton}>
                <Text style={styles.buttonTextStyling}>+</Text>
              </Pressable>
              <Text style={[styles.playerTwo, {color: opponentsLoreTextColor}]}>{opponentsLoreTotal}</Text>
              <Pressable onPress={minusOpponenetsLore} style={styles.opponentMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <View>
          <View style={styles.flexDirectionRow}>
              <Pressable onPress={minusYourLore} style={styles.yourMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
              <Text style={[styles.playerOne, {color: yourLoreTextColor}]}>{yourLoreTotal}</Text>
              <Pressable onPress={plusYourLore} style={styles.yourPlusButton}>
                <Text style={styles.buttonTextStyling}>+</Text>
              </Pressable>
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
    margin: 0,
  },

  text: {
    color: '#FFFADD',
  },

  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playerOne: {
    fontSize: 100,
    fontWeight: 900,
    color: "#8ECDDD",
    alignSelf: "center",
    padding: 15,
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
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    fontSize: 100,
    fontWeight: 900,
    color: "#8ECDDD",
    alignSelf: "center",
    padding: 15,
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

  /*buttonPadding: {
    width: 15,
  },*/

  buttonTextStyling: {
    fontSize: 24,
    fontWeight: 900,
    color: '#8ECDDD',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  yourPlusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    marginLeft: 25,
  },

  yourMinusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    marginRight: 25,
  },

  opponentPlusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginRight: 25,
  },

  opponentMinusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#FFFADD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 25,
  },
});
