import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import MainStyle from "../../style/mainStyle";
import path from '../../path'
import { TextPrimary } from "../../style/themeComponent"
import {getLoad} from '../../fetch'
import { useIsFocused } from '@react-navigation/native'

const Chat = ({ navigation, lastMessage, id_interlocutor, texts, authorize, room }) => {

	const [interlocutor, setInterlocutor] = useState()
  	const url = path.urlSearchUser+id_interlocutor
	const isFocused = useIsFocused()

	const controller = new AbortController
    const signal = controller.signal
	useEffect(() => {
    	getLoad(navigation, authorize.token, url, setInterlocutor, signal)
  	}, [isFocused])
  
	if(interlocutor){
		return(
			<Successed  navigation={navigation}
				texts={texts}
				lastMessage={lastMessage}
				interlocutor={interlocutor}
        		room={room}
        		userId={authorize.userId}/>
		)
	}
	else{
		return(
			<ActivityIndicator  />
		)
  }
  

  
};

const Successed = ({ navigation, lastMessage, interlocutor, texts, room, userId }) => {
	

	const setFormatDate = (dateString) =>{
		const appendZero = (n) =>{
			return n < 10? "0"+n:n
		}
		if(dateString){
			const date = new Date(lastMessage.createdAt)
			const minute = appendZero(date.getMinutes())
			const hour = appendZero(date.getHours())
			const day = appendZero(date.getDate())
			const month = appendZero(date.getMonth()+1);
			return `${day}/${month} ${hour}:${minute}`
		}
		return ""
	}

	const date = setFormatDate(lastMessage.createdAt)
	const usernameAnother = interlocutor.username;
	const { image } = interlocutor

	return (
		<TouchableOpacity
		onPress={() =>
			navigation.navigate("ChatRoom", {
			initialTexts: texts,
			interlocutor: interlocutor,
			room:room,
			userId:userId
			})
		}
		>
		<View style={styles.chatContainer}>
			<View>
			<View style={MainStyle.shadow}>
				<Image
				style={[
					{
					width: 70,
					height: 70,
					borderRadius: 50,
					backgroundColor: "#323223",
					},
				]}
				source={{uri: path.urlImage+image}}
				/>
			</View>
			</View>
			<View style={{ flex: 1, marginHorizontal: 10 }}>
			<View
				style={{ flexDirection: "row", justifyContent: "space-between" }}
			>
				<TextPrimary style={[MainStyle.textBold, {fontWeight: "700", fontSize: 15}]}>
				{interlocutor.firstName} {interlocutor.lastName}
				</TextPrimary>
				<TextPrimary>{date}</TextPrimary>
			</View>
			<Text style={MainStyle.textGray}>{lastMessage.reply||""}</Text>
			</View>
		</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
	marginTop: 10,
	marginBottom: 5
  },
});

export default Chat;
