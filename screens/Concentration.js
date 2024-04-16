import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { HStack, VStack, Circle, Text, Radio, ZStack, Box, Divider, extendTheme, useTheme } from "native-base";
import { setConcentration } from "../src/actions";
import { useDispatch } from "react-redux";

const Frame5 = () => {
  const navigation = useNavigation();
  const num = [
    { color: "#BCB1B1", text: '1' },
    { color:"#BCB1B1", text: '2' },
    { color:"#BCB1B1", text: '3' },
    { color:"#8E6868", text: "4" },
    { color:"#BCB1B1", text: '5' },
    { color:"#BCB1B1", text: '6' },
    { color:"#BCB1B1", text: '7' },
    { color:"#BCB1B1", text: '8' },
  ];

  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setConcentration(value));
    console.log(value)
    navigation.navigate("Frame2");
  };
  const ccValues = ["아주 묽게", "묽게", "적당하게", "되직하게", "아주 되직하게"];

  const [value, setValue] = useState(ccValues[0]);
  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Text style={[styles.text7, styles.textTypo]}>
        추출물 농도를 조절할 수 있어요
      </Text>

     <HStack mt={3} ml={3}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo2]}>추출물 농도 조절</Text>
      </HStack>

           <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"28px"} bg={item.color}>
          <Text style={[ styles.textTypo1]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>

      
        <Radio.Group value={value} colorScheme={"light"} defaultValue="1"  onChange={nextValue => {setValue(nextValue)}} >
      <VStack  mt={150} ml={10}>
      {ccValues.map((text, index) =>
      <Box key={index} mb={-5}>
        <Radio  value={text} my={1} size={"lg"} >
          <Text style={styles.text13}>{text}</Text>
        </Radio>
        {index !== 4 && <Divider bg={"#B2A2A2"} thickness={3} ml={3} h={"20"} mt={-1} mb={-2}orientation="vertical"/>}  {/* 마지막 라디오 버튼에는 선이 없습니다. */}
      </Box>
)}

      </VStack>
        </Radio.Group>



      {/* 선택 완료 버튼 */}
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={handlePress}
      >
        <View style={[styles.rectangleView, styles.parentPosition]} />
        <Text style={[styles.text8, styles.textPosition]}>선택 완료</Text>
      </Pressable>


    </View>
  );
};

const theme = extendTheme({
  colors : {
    brown : '#B2A2A2',
  }
})
const styles = StyleSheet.create({
  frameParentLayout: {
    width: 27,
    position: "absolute",
  },
  titleText:{
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
},
  textTypo1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo2: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo: {
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleLayout: {
    height: 62,
    bottom: 0,
  },
  parentPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    marginTop: -20,
    top: "50%",
    position: "absolute",
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
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
  rect:{
    width:600,
    
  },
  frameChild: {
    top: 2,
    left: 0,
    height: 27,
  },
  text: {
    left: 9,
    width: 9,
  },
  ellipseParent: {
    marginLeft: -106.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  text1: {
    left: 7,
    width: 12,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseContainer: {
    marginLeft: -44.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  frameView: {
    marginLeft: -13.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent1: {
    marginLeft: 17.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent2: {
    marginLeft: 79.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent3: {
    marginLeft: 48.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  frameParent: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  text7: {
    top: 160,
    left: 32,
    color: Color.colorBlack,
  },
  pressable: {
    borderRadius: Border.br_xl,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  wrapper: {
    left: 50  ,
    top: 258,
    width: 23,
    height: 613,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorSilver,
    height: 62,
    bottom: 0,
    right: "0%",
  },
  text8: {
    marginLeft: -47,
    fontWeight: "500",
    color: Color.colorGray_300,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    marginTop: -20,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
  },
  text13: {
    fontWeight:"500",
    color: Color.colorGray_300,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleParent: {
    width: "100.76%",
    right: "-0.76%",
    left: "0%",
    height: 62,
    bottom: 0,
    position: "absolute",
  },
  text9: {
    marginLeft: -81.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
  },
  chevronLeftIcon: {
    width: 41,
    height: 41,
    overflow: "hidden",
  },

  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame5;
