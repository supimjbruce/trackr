/* trackr */
/* Error/Not Found Page [+not-found.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page Not Found</Text>
      <Text>Description of error and saying sorry.</Text>
      <br></br>
      <Text>Click the link below to go back to the home page!</Text>
      <Link href="/" style={styles.text}>
        Go back to the home page
      </Link> {/*Styled like button*/}
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

  text: {
    color: '#FFFADD',
  },
});