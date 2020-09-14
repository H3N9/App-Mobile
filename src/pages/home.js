import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar />
      <ScrollView style={{flex: 1}}>

      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Home;
