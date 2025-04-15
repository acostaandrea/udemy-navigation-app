import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
       
        <CustomButton className="mb-2" color="primary" onPress={() => router.push("/tabs/(stack)/products")}>
          Productos
        </CustomButton>
        <CustomButton className="mb-2" color="secondary" onPress={() => router.push("/tabs/(stack)/profile")}>
          Perfil
        </CustomButton>
        <CustomButton className="mb-2" color="tertiary" onPress={() => router.push("/tabs/(stack)/settings")}>
          Ajustes
        </CustomButton>
        <CustomButton className="mt-1" variant="text-only" onPress={() => router.push("/tabs/(stack)/products")}>
          Productos
        </CustomButton>
        {/* <Link href="/products" className="mb-5" asChild>
          <CustomButton color="primary">Productos</CustomButton>         
        </Link> */}
        {/* <Link href='/products' className="mb-5">Productos</Link>
        <Link href='/profile' className="mb-5">Perfil</Link>
        <Link href='/settings' className="mb-5">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
