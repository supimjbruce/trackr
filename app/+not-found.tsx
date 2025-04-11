/* trackr */
/* Error/Not Found Page [+not-found.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>page not found</Text>
      <Text style={styles.subTitle}>
        {`We can't seem to find the page you're looking for.\nClick the link below to go back to the home page!`}
      </Text>
      <Link href="/">
        <Pressable style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22668D',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },

  title: {
    color: '#FFFADD',
    fontFamily: 'Poppins-Black',
    fontSize: 80,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  subTitle: {
    color: '#FFFADD',
    fontFamily: 'Poppins',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});