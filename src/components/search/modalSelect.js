import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Keyboard,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import { LinearGradient } from "expo-linear-gradient";
import {
  SecondContainer,
  TextPrimary,
  InputTextBg,
} from "../../style/themeComponent";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import {getLoad, postLoad} from '../../fetch'
import path from '../../path'
const modalSelect = ({
  modalVisible,
  setModalVisible,
  data,
  filterData,
  setFilterData,
  focusData,
  fetchUrl,
  navigation
}) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const authorize = useSelector((state) => state.Authorize.authorize)
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState([]); //เก็บข้อมูลผลการค้นหา
  const [info, setInfo] = useState([]); //เก็บข้อมูลที่ fetch มาทั้งหมด
  const controller = new AbortController
  const signal = controller.signal

  const modifyData = (info) =>{
    const allData = info.map((value, index) => {
      return { title: value.name, id: index.toString() };
    });
    setSearchData([...allData]);
    setInfo([...allData]);
  }
  const fetchData = async () => {
    getLoad(navigation, authorize.token, fetchUrl, modifyData, signal)
  };
  useEffect(() => {
    fetchData();
  }, []);

  // เช็คว่า item นี้ถูกกดเลือกแล้วหรือยัง
  const isHave = (title) => {
    const index = filterData[focusData].findIndex((value) => value === title);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={["#385362", theme.mode === "dark" ? "#314799" : "#333"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
        style={[styles.tag, { opacity: isHave(item.title) ? 0.3 : 1 }]}
      >
        <TouchableOpacity
          onPress={() => {
            filterData[focusData].push(item.title);
            setFilterData(filterData);
            setModalVisible(!modalVisible);
          }}
          disabled={isHave(item.title) ? true : false}
        >
          <Text style={styles.tagText}>{item.title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  // function แสดงผลการค้นหา
  const inputHandle = (value) => {
    const valueUpper = value.toUpperCase();
    const filteredData = info.filter(
      (itemValue) => itemValue.title.toUpperCase().indexOf(valueUpper) > -1
    );
    return setSearchData(filteredData);
  };

  return (
    <Modal
      transparent={true}
      isVisible={modalVisible}
      animationIn={"zoomIn"}
      animationOut={"fadeOut"}
    >
      <View style={[MainStyle.centeredView, styles.extraModal]}>
        <SecondContainer style={[MainStyle.modalView, { padding: 0 }]}>
          <View
            style={[
              MainStyle.modalHeader,
              { padding: 10, alignItems: "center" },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TextPrimary style={{ padding: 12 }}>Cancel</TextPrimary>
            </TouchableOpacity>
          </View>
          <InputTextBg
            placeholder="Type to Search"
            placeholderTextColor="#AAA"
            style={[
              styles.textInput,
              { backgroundColor: theme.primaryBackground },
            ]}
            value={text}
            onChangeText={(value) => setText(value)}
            clearButtonMode="always"
            returnKeyType="search"
            onSubmitEditing={() => {
              inputHandle(text);
              Keyboard.dismiss();
            }}
          />
          <FlatList
            data={searchData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={data}
          />
        </SecondContainer>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  tag: {
    padding: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#777",
  },
  tagText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  textInput: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  extraModal: {
    marginTop: "50%",
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  flag: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});

export default modalSelect;
