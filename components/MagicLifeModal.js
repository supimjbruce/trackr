/* trackr */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, Modal, Pressable, StyleSheet} from "react-native"
import React, { useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MagicLifeModal() {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Choose your starting life total</Text>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Ionicons name={'close-outline'} color="#FFFADD" size={30}></Ionicons>
                </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#FFFADD",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "absolute",
    bottom: 0
  },
  titleContainer: {
    height: "25%",
    backgroundColor: "#595959",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: '#FFFADD',
    fontSize: 28,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
  }
})


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
