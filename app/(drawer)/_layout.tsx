import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
    drawerContent={CustomDrawer}
    screenOptions={{
      headerShown: false,
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      drawerActiveTintColor: 'indigo',
      headerShadowVisible: false,
      sceneStyle: {
      backgroundColor: 'white',
      },
     
    }}
    >
       <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Usuario',
        title: 'Usuario',
        drawerIcon: ({color, size}) => (
          <Ionicons
          name="person-outline"
          size={size}
          color={color}
          />
        )
        }}
      />
       <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Tabs + Stack',
        title: 'Tabs + Stack',
        drawerIcon: ({color, size}) => (
          <Ionicons
          name="home-outline"
          size={size}
          color={color}
          />
        )
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: 'Horario',
        title: 'Horario',
        drawerIcon: ({color, size}) => (
          <Ionicons
          name="calendar-outline"
          size={size}
          color={color}
          />
        )
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout