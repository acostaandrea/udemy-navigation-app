import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
        <View className='flex- justify-center items-center mx-3 p-10 mb-10 h-[150px] bg-primary rounded-md'>
            <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                <Text className='text-primary font-work-black text-3xl'>FM</Text>
            </View>
        </View>
        <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer