/* trackr */
/* Magic Life Modal [MagicLifeModal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, Modal, Pressable, StyleSheet, TouchableOpacity} from "react-native";
import React, { useState, useContext } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MyContext, MyProvider } from "./MyContext";

export default function MagicLifeModal() {

  const { startingLifeTotal, setStartingLifeTotal } = useContext(MyContext);

  const [modalVisible, setModalVisible] = useState(true);

  const updateLifeTotal = (newLife) => {
    setStartingLifeTotal(newLife); // ✅ Update the global state
    setModalVisible(false); // Close modal after updating
  };

  const [yourLifeTotal, setYourLifeTotal] = useState(0);
  const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

  /*const handleLifePress20 = () => {
    setStartingLifeTotal(useContext(20));
    setModalVisible(false);
  };

  const handleLifePress40 = () => {
    setStartingLifeTotal(40);
    setModalVisible(false);
  };*/

  return (
    <MyProvider>
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      {/*<Text>Value from context: {startingLifeTotal}</Text> <- Need to fix this context */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/*<Text style={styles.trackrModalTitle}>Magic</Text>*/}
            <Text style={styles.modalTitle}>What life do you<br></br>want to start at?</Text>
            {/*<TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name={'close-outline'} color="#000" size={30}></Ionicons>
            </TouchableOpacity>*/}
            <View style={styles.lifeButtonRow}>
                <Pressable onPress={() => updateLifeTotal(20)} style={styles.lifeButton}>
                    <Text style={styles.lifeButtonTitle}>20</Text>
                    <Text style={styles.formatSubtitle}>(Standard)</Text>
                </Pressable>
                <Pressable onPress={() => updateLifeTotal(40)} style={styles.lifeButton}>
                    <Text style={styles.lifeButtonTitle}>40</Text>
                    <Text style={styles.formatSubtitle}>(Commander)</Text>
                </Pressable>
            </View>
          </View>
          {/*<View> // Idea for a View below the Life Modal that shows quickly how to play
          and use the app.
            <Text style={styles.modalTitle}>How to Play</Text>
            <View>
              <Text>Standard</Text>
              <Text>Description</Text>
            </View>
            <View>
              <Text>Commander</Text>
              <Text>Description</Text>
            </View>
            <Text>Thank you for playing and for using trackr!</Text>
          </View>*/}
        </View>
      </Modal>
    </View>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black background with 50% opacity
    // Thank you Google Search AI for helping with this code :)
  },

  modalContent: {
    maxHeight: '40%',
    maxWidth: '85%',
    minHeight: '30%',
    minWidth: '30%',
    backgroundColor: '#FFCC70',
    padding: 20,
    borderRadius: 20,
  },

  modalTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#22668D',
    fontSize: 28,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  /*trackrModalTitle: {
    fontFamily: 'Poppins-Black',
    color: '#FFFADD',
    fontSize: 44,
    fontWeight: '800',
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },*/

  lifeButtonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lifeButton: {
    backgroundColor: '#8ECDDD',
    borderRadius: 23,
    padding: 20,
    margin: 15,
  },

  lifeButtonTitle: {
    color: '#FFFADD',
    fontFamily: 'Poppins-Black',
    fontSize: 56,
    fontWeight: '900', /* I would like this to be more Ultra, like the Figma design */
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  formatSubtitle: {
    fontFamily: 'Poppins-Medium',
    color: '#FFFADD',
    fontSize: 16,
    marginTop: -7.5,
    textAlign: 'center',
  },
});

/*TODO: Update this code with new modal logic, new life logic, and get it imported into magic.js. */

/* [OLD 'chooseYourStartingLife_popup.js CODE]:
.
.
.
*/

/*import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function ChooseStartingLifePopup() {
    const [startingLifeTotal, setStartingLifeTotal] = useState(0);
    const [yourLifeTotal, setYourLifeTotal] = useState(0);
    const [opponentsLifeTotal, setOpponentsLifeTotal] = useState(0);

    const handleLifeUpdate = () => {
        setYourLifeTotal(startingLifeTotal);
        setOpponentsLifeTotal(startingLifeTotal);
    };
    
    [TODO: I still need help working on the logic of this section, to make the
    selected life total for startingLifeTotal the starting life total for
    both players.]

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

[Things to do:
1. Once the handleLifeUpdate function has been called, figure out how to hide/kill\
the screen so it doesn't disturb the game.]

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
});*/
