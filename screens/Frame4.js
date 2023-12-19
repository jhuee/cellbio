import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame4 = () => {
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
            source={require("../assets/ellipse-49.png")}
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
            source={require("../assets/ellipse-4911.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        </View>
      </View>
      <Text style={[styles.text7, styles.textTypo]}>
        원하시는 용량을 선택해주세요
      </Text>
      <View style={styles.frameGroup}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View
            style={[styles.rectangleView, styles.rectangleParentPosition]}
          />
          <Text style={[styles.ml, styles.textTypo1]}>500ml</Text>
          <Image
            style={styles.frameChild4}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleParentPosition]}>
          <View
            style={[styles.rectangleView, styles.rectangleParentPosition]}
          />
          <Text style={[styles.ml, styles.textTypo1]}>1,000ml</Text>
          <Image
            style={styles.frameChild4}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View
          style={[styles.rectangleContainer, styles.rectangleParentPosition]}
        >
          <View
            style={[styles.rectangleView, styles.rectangleParentPosition]}
          />
          <Text style={[styles.ml, styles.textTypo1]}>3,000ml</Text>
          <Image
            style={styles.frameChild4}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
          <View
            style={[styles.rectangleView, styles.rectangleParentPosition]}
          />
          <Text style={[styles.ml, styles.textTypo1]}>10,000ml</Text>
          <Image
            style={styles.frameChild4}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.framePressable, styles.framePosition]}
        onPress={() => navigation.navigate("Frame3")}
      >
        <View style={[styles.frameChild11, styles.framePosition]} />
        <Text style={[styles.text8, styles.textPosition]}>선택 완료</Text>
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text9, styles.textPosition]}>용량 선택</Text>
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
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleParentPosition: {
    height: 74,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  framePosition: {
    height: 62,
    bottom: 0,
    left: "0%",
    position: "absolute",
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
  frameChild: {
    top: 2,
    left: 0,
    height: 27,
  },
  text: {
    left: 9,
    width: 9,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
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
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
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
  rectangleView: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    top: 0,
  },
  ml: {
    top: 21,
    left: 54,
    color: Color.colorRosybrown,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  frameChild4: {
    top: 29,
    left: 16,
    width: 17,
    height: 17,
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
    top: 0,
  },
  rectangleGroup: {
    top: 118,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  rectangleContainer: {
    top: 236,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  rectangleParent1: {
    top: 354,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  frameGroup: {
    width: "89.57%",
    top: 278,
    right: "4.83%",
    left: "5.6%",
    height: 428,
    position: "absolute",
  },
  frameChild11: {
    backgroundColor: Color.colorSilver,
    right: "0%",
    bottom: 0,
    width: "100%",
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
  framePressable: {
    width: "100.76%",
    right: "-0.76%",
  },
  text9: {
    marginLeft: -46.5,
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
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 947,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame4;
