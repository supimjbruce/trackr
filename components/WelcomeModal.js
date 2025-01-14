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
                    <View style={styles.modalContent}w>
                        <Text style={styles.modalTitle}>Welcome to Trackr!</Text>
                            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </Pressable>
                    </View>
                </View>
            </Modal>
        </View>

    );
};

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
      color: '#22668D',
      fontSize: 28,
      fontWeight: '600',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    closeButton: {
      backgroundColor: '#8ECDDD',
      borderRadius: 23,
      padding: 20,
      margin: 15,
      textAlign: 'center',
    },
    closeButtonText: {
        textAlign: 'center',
    },
  });

export default WelcomeModal;