import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#007AFF" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Play",
          tabBarIcon: ({ color, size }) => <Ionicons name="play-circle" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="role"
        options={{
          title: "Role",
          tabBarIcon: ({ color, size }) => <Ionicons name="people-circle" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "My",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
