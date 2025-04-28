/* trackr */
/* Player Count Modal [PlayerCountModal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";

export default function PlayerCountModal() {
  const {
    thirdPlayerVisibility,
    setThirdPlayerVisibility,
    fourthPlayerVisibility,
    setFourthPlayerVisibility,
  } = useContext(MyContext);

  const [modalVisible, setModalVisible] = useState(true);

  // ✅ Simple function, not component
  const startThreePlayerGame = () => {
    setThirdPlayerVisibility(true);
    setModalVisible(false);
  };

  const startFourPlayerGame = () => {
    setThirdPlayerVisibility(true);
    setFourthPlayerVisibility(true);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              How many players are{"\n"} you playing with?
            </Text>
            <View style={styles.lifeButtonRow}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.lifeButton}
              >
                <Text style={styles.lifeButtonTitle}>2</Text>
              </Pressable>
              <Pressable
                onPress={startThreePlayerGame}
                style={styles.lifeButton}
              >
                <Text style={styles.lifeButtonTitle}>3</Text>
              </Pressable>
              <Pressable
                onPress={startFourPlayerGame}
                style={styles.lifeButton}
              >
                <Text style={styles.lifeButtonTitle}>4</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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