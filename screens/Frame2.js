import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { HStack, VStack, Circle, Text } from "native-base";

const Frame2 = () => {
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
  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"25px"} bg={item.color}>
          <Text style={[ styles.textTypo1]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>
      <Text style={[styles.text7, styles.textTypo]}>
        제거하고 싶은 성분을 선택해주세요
      </Text>
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Frame8")}
      />
      <Text style={[styles.text8, styles.textTypo]}>{`○ 정제수,
○ 글리세린,
○ 사이클로헥사실록세인,
○ 스쿠알란,
○ 비스-피이지-18메틸에텔디메틸실란,
○ 수크로오스스테아레이트,
○ 스테아릴아코올,
○ 피이지-8스테아레이트, 펜타에리스리틸테트라에칠헥사노에이트,
○ 미리스틸미리스테이트,
○ 우레아,
○ 살구씨오일,
○ 페놀시에탄올,
○ 아보카도 오일`}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Frame4")}
      >
        <View style={[styles.rectangleView, styles.parentPosition]} />
        <Text style={[styles.text9, styles.textPosition]}>선택 완료</Text>
      </Pressable>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text10, styles.textPosition]}>전성분 확인</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseGroupPosition: {
    width: 27,
    top: "50%",
    marginTop: -15,
    left: "50%",
    height: 30,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    position: "absolute",
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
  child: {
    width: "207.63%",
    top: -316,
    right: "-9.92%",
    left: "-97.71%",
    maxWidth: "100%",
    height: 820,
    position: "absolute",
    overflow: "hidden",
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  frameChild: {
    top: 2,
    height: 27,
    left: 0,
    width: 27,
    position: "absolute",
  },
  text: {
    left: 9,
    width: 9,
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    top: 0,
    height: 30,
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
  ellipseParent: {
    marginLeft: -106.5,
  },
  text1: {
    left: 7,
    width: 12,
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    top: 0,
    height: 30,
    position: "absolute",
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
  groupView: {
    top: 0,
    left: 0,
    width: 27,
    height: 30,
    position: "absolute",
  },
  groupWrapper: {
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
    marginLeft: -171.5,
    top: 160,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  item: {
    marginLeft: -162.5,
    top: 258,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 324,
    height: 546,
    left: "50%",
    position: "absolute",
  },
  text8: {
    marginLeft: -134.5,
    top: 305,
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "300",
    width: 269,
  },
  rectangleView: {
    backgroundColor: Color.colorSilver,
    height: 62,
    bottom: 0,
    right: "0%",
  },
  text9: {
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
  rectangleParent: {
    width: "100.76%",
    right: "-0.76%",
    left: "0%",
    height: 62,
    bottom: 0,
    position: "absolute",
  },
  text10: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    marginTop: -20,
    left: "50%",
  },
  chevronLeftIcon: {
    left: 11,
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
    height: 947,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame2;
