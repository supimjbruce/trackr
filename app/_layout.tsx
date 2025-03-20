/* trackr */
/* Overall Layout File [_layout.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Stack} from 'expo-router';
import {MyProvider} from '../components/MyContext';

export default function RootLayout() {
  return (
    <MyProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </MyProvider>
  );
}