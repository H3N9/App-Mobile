import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import MainStyle from '../../style/mainStyle'
import Tag from '../account/tag'

const Suggestion = () => {
  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <View>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={require("../../../assets/man.png")}
        />
        <View style={styles.onlineStatus} />
      </View>
      <View style={{ flex: 1, marginLeft: 5}}>
        <View style={styles.userDetail}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <Text style={MainStyle.textBold}>UserName</Text>

            {/* location */}
            <Text style={[{marginVertical: 2}, MainStyle.textWhite]}>
              Bangkok, Thailand
            </Text>

            {/* Tag */}
            <View style={{ flexDirection: "row" }}>
              <Tag tagName={"Name"} />
              <Tag tagName={"JOJO"} />
            </View>
          </View>

          {/* Follower */}
          <View style={{ flex: 1 }}>
            <Text style={MainStyle.textWhite}>30</Text>
          </View>

          <View style={styles.menuSugges}>
            <TouchableOpacity>
              <Text style={MainStyle.textWhite}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={MainStyle.textWhite}>S</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, overflow: "hidden", marginTop: 10 }}>
          <Text style={MainStyle.textGray}>
            ภารตะแฟลชพรีเมียร์เจลติงต๊อง โกลด์เลดี้มาร์เก็ตเคลื่อนย้าย
            ลิมูซีนสตูดิโอ
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    height: 130,
    padding: 10,
    flexDirection: "row",
    marginBottom: 1,
  },
  profile: {
    width: 60,
    height: 60,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
  },
  userDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  onlineStatus: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "green",
    position: "absolute",
    right: 0,
    bottom: 40,
  },
  tagText: {
    marginRight: 10,
    marginTop: 2,
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#FF5350",
    fontSize: 12,
  },
  menuSugges:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Suggestion;