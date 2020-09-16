import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle"

const userList = ({listName}) => {
  return (
      <View style={[styles.infoContainer, MainStyle.boxContent]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text style={MainStyle.textBold}>{listName} :</Text>
          <TouchableOpacity>
            <Text style={{ color: "#FF5350" }}>ViewMore</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image style={styles.infoImgProfile} source={require('../../../assets/man.png')}/>
          <Image style={styles.infoImgProfile} source={require('../../../assets/man.png')}/>
          <Image style={styles.infoImgProfile} source={require('../../../assets/man.png')}/>
          <Image style={styles.infoImgProfile} source={require('../../../assets/man.png')}/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
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
