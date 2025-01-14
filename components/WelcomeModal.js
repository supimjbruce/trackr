import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';

const WelcomeModal = () => {

const [isModalVisible, setModalVisible] = useState(true);

    return (
      <View style={styles.container}> {/* Thank you Google once again for help with this code :) */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent} w>
              <Text style={styles.modalTitle}>trackr</Text>
              <Text style={styles.modalParagraphTitle}>Welcome to trackr, a simple app for tracking<br></br>life totals for trading card games.</Text>
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
      color: '#FFFADD',
      fontSize: 64,
      fontWeight: '800',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    modalParagraphTitle: {
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
      paddingTop: 15, /* Padding is the space inside of the element :) */
      paddingBottom: 15,
      paddingLeft: 5,
      margin: 25, /* Space OUTSIDE of the element */
      textAlign: 'center',
    },

    closeButtonText: {
      fontSize: 16,
      textAlign: 'center',
    },

  });

export default WelcomeModal;
