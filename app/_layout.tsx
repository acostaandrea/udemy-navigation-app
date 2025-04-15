import { View, Text } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect } from "react";
import "./global.css";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {

  const [fontsLoaded, error] =useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),  
    'WorkSans-Light' : require('../assets/fonts/WorkSans-Light.ttf'),                 
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null; // or a loading spinner
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Slot />
    </GestureHandlerRootView>
);
  // return <Slot />;
};

export default RootLayout;
