import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProfileHeader from "./profileHeader";
import InputProfile from "./inputProfile";

const MainEdit = ({ navigation }) => {
  const [newDetail, setNewDetail] = useState({
    username: undefined,
    name: undefined,
    lastName: undefined,
    birthDate: undefined,
    gender: undefined,
    nation: undefined,
    city: undefined,
    introQuotes: undefined,
    aboutMe: undefined,
  }); // New User ProfileDetail

  return (
    <React.Fragment>
      <ProfileHeader
        navigation={navigation}
        setNewDetail={setNewDetail}
        newDetail={newDetail}
      />
      <InputProfile newDetail={newDetail} setNewDetail={setNewDetail} />
    </React.Fragment>
  );
};

export default MainEdit;
