/* trackr */
/* Player Count Modal [PlayerCountModal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React from 'react';

export default function PlayerCountModal() {

    return (
        <View>
            <Modal>
                <View>
                    <Text>How many players?</Text>
                    <Pressable>
                        <Text>2</Text>
                    </Pressable>
                    <Pressable>
                        <Text>3</Text>
                    </Pressable>
                    <Pressable>
                        <Text>4</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};