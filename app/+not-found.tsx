/* trackr */
/* Error/Not Found Page [+not-found.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Stack, Link} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{title: 'Error 404! Page Not Found :('}} />
      <View style={styles.container}>
        <Text style={styles.errorSorryText}>
            We could not find the page you were looking for!
            We are extremely sorry! Click the button below to go back to the home page.

            Thank you and have a blessed day!

            -JBruce
            Creator of trackr
        </Text>
        <Link href="/" style={styles.button}>
          Go back to the home page
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#000',
    fontSize: 20,
    color: '#fff',
  },

  /*Inspiration from Expo Tutorial:

    buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }, */

  errorSorryText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#000'
  },
});

