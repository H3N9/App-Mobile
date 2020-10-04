import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import mainStyle from "../../style/mainStyle";
import Icon from "react-native-vector-icons/Entypo";

const ContactButton = ({ title, handle, iconName }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[[mainStyle.textWhite], { textAlign: "center" }]}>
        <Icon name={iconName} size={20} color="white" />
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#FF5350",
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal: 10,
    flex: 1,
  },
});

export default ContactButton;
