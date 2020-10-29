import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import Homebar from "../components/homebar";
import Chat from "../components/messenger/chat";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import Schema from "../schema";
import {useSelector} from 'react-redux'

const screenWidth = Math.round(Dimensions.get("window").width);

const Messenger = ({ navigation }) => {
	// const user_id = Schema.user;
	// const messages = Schema.data.message.filter((value) =>
	// 	value.user.includes(user_id)
	// );
		
	const [messages, setMessages] = useState("")
	const authorize = useSelector((state) => state.Authorize.authorize)
	const {token, userId} = authorize
	const url = 'http://localhost:3000/message'
	useEffect(() => {
			fetch(url, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				}
			}).then( async (response) =>{
				if(response.status === 200){
					const data = await response.json()
					setMessages(data)
				}
				else if(response.status === 401){
					navigation.navigate("Login")
				}
			})
	}, [authorize])

	if(messages){
		return(
			<Successed messages={messages} navigation={navigation} authorize={authorize}/>
		)
	}
	else{
		return(
			<ActivityIndicator />
		)
	}


};

const Successed = ({navigation, messages, authorize}) => {
	const renderItem = ({ item }) => {
		return (
		<Chat
			navigation={navigation}
			texts={item.message}
			lastMessage={item.lastMessage}
			id_interlocutor={item.interlocutor}
			authorize={authorize}
		/>
		);
	};

	return (
		<PrimaryContainer style={MainStyle.mainBackground}>
		<Homebar navigation={navigation} />
		<SafeAreaView style={stylesCondition()}>
			<FlatList
			data={messages}
			renderItem={renderItem}
			keyExtractor={(messages) => messages.id.toString()}
			/>
		</SafeAreaView>
		</PrimaryContainer>
	);
}

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default Messenger;
