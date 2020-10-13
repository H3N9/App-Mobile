import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import styled from "styled-components/native";

const InputTextType = ({ placeholder }) => {
  return (
    <View style={{ flex: 1 }}>
      <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
        {placeholder}
      </TextPrimary>
      <InputText
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#777"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#777",
    marginHorizontal: 3,
  },
});

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const InputText = styled.TextInput`
  color: ${(props) => props.theme.textColor};
`;
export default InputTextType;
