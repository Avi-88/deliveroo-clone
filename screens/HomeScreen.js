import { View, Text,StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import Constants from 'expo-constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:Constants.statusBarHeight
    },
});

export default HomeScreen;
