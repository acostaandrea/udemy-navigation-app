import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'indigo', headerShown: false
    // , tabBarStyle:{backgroundColor:'black'}, tabBarActiveBackgroundColor:'gray', tabBarInactiveBackgroundColor:'black', tabBarLabelStyle:{fontSize:12, marginBottom:5}
    }}>
    <Tabs.Screen
      name="(stack)"
      options={{
        // tabBarShowLabel: false,
        title: 'Stack',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
      }}
    />
    <Tabs.Screen
      name="home/index"
      options={{
        // tabBarShowLabel: false,
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
      }}
    />
    <Tabs.Screen
      name="favorites/index"
      options={{
        title: 'Favoritos',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
      }}
    />
  </Tabs>
  )
}

export default TabsLayout