import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "../global/tag";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Schema from "../../schema"

const Suggestion = ({ navigation, userId }) => {

  const user = Schema.getProfile(userId)
  const { id, username, nation, city, age, hobbies, favorites, describe } = user
  const tag1 = hobbies[0].list[0]
  const tag2 = favorites[0].list[0]

  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <TouchableOpacity onPress={() => navigation.navigate("Account", { id: id })}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "#555" }}
          source={require("../../../assets/man.png")}
        />
        <View style={styles.onlineStatus} />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 7 }}>
        <View style={[styles.userDetail]}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <TouchableOpacity onPress={() => navigation.navigate("Account", { id: id })}>
              <Text style={MainStyle.textBold}>{username}</Text>
            </TouchableOpacity>
            {/* location */}
            <Text style={[{ marginVertical: 1 }, MainStyle.textWhite]}>
              {city}, {nation}
            </Text>
          </View>
          {/* Follower */}
          <View style={{ flex: 1 }}>
            <Text style={MainStyle.textWhite}>{age}</Text>
          </View>

          <View style={styles.menuSugges}>
            <TouchableOpacity>
              <Entypo name="chat" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="bookmark" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tag */}
        <View style={{ flexDirection: "row" }}>
          <Tag tagName={tag1.name} id={tag1.id} />
          <Tag tagName={tag2.name} id={tag2.id} />
        </View>

        <View style={{ flex: 1, overflow: "hidden", marginTop: 10 }}>
          <Text style={MainStyle.textGray}>{describe}</Text>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  boxContent: {
    minHeight: 130,
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
    alignItems: "center",
    flex: 1,
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
  menuSugges: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Suggestion;
