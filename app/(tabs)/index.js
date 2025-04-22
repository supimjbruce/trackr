/* trackr */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeModal from '../../components/WelcomeModal';
import {MyProvider} from '../../components/MyContext';

export default function Index() {
  return (
    <MyProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.introContainer}>
        <WelcomeModal />
        <Text style={styles.title}>trackr</Text>
        <Text style={styles.subTitle}>A free, lightweight, open source life tracking<br></br> app for Magic The Gathering</Text>
      </View>
    </SafeAreaView>
    </MyProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
  },

  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFADD',
    fontFamily: 'Poppins-Black',
    fontSize: 108,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subTitle: {
    color: '#FFFADD',
    fontFamily: 'Poppins',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  footerText: {
    color: '#FFFADD',
    fontSize: 16,
    marginBottom: 15,
  },
});
