/* trackr */
/* Tabs Layout File [_layout.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFADD', /* trackr - Main Off-White Color */
        tabBarStyle: {
          backgroundColor: '#22668D',
        },
        headerTintColor: '#22668D',
        headerStyle: {
          backgroundColor: '#FFFADD', /* trackr - Main Dark Blue Color */
        },
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="magic"
        options={{ 
          title: 'Magic',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'flame-sharp' : 'flame-outline'} color={color} size={24} />
          ),
        }} /* Down the road, I would love to add a custom icon of the Magic The Gathering logo for this */
      />
      <Tabs.Screen
        name="lorcana"
        options={{
          title: 'Lorcana',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} color={color} size={24} />
          ),
        }} /* Down the road, I would love to add a custom icon of the Lorcana logo for this */
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
