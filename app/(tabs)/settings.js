/* trackr */
/* Settings Page [settings.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Text, View, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.text}>Settings Screen</Text>
          <View style={styles.dividerLine}/>

          <View>
            <Text>Magic Player One Color</Text>
            <Button></Button>
            <Text>Magic Player Two Color</Text>
            <Button></Button>
          </View>

          <View>
            <Text>Lorcana Player One Color</Text>
            <Button></Button>
            <Text>Lorcana Player Two Color</Text>
            <Button></Button>
          </View>

          <View>
            <Text>Light/Dark Mode</Text>
            <Button></Button>
          </View>

          <View style={[styles.dividerLine, {marginTop: 15,}]}/>

          <View>
            <Text style={styles.thankYouTitle}>Thank you</Text>
            <Text style={styles.thankYouSubtitle}>For supporting <Text style={{fontFamily: 'Poppins-Black'}}>trackr!</Text></Text>
          </View>
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

  dividerLine: {
    backgroundColor: '#FFFADD',
    height: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  thankYouTitle: {
    fontFamily: 'Poppins-Black',
    fontSize: 54,
    color: '#FFFADD',
    textAlign: 'center',
  },

  thankYouSubtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#FFFADD',
    textAlign: 'center',
  },
});