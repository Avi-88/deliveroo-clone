import { View, Text, Image } from "react-native";
import React from "react";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import { TextInput } from "react-native-gesture-handler";



const CustomHeader = () => {
  return (
    <View className="flex justify-center items-center">
      <View className="flex-row justify-between items-center w-full px-4">
        <View className="flex-row justify-center items-center space-x-2">
          <Image
            source={{
              uri: "https://promoaffiliates.com/wp-content/uploads/2017/06/deliveroo-logo.png",
            }}
            className="h-8 w-8 bg-gray-700 p-4 rounded-full"
          />
          <View className='flex justify-center items-start'>
            <Text className='text-xs text-gray-400 font-semibold'>Deliver Now!</Text>
            <Text className='text-lg font-bold'>Current Location <ChevronDownIcon size={20} color="#00CCBB"/></Text>
          </View>
        </View>
        <View>
          <UserIcon size={30} color="#00CCBB" />
        </View>
      </View>
      <View className='flex-row justify-between items-center px-4 py-2 space-x-2'>
        <View className='flex-row flex-1 justify-start bg-gray-200 space-x-2 px-4  rounded-md items-center'>
            <MagnifyingGlassIcon size={20} color='gray'/>
            <TextInput  placeholder="Restaurants and Cuisines" className='flex-1 p-2' keyboardType="default"/>
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB"/>
      </View>
    </View>
  );
};

export default CustomHeader;
