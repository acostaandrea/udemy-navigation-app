import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';

const ProductScreen = () => {
  const {id} = useLocalSearchParams();
  const naviagation = useNavigation();
  const product = products.find((product) => product.id === id);
  useEffect(() => {
    naviagation.setOptions({
      title: product?.title ?? 'Producto',
      
    })
  })
  if (!product) {
    return <Redirect href="/" />;
  }
  
  return (
    <View className='px-5 mt-5'>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
      <Text className=''>{product.description}</Text>
      <Text className='font-work-black mt-2'>${product.price}</Text>
    </View>
  )
}

export default ProductScreen