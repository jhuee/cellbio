import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.ellipseParent, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>2</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>3</Text>
        </View>
        <View style={[styles.frameView, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4911.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>4</Text>
        </View>
        <View style={[styles.ellipseParent1, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
        </View>
        <View style={[styles.ellipseParent2, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>7</Text>
        </View>
        <View style={[styles.ellipseParent3, styles.frameParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        </View>
      </View>
      <Text style={[styles.text7, styles.textTypo]}>
        추출물 농도를 조절할 수 있어요
      </Text>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#e7d6d6", "#795e5e"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Frame")}
        />
      </LinearGradient>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <View style={[styles.rectangleView, styles.parentPosition]} />
        <Text style={[styles.text8, styles.textPosition]}>선택 완료</Text>
      </Pressable>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text9, styles.textPosition]}>
          추출물 농도 조절
        </Text>
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
  frameParentLayout: {
    width: 27,
    position: "absolute",
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
  textTypo: {
    fontWeight: "700",
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
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_xl,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  wrapper: {
    left: 39,
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

export default Frame5;
