/* trackr */
/* Magic - Gameplay [magic.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, SafeAreaView, Pressable, Button} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {MyContext} from '../../components/MyContext';
import MagicLifeModal from '../../components/MagicLifeModal';
import PlayerCountModal from '../../components/PlayerCountModal';

export default function MagicGameplay() {
  const {
    startingLifeTotal,
    setStartingLifeTotal,
    thirdPlayerVisibility,
    setThirdPlayerVisibility,
    fourthPlayerVisibility,
    setFourthPlayerVisibility,
  } = useContext(MyContext);
  const [playerOneLifeTotal, setP1LifeTotal] = useState(startingLifeTotal);
  const [playerTwoLifeTotal, setP2LifeTotal] = useState(startingLifeTotal);
  const [playerThreeLifeTotal, setP3LifeTotal] = useState(startingLifeTotal);
  const [playerFourLifeTotal, setP4LifeTotal] = useState(startingLifeTotal);

  /*const losingLifeTotal = 0;
  const [yourLifeTextColor, setYourLifeTextColor] = useState('');
  const [opponentsLifeTextColor, setOpponentsLifeTextColor] = useState('');*/

    useEffect(() => {
      setP1LifeTotal(startingLifeTotal);
      setP2LifeTotal(startingLifeTotal);
      setP3LifeTotal(startingLifeTotal);
      setP4LifeTotal(startingLifeTotal);
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
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <View style={styles.flexDirectionRow}>
              <MagicLifeModal />
              <PlayerCountModal />
              <Pressable onPress={() => setP2LifeTotal(playerTwoLifeTotal + 1)} style={styles.topRowPlusButton}>
                <Text style={styles.buttonTextStyling}>+</Text>
              </Pressable>
              <View style={styles.lifeTotalCentered}>
                <Text style={styles.topPlayer}>{playerTwoLifeTotal}</Text>
              </View>
              <Pressable onPress={() => setP2LifeTotal(playerTwoLifeTotal - 1)} style={styles.topRowMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
              <View>
                {thirdPlayerVisibility && (
                  <View style={[styles.flexDirectionRow, {marginLeft: 30}]}>
                    <Pressable onPress={() => setP3LifeTotal(playerThreeLifeTotal + 1)} style={styles.topRowPlusButton}>
                      <Text style={styles.buttonTextStyling}>+</Text>
                    </Pressable>
                    <View style={styles.lifeTotalCentered}>
                      <Text style={styles.topPlayer}>{playerThreeLifeTotal}</Text>
                    </View>
                    <Pressable onPress={() => setP3LifeTotal(playerThreeLifeTotal - 1)} style={styles.topRowMinusButton}>
                      <Text style={styles.buttonTextStyling}>-</Text>
                    </Pressable>
                  </View>
                )}
              </View>
              {/*Should I change this to TouchableOpacity so that the viewer has some feedback when the button is pressed/*/}
            </View>
          </View>
        </View>
        <View>
          <View>
          <View style={styles.flexDirectionRow}>
              <Pressable onPress={() => setP1LifeTotal(playerOneLifeTotal - 1)} style={styles.bottomRowMinusButton}>
                <Text style={styles.buttonTextStyling}>-</Text>
              </Pressable>
              <Text style={styles.bottomPlayer}>{playerOneLifeTotal}</Text>
              <Pressable onPress={() => setP1LifeTotal(playerOneLifeTotal + 1)} style={styles.bottomRowPlusButton}>
                <Text style={styles.buttonTextStyling}>+</Text>
              </Pressable>
              {fourthPlayerVisibility && (
                  <View style={[styles.flexDirectionRow, {marginLeft: 30}]}>
                    <Pressable onPress={() => setP4LifeTotal(playerFourLifeTotal - 1)} style={styles.bottomRowMinusButton}>
                      <Text style={styles.buttonTextStyling}>-</Text>
                    </Pressable>
                    <View style={styles.lifeTotalCentered}>
                      <Text style={styles.bottomPlayer}>{playerFourLifeTotal}</Text>
                    </View>
                    <Pressable onPress={() => setP4LifeTotal(playerFourLifeTotal + 1)} style={styles.bottomRowPlusButton}>
                      <Text style={styles.buttonTextStyling}>+</Text>
                    </Pressable>
                  </View>
                )}
            </View>
          </View>
          </View>
        </SafeAreaView>
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

  bottomPlayer: {
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

  topPlayer: {
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

  bottomRowPlusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    marginLeft: 25,
  },

  bottomRowMinusButton: {
    height: 50,
    width: 50,
    backgroundColor: '#8ECDDD',
    padding: 10,
    borderRadius: 5,
    marginRight: 25,
  },

  topRowPlusButton: {
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

  topRowMinusButton: {
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