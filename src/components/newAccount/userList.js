import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import ImagPro from "./imgPro";
import styled from "styled-components/native";
const userList = ({ user }) => {
  const friendCount = user.friend.length;
  const intro = user.intro;

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItems}>
        <TextPrimary style={{ textAlign: "center", fontSize: 25 }}>
          {friendCount}
        </TextPrimary>
        <TextPrimary style={{ textAlign: "center" }}>Friend</TextPrimary>
      </View>
      <View style={[styles.infoItems, { flex: 2, paddingLeft: 10 }]}>
        <TextPrimary>{intro}</TextPrimary>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 25,
    flexDirection: "row",
  },
  infoImgProfile: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  infoItems: {
    marginHorizontal: 5,
    flex: 1,
  },
});

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
export default userList;
