/* trackr */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}> Welcome to <Text style={{ fontWeight: 'bold' }}>Trackr!</Text></Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Select a card game to get started <Text style={{fontSize: 32, fontWeight: '800'}}>v</Text></Text>
      </View>
    </View>
  );
}
/* Figure out how to add inline padding to the V/arrow, or make the 'v' an Arrow. */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFADD',
    fontSize: 64,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subTitle: {
    color: '#FFFADD',
    fontSize: 32,
    fontWeight: 'medium',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 'auto',
  },

  footerText: {
    color: '#FFFADD',
    fontSize: 16,
    marginBottom: 15,
  },
});
