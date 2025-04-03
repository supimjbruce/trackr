import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';

const LorcanaModal = () => {

const [isModalVisible, setModalVisible] = useState(true);

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>How to play</Text>
              <br></br>
              <Text style={styles.modalParagraphTitle}>Tap <b>+</b> or <b>-</b> to move your Lore Counter up or down.</Text>
              <br></br>
              <Text style={styles.modalParagraphTitle}>First player to collect 20 Lore wins the game!</Text>
              <br></br>
              <Text style={styles.modalParagraphTitle}>Thank you for using trackr to play <br></br>Lorcana and have fun!</Text>
              <View style={styles.buttonAlign}>
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    
    modalContent: {
      maxHeight: '40%',
      maxWidth: '85%',
      minHeight: '30%',
      minWidth: '30%',
      backgroundColor: '#FFCC70',
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },

    modalTitle: {
      fontFamily: 'Poppins-Black',
      color: '#FFFADD',
      fontSize: 64,
      fontWeight: '800',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    modalParagraphTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      textAlign: 'center',
    },

    buttonAlign: {
      alignItems: 'center',
    },

    closeButton: {
      height: 50,
      width: 150,
      maxHeight: 100,
      maxWidth: 300,
      backgroundColor: '#8ECDDD',
      borderRadius: 23,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 5,
      margin: 25,
      textAlign: 'center',
    },

    closeButtonText: {
      fontSize: 16,
      textAlign: 'center',
    },

  });

export default LorcanaModal;
