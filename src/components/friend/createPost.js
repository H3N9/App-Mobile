import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const CreatePost = ({ addPost }) => {
  const [text, setText] = useState("");

  const posted = () => {
    addPost(text);
    setText("");
  };

  return (
    <View style={styles.createContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../../assets/man.png")}
          style={styles.createImgProfile}
        />
        <TouchableOpacity style={styles.postInput}>
          <Text style={{color: "#AAA"}}>Type To Post!</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.postButton} onPress={posted}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createContainer: {
    flex: 1,
    backgroundColor: "#323232",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  createImgProfile: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FF5350",
    marginRight: 10,
  },
  postInput: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    borderRadius: 50,
    padding: 10,
    color: "#fff",
  },
  postUsername: {
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 10,
  },
  postButton: {
    flex: 1,
    backgroundColor: "#AAA",
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
  },
});

export default CreatePost;
