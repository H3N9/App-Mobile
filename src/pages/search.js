import React, {useState, useEffect} from "react";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions, ActivityIndicator, FlatList, View, Text } from "react-native";
import { PrimaryContainer, SecondContainer } from "../style/themeComponent";
import { Value } from "react-native-reanimated";
import {useSelector} from 'react-redux'
import { useIsFocused } from "@react-navigation/native"
import schema from "../schema"

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const {token} = authorize
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([])
  const url = schema.url
  const isFocused = useIsFocused()

  useEffect(() =>{
    fetch(url+"/search/user",{
      method: 'GET',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      }     
    })
    .then((response) => response.json())
    .then((json) =>{
      setUsers(json)
      setLoading(false)
    })
  }, [isFocused])

  const renderSuggestion = ({ item, index }) =>{
    return (<Suggestion user={item} key={index} navigation={navigation} />)
    // return (
    //   <React.Fragment>
    //     {item == id.length - 2 ? <View style={{ width: 10 }} /> : null}
    //     <Suggestion user={item} navigation={navigation} />
    //     {item == id.length ? <View style={{ width: 10 }} /> : null}
    //   </React.Fragment>
    // );
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      {isLoading ? (<ActivityIndicator/>) : (
      <FlatList style={stylesCondition()}
        data={users}
        renderItem={renderSuggestion}
        keyExtractor={item => item.id.toString()}
      />)}
    </PrimaryContainer>

    // <PrimaryContainer style={MainStyle.mainBackground}>
    //   <SearchBar />
    //   <SecondContainer style={{ flex: 1 }}>
    //     <FlatList
    //       data={users}
    //       renderItem={renderSuggestion}
    //       keyExtractor={item => item.id.toString()}
    //       horizontal={true}
    //       showsHorizontalScrollIndicator={false}
    //       snapToInterval={screenWidth * 0.68 + 17 * 2}
    //       decelerationRate="fast"
    //     />
    //   </SecondContainer>
    // </PrimaryContainer>
      /* <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"} navigation={navigation} />
        <Suggestion userId={"2"} navigation={navigation} />
        <Suggestion userId={"3"} navigation={navigation} />
      </ScrollView> */
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default Search;
