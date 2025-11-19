import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Rootlayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="project/index"
        options={{
          title: 'Project',
          tabBarIcon: ({ color }) => <FontAwesome name="th-large" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact/index"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome name="phone" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
