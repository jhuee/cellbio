import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  Text,

  View,
  
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Center, VStack, Pressable, Box,ScrollView, HStack, Circle} from "native-base";

import { useDispatch } from 'react-redux';
import { setItem } from '../src/actions';


const Frame9 = () => {
  const navigation = useNavigation();
  const items = ['스킨', '에센스', '크림', '샴푸', '바디워시', '클렌징'];
  const dispatch = useDispatch();

  const handlePress = (item) => {
    dispatch(setItem(item));
    navigation.navigate("Frame8");
  };


  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <StatusBar barStyle="default" />
  
      
      <ScrollView mt={150}
      >
           
      <VStack alignSelf={"center"} marginTop={4} space={5}>
      {items.map((item, index) => (
        <Pressable key={index} onPress={() => handlePress(item) } w={330}>
          <Box style={[styles.frameChild, styles.frameGroupPosition]} p={5} alignItems={"center"}>
            <Text style={styles.text1}>{item}</Text>
          </Box>
        </Pressable>
      ))}
      <HStack space={6} mt={15}>
      <Pressable
            onPress={() => navigation.navigate("Frame10")}
          >
            <Text style={[styles.my1, styles.textTypo]}>My 피부타입</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Recipe")}>
          <Text style={[ styles.textTypo]}>저장된 레시피</Text>
          </Pressable>
      </HStack>
    </VStack>
       
      </ScrollView>
      <Text style={[styles.text8, styles.textTypo]}>2023년 12월 18일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameGroupPosition: {
    left: "0%",
    top: 0,
    right: "0%",
  },
  frameParentPosition: {
    height: 69,
    left: "5%",
    right: "5%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  myPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  child: {
    width: "207.63%",
    top: -310,
    right: "-11.96%",
    left: "-95.67%",
    maxWidth: "100%",
    height: 820,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 160,
    left: 32,
    fontWeight: "700",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChild: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    height: 69,
  },
  text1: {
    color: Color.colorRosybrown,
    fontWeight: "600",
    fontFamily: FontFamily.pretendardLight,
    fontSize: FontSize.size_6xl,
  },
  rectangleParent: {
    height: 67,
  },
  frameChildPosition: {
    marginTop: -34.5,
    height: 69,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    top: "50%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  text2: {
    marginLeft: -32,
    left: "50%",
    marginTop: -19.5,
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: "50%",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  rectangleGroup: {
    top: 89,
  },
  rectangleContainer: {
    top: 180,
  },
  framePressable: {
    top: 271,
  },
  text5: {
    marginLeft: -43,
    left: "50%",
    marginTop: -19.5,
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: "50%",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  rectangleParent1: {
    top: 362,
  },
  rectangleParent2: {
    top: 453,
  },
  frameGroup: {
    height: 522,
  },
  my1: {
    left: 13,
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  my: {
    right: 197,
  },
  text7: {
    right: 13,
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  frame: {
    margin:5,
    top: 581,
    right: "7%",
    left: "7%",
    position: "absolute",
    flex:1,    
  },
  frameParent: {
    top: 120,
    alignContent: "center",
    flex:1
  },
  text8: {
    top: 128,
    left: 34,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Frame9;
