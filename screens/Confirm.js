import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {Box, VStack, HStack, Text, Pressable, ScrollView, Checkbox, Circle} from "native-base";
import { setConcern } from "../src/actions";
import { useSelector } from "react-redux";
const Confirm = () => {
  const navigation = useNavigation();
 
  const formulation = useSelector(state => state.formulation);
  const base = useSelector(state => state.base);
  const concern = useSelector(state => state.concern);
  const concentration = useSelector(state => state.concentration);
  const volume = useSelector(state => state.volume);
  const bottle = useSelector(state => state.bottle);


  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text17, styles.text17Position]}>
          피부 고민 별 선택사항
        </Text>
        <Text>
            {formulation},
            {base},
            {concern},
            {volume},
            {bottle}
        </Text>
        <Image
          style={[styles.chevronLeftIcon, styles.text17Position]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>

      <Text style={styles.text7}>피부 고민을 선택해주세요</Text>
      <Text style={styles.n}>최대 N개 가능 Selected: </Text>



    <Pressable
        style={[styles.rectangleView]}
    >
        <Text style={styles.text8}>선택 완료</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentPosition: {
    width: 27,
    left: "50%",
    marginTop: -15,
    top: "50%",
    height: 30,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    top: 0,
    height: 30,
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
  },
  rectanglePosition: {
    height: 62,
    bottom: 0,
  },
  parentPosition: {
    width: "100%",
  },
  rectangleParentLayout: {
    height: 112,
    width: 352,
  },
  frameChildLayout: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    height: 112,
  },
  textTypo: {
    color: Color.colorRosybrown,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  textLayout: {
    width: 287,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  textPosition: {
    left: 49,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  text17Position: {
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
  frameChild: {
    height: 27,
    width: 27,
  },
  text: {
    left: 9,
    width: 9,
  },
  ellipseParent: {
    marginLeft: -106.5,
    left: "50%",
    marginTop: -15,
  },
  text1: {
    left: 7,
    width: 12,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseContainer: {
    marginLeft: -44.5,
    left: "50%",
    marginTop: -15,
  },
  frameView: {
    marginLeft: -13.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent1: {
    marginLeft: 17.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent2: {
    marginLeft: 79.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent3: {
    marginLeft: 48.5,
    left: "50%",
    marginTop: -15,
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
    color: Color.colorBlack,
    left: 32,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorSilver,
    height: 82,
  
   },
  text8: {
    color: Color.colorGray_300,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.pretendardLight,
    textAlign: "center",
    marginTop: 15
  },
  rectangleParent: {
    width: "100%",

    bottom: 0,
  },
  n: {
    top: 196,
    color: "#464646",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    left: 32,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  frameChild4: {
    width: 352,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  text9: {
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  text10: {
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  frameChild5: {
    top: 48,
    left: 12,
    width: 17,
    height: 17,
    position: "absolute",
  },
  rectangleGroup: {
    top: 134,
  },
  rectangleContainer: {
    top: 268,
  },
  text12: {
    color: Color.colorRosybrown,
    top: 15,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  text13: {
    width: 296,
    top: 47,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  rectangleParent1: {
    top: 536,
  },
  rectangleParent2: {
    top: 402,
  },
  frameChild12: {
    marginTop: -56,
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    top: "50%",
  },
  framePressable: {
    top: 0,
    height: 112,
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  text17: {
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    marginTop: -20,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    marginLeft: -106.5,
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
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1026,
    overflow: "hidden",
    width: "100%",
  },
});

export default Confirm;
