import React, { useState } from "react";
import { FlatList } from "react-native";
import Homebar from "../components/homebar";
import CreatePost from "../components/post/createPost";
import Post from "../components/post/post";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const Home = ({ navigation }) => {
  const initData = [
    {
      id: "1",
      user: "Username",
      type: {
        image: "image",
        text: "",
      },
      date: "50m",
      like: true,
    },
    {
      id: "2",
      user: "Username",
      type: {
        image: "image",
        text: "I here too",
      },
      date: "50m",
      like: true,
    },
    {
      id: "3",
      user: "Username",
      type: {
        image: "",
        text: "Text",
      },
      date: "50m",
      like: false,
    },
  ];

  // useEffect(() =>{
  //   fetch("http://364edd12ecf8.ngrok.io/register/student")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  // }, [])

  // const addPost = (title) => {
  //   const newPost = { id, title, like: 0 };
  //   setPosts([newPost, ...posts]);
  //   id += 1;
  // };

  // const likePost = (id, status) => {
  //   const likePost = posts.filter((value) => id == value.id);
  //   const allPost = posts.filter((value) => id != value.id);
  //   if (status) {
  //     likePost[0].like -= 1;
  //   } else {
  //     likePost[0].like += 1;
  //   }
  //   allPost.push(...likePost);
  //   const allPostSorted = allPost.sort((a, b) => b.id - a.id);
  //   setPosts([...allPostSorted]);
  // };

  const renderPostItem = ({ item }) => {
    if (item.id == "1") {
      return (
        <React.Fragment>
          <CreatePost />
          <Post
            key={item.id}
            id={item.id}
            type={item.type}
            like={item.like}
            date={item.date}
            user={item.user}
          />
        </React.Fragment>
      );
    } else {
      return (
        <Post
          key={item.id}
          id={item.id}
          type={item.type}
          like={item.like}
          date={item.date}
          user={item.user}
        />
      );
    }
  };

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <FlatList
        data={initData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <Navbar navigation={navigation} /> */}
    </PrimaryContainer>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default Home;
