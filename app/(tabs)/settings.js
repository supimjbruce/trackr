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
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFADD',
  },
});