/* trackr */
/* Settings Page [settings.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Text, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import React from 'react';

export default function SettingsScreen() {

  const settingChangeColor_PlayerOne = () => {
    Alert.alert('Hello!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.titleText}>Settings Screen</Text>
          <View style={styles.dividerLine}/>

          <View>
            <Text style={styles.subTitle}>Magic Player One Color</Text>
            <View style={styles.settingsBox}>
              <View>
                <Pressable onPress={() => alert('You have changed the Player One Color!')}>
                  <Text style={styles.settingsColor}>Input Color Here</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.subTitle}>Magic Player Two Color</Text>
            <View style={styles.settingsBox}>
              <View>
                <Pressable onPress={() => alert('You have changed the Player Two Color!')}>
                  <Text style={styles.settingsColor}>Input Color Here</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.subTitle}>Lorcana Player One Color</Text>
            <View style={styles.settingsBox}>
              <View>
                <Pressable onPress={() => alert('You have changed the Player One Color!')}>
                  <Text style={styles.settingsColor}>Input Color Here</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.subTitle}>Lorcana Player Two Color</Text>
            <View style={styles.settingsBox}>
              <View>
                <Pressable onPress={() => alert('You have changed the Player Two Color!')}>
                  <Text style={styles.settingsColor}>Input Color Here</Text>
                </Pressable>
              </View>
            </View>
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

  titleText: {
    color: '#22668D',
    fontFamily: 'Poppins-Black',
    fontSize: 28,
    padding: 15,
  },

  subTitle: {
    color: '#FFFADD',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    paddingLeft: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#FFCC70',
    margin: 15,
  },

  settingsBox: {
    height: '30%',
    width: '30%',
    backgroundColor: '#8ECDDD',
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5,
    borderRadius: 11,
    alignItems: 'center',
  },

  settingsColor: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    padding: 10,
    textAlign: 'left',
  },

  dividerLine: {
    backgroundColor: '#FFFADD',
    height: 10,
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