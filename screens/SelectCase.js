import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Modal } from "react-native";
import Component from "../components/Component";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { HStack, VStack, Circle, Text, ScrollView, Pressable } from "native-base";
import { useDispatch } from "react-redux";
import { setCase } from "../src/actions";
import { useNavigation } from "@react-navigation/native";

const Frame3 = () => {
  const [frameButtonVisible, setFrameButtonVisible] = useState(false);
  const navigation = useNavigation();

  const openFrameButton = useCallback(() => {
    setFrameButtonVisible(true);
  }, []);

  const closeFrameButton = useCallback(() => {
    setFrameButtonVisible(false);
  }, []);
  const num = [
    { color:"#BCB1B1", text: '1' },
    { color:"#BCB1B1", text: '2' },
    { color:"#BCB1B1", text: '3' },
    { color:"#BCB1B1", text: "4" },
    { color:"#BCB1B1", text: '5' },
    { color:"#BCB1B1", text: '6' },
    { color: "#8E6868", text: '7' },
    { color: "#BCB1B1", text: '8' },
  ];

  const typeValues = [
    { text: '스포이드 타입', source: require("../assets/ck-tc02860000772-2.png") },
    { text: '튜브 타입', source: require("../assets/ck-tc02860000732-2.png") },
    { text: '원형 타입', source: require("../assets/ck-tc02860000795-2.png") },
    { text: '병 타입', source: require("../assets/ck-tc02860000811-1.png") },
  ];

  const dispatch = useDispatch();
  const handlePress = (bottle) => {
    dispatch(setCase(bottle));
    console.log(bottle)
    navigation.navigate("Confirm");
  };
  return (
    <>
      <View style={styles.view}>
        <Image
          style={[styles.child, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-48.png")}
        />

       <Text style={[styles.text7, styles.textTypo]}>
          담을 케이스를 고르세요
        </Text>

      
      <HStack mt={3} ml={3}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo3]}>케이스 선택</Text>
      </HStack>

      <View style={styles.frameGroup1}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"28px"} bg={item.color}>
          <Text style={[ styles.textTypo2]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>
       
          <ScrollView mt={150}>
            <VStack alignSelf={"center"} space={5} mt={2}>
            {typeValues.map((type, index) => (
              <Pressable onPress={()=> handlePress(type.text)} style={styles.parentPosition} w={360}>
            <Image
              style={ styles.iconLayout}
              contentFit="cover"
              source={type.source}
            />
            <Text style={styles.text8}>{type.text}</Text>
              </Pressable>
            ))}
            </VStack>
          </ScrollView>
          
      </View>

      <Modal animationType="fade" transparent visible={frameButtonVisible}>
        <View style={styles.frameButtonOverlay}>
          <Pressable style={styles.frameButtonBg} onPress={closeFrameButton} />
          <Component onClose={closeFrameButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  titleText:{
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
},  
textTypo3: {
  fontFamily: FontFamily.pretendardLight,
  fontWeight: "600",
  lineHeight: 40,
  fontSize: FontSize.size_6xl,
},
  ellipseParentPosition: {
    width: 27,
    marginTop: -15,
    left: "50%",
    top: "50%",
    height: 30,
    position: "absolute",
  },
  parentPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    top: 160,
    color: Color.colorBlack,
    left: 32,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo2: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo1: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
    position: "absolute",
  },

  parentPosition: {
    height: 153,
  },
  iconLayout: {
    borderRadius: Border.br_3xs,
    height: 153,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text12Position: {
    marginTop: -20,
    top: "50%",
    position: "absolute",
  },
  child: {
    width: "207.63%",
    top: -316,
    right: "-9.92%",
    left: "-97.71%",
    height: 820,
    position: "absolute",
  },
  frameChild: {
    top: 2,
    height: 27,
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    width: "33.33%",
    left: "33.33%",
  },
  ellipseParent: {
    marginLeft: -106.5,
  },
  text1: {
    width: "44.44%",
    left: "25.93%",
  },
  ellipseGroup: {
    marginLeft: -75.5,
  },
  ellipseContainer: {
    marginLeft: -44.5,
  },
  frameView: {
    marginLeft: -13.5,
  },
  ellipseParent1: {
    marginLeft: 17.5,
  },
  ellipseParent2: {
    marginLeft: 79.5,
  },
  ellipseParent3: {
    marginLeft: 48.5,
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
  frameButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ckTc028600007722Icon: {
    top: 0,
  },
  text8: {
    marginTop: -19.5,
    left: "4.55%",
    color: Color.colorGray_200,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  ckTc028600007722Parent: {
    top: 0,
  },
  ckTc028600007322Icon: {
    marginTop: -76.5,
    top: "50%",
    borderRadius: Border.br_3xs,
  },
  ckTc028600007322Parent: {
    top: 178,
  },
  ckTc028600007952Parent: {
    top: 356,
  },
  ckTc028600008111Parent: {
    top: 534,
  },
  frameGroup1: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  frameGroup: {
    top: 258,
    flex: 1
  },
  text12: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    marginTop: -20,
  },
  chevronLeftIcon: {
    width: 41,
    height: 41,
    overflow: "hidden",
  },
  parent: {
    top: 55,
    height: 46,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame3;
