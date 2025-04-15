import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'
import { products } from '@/store/products.store'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
     <FlatList 
     data={products}  
     keyExtractor={(item) => item.id}    
     renderItem={({item})=> (
      <View className='mt-10 '>
        <Text className='text-2xl font-work-black'>{item.title}</Text>
        <Text className=''>{item.description}</Text>
        <View className='flex flex-row justify-between mt-2'>
          <Text className='text-2xl font-work-black'>${item.price}</Text>
          <Link className='text-primary' href={`/products/${item.id}`}>Ver detalles</Link>          
        </View>
      </View>
     )}
     ></FlatList>
    </View>
  )
}

export default ProductsScreen