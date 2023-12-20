import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { ScrollView,Box, VStack, HStack, Text, Center,Pressable, Circle } from "native-base";
import { useSelector } from 'react-redux';
import { setFormulation } from "../src/actions";
import { useDispatch } from 'react-redux';

const Frame8 = () => {
  const navigation = useNavigation();
  const num = [
    { color: "#8E6868", text: '1' },
    { color:"#BCB1B1", text: '2' },
    { color:"#BCB1B1", text: '3' },
    { color:"#BCB1B1", text: "4" },
    { color:"#BCB1B1", text: '5' },
    { color:"#BCB1B1", text: '6' },
    { color:"#BCB1B1", text: '7' },
  ];
  const kk = useSelector(state => state.item);
  const items = [
    {
      text: "#리치한 영양감",
      image: require("../assets/KakaoTalk_20231117_030021643.gif"),
    },
    {
      text: "#부드러운 로션 제형",
      image: require("../assets/KakaoTalk_20231117_030225880.gif"),
    },
    {
      text: "#도톰한 실키 제형",
      image: require("../assets/KakaoTalk_20231117_030410163.gif"),
    },
    {
      text: "#매끈한 밀키 제형",
      image: require("../assets/KakaoTalk_20231117_030610721.gif"),
    },
    {
      text: "#촉촉한 워터 제형",
      image: require("../assets/KakaoTalk_20231117_030756483.gif"),
      onPress: () => navigation.navigate("Frame7"),
    },
  ];

  const dispatch = useDispatch();
  const handlePress = (item) => {
    dispatch(setFormulation(item));
    navigation.navigate("Frame7");
  };
  
  return (
    <View style={styles.view}>
    
      <Image
        style={[styles.child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo3]}>제형 고르기</Text>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
      </View>
      <Text style={[styles.text6, styles.textTypo3]}>
        원하는 제형을 골라보세요
      </Text>
      <ScrollView mt={200}
      >
           
      <VStack alignSelf={"center"} marginTop={4} space={1}>
        {items.map((item, index) =>(
        <Pressable  onPress={() =>handlePress(item.text) } w={360}>
          <Box p={5} alignItems={"center"}>
          <Image
              style={[
                styles.wrapperKakaotalk20231117030,
                styles.iconPosition,
                styles.wrapperPosition,
              ]}
              contentFit="cover"
              source={item.image}
            />
  
          <Text style={[styles.text1, styles.textTypo2]}pt={2} pl={1}>{item.text}</Text>
          </Box>
        </Pressable>
        ))}

    </VStack>
      </ScrollView>
      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"25px"} bg={item.color}>
          <Text style={[ styles.textTypo]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  wrapperPosition1: {
    height: 172,
    left: "1.12%",
    width: "98.88%",
    top: "50%",
    right: "0%",
    position: "absolute",
  },
  wrapperPosition: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 172,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconPosition: {
    transform: [
      {
        scale: 1.116,
      },
    ],
    objectFit: "contain",
    height: "100%",
    width: "100%",
  },
  textTypo2: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  framePosition: {
    right: "1.12%",
    height: 172,
    width: "98.88%",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  textTypo1: {
    top: 10,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  ellipseParentLayout: {
    width: 27,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  child: {
    width: "207.63%",
    top: -323,
    right: "-3.82%",
    left: "-103.82%",
    height: 820,
    position: "absolute",
  },
  text: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    top: "50%",
    marginTop: -20,
  },
  chevronLeftIcon: {
    width: 41,
    height: 41,
    left: 11,
    top: "50%",
    marginTop: -20,
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 55,
    height: 46,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  kakaotalk202311170300216431Icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapperKakaotalk20231117030: {
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text1: {
    top: 11,
    left: 11,
  },
  wrapperKakaotalk20231117030Parent: {
    marginTop: 326,
  },
  kakaotalk202311170302258801Icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  text2: {
    top: 5,
    left: 8,
  },
  wrapperKakaotalk20231117030Group: {
    marginTop: 120,
  },
  kakaotalk202311170304101631Icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  text3: {
    left: 12,
  },
  wrapperKakaotalk20231117030Container: {
    marginTop: -86,
    right: "1.12%",
  },
  kakaotalk202311170306107211Icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameView: {
    marginTop: -292,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_3xs,
    marginTop: -86,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text5: {
    left: 15,
  },
  framePressable: {
    marginTop: -498,
  },
  frameParent: {
    width: "90.61%",
    top: 258,
    right: "4.3%",
    left: "5.09%",
    height: 996,
    position: "absolute",
  },
  text6: {
    top: 160,
    left: 32,
    color: Color.colorBlack,
  },
  frameChild: {
    top: 2,
    left: 0,
    height: 27,
  },
  text7: {
    left: 9,
    width: 9,
  },
  ellipseParent: {
    marginLeft: -106.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  text8: {
    left: 7,
    width: 12,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseContainer: {
    marginLeft: -44.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent1: {
    marginLeft: -13.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent2: {
    marginLeft: 17.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent3: {
    marginLeft: 48.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent4: {
    marginLeft: 79.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1318,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame8;
