import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import {
  SecondContainer,
  InputText,
  EntypoIcon,
  FontAwesomeIcon
} from "../../style/themeComponent";
import * as ImagePicker from 'expo-image-picker'

const Keyboard = ({onTextChange, onImageChange}) => {
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          console.log('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handelChatText = () => {
    onTextChange(chatText)
    setChatText("")
  }

  const handleUploadImage = async () =>{
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		
		if (!result.cancelled) {
			onImageChange(result.uri);
		}
	}

  return (
    <SecondContainer style={styles.box}>
      <View style={styles.boxIcon}>
        <TouchableOpacity onPress={handleUploadImage}>
          <EntypoIcon
            name="image"
            color="#fff"
            size={22}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxInput}>
        <InputText
          multiline
          style={styles.input}
          placeholder="Aa"
          placeholderTextColor="#898989"
          onChangeText={(value) => setChatText(value)}
          value={chatText}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => handelChatText()}
        >
          <FontAwesomeIcon
            name="send"
            size={24}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    minHeight: 50,
    maxHeight: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  boxIcon: {
    flex: 1,
  },
  boxInput: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderColor: "#898989",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 7,
    paddingVertical: 7,
    marginVertical: 5,
    flex: 1,
  },
  sendButton: {
    marginHorizontal: 15,
  },
});

export default Keyboard;
