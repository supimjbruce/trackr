/* trackr */
/* Settings Page [settings.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
  },

  text: {
    color: '#22668D',
    fontFamily: 'Poppins-Black',
    fontSize: 28,
    padding: 15,
  },

  settingsContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#FFCC70',
    margin: 15,
  },
});