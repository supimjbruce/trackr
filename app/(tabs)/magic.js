/* trackr */
/* Magic - Gameplay [magic.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {MyContext} from '../../components/MyContext';
import MagicLifeModal from '../../components/MagicLifeModal';

export default function MagicGameplay() {
  const {startingLifeTotal} = useContext(MyContext);
  const [yourLifeTotal, setYourLifeTotal] = useState(startingLifeTotal);
  const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(startingLifeTotal)
  /*const losingLifeTotal = 0;
  const [yourLifeTextColor, setYourLifeTextColor] = useState('');
  const [opponentsLifeTextColor, setOpponentsLifeTextColor] = useState('');*/

    useEffect(() => {
      setYourLifeTotal(startingLifeTotal);
      setOpponentsLifeTotal(startingLifeTotal);
    }, [startingLifeTotal]);

    {/* lorcana.js "Lose The Game" Code */}
    /*useEffect(() => {
      if (opponentsLifeTotal == losingLifeTotal) {
        setOpponentsLifeTextColor('red');
        setYourLifeTextColor('green');
      } else {
        setOpponentsLifeTextColor('#FFFADD');
      }
    }, [opponentsLifeTotal]);
   
    useEffect(() => {
      if (yourLifeTotal == losingLifeTotal) {
        setYourLifeTextColor('red');
        setOpponentsLifeTextColor('green');
      } else {
        setYourLifeTextColor('#FFFADD');
      }
    }, [yourLifeTotal]);*/ //<-- Need to fix this code, I want the '0' to start on a normal color and only
    // go to red or green if the player loses or wins.

  const minusYourLife = () => {
    setYourLifeTotal((previousStartingLifeTotal) => Math.max(0, previousStartingLifeTotal - 1));
  };

  const minusOpponenetsLife = () => {
    setOpponentsLifeTotal((previousStartingLifeTotal) => Math.max(0, previousStartingLifeTotal - 1));
  };

  return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
              <MagicLifeModal />
              <Pressable onPress={() => setOpponentsLifeTotal(opponentsLifeTotal + 1)} style={styles.opponentPlusButton}>
                <Text style={styles.buttonTextStyling}>+</Text>
              </Pressable>
              <View style={styles.lifeTotalCentered}>
                <Text style={[styles.playerTwo/*, {color: opponentsLifeTextColor}*/]}>{opponentsLifeTotal}</Text>
              </View>
              <Pressable onPress={minusOpponenetsLife} style={styles.opponentMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
              {/*Should I change this to TouchableOpacity so that the viewer has some feedback when the button is pressed/*/}
            </View>
          </View>
        </View>
        {/*<Text>Value from Context: {startingLifeTotal}</Text> <-- Context Test Code */}
        <View>
          <View>
          <View style={styles.flexDirectionRow}>
              <Pressable onPress={minusYourLife} style={styles.yourMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
              <Text style={[styles.playerOne/*, {color: opponentsLifeTextColor}*/]}>{yourLifeTotal}</Text>
              <Pressable onPress={() => setYourLifeTotal(yourLifeTotal + 1)} style={styles.yourPlusButton}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  playerOne: {
    fontFamily: 'Poppins-Black',
    fontSize: 82,
    fontWeight: 900,
    color: "#FFFADD",
    alignSelf: "center",
    padding: 15,
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
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    fontFamily: 'Poppins-Black',
    fontSize: 82,
    fontWeight: 900,
    color: "#FFFADD",
    alignSelf: "center",
    padding: 15,
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

  lifeTotalCentered: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonTextStyling: {
    fontSize: 24,
    fontWeight: 900,
    color: '#FFFADD',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  yourPlusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    marginLeft: 25,
  },

  yourMinusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    marginRight: 25,
  },

  opponentPlusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#8ECDDD',
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
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    transform: [
      { rotateY: '-180deg' },
      { scaleY: -1 },
    ],
    marginLeft: 25,
  },
});