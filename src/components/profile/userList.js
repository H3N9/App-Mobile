import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const userList = ({listName}) => {
  return (
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{listName} :</Text>
          <TouchableOpacity>
            <Text style={{ color: "#FF5350" }}>ViewMore</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.infoImgProfile} />
          <View style={styles.infoImgProfile} />
          <View style={styles.infoImgProfile} />
          <View style={styles.infoImgProfile} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  infoImgProfile: {
    width: 60,
    height: 60,
    backgroundColor: "#CCC",
    borderRadius: 100,
  },
});

export default userList;
