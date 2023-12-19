import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame10 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{`나는 화장을 하면
피부가 좋다는 말을 자주 듣는 편이다.`}</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text style={styles.text1}>이전으로</Text>
      </View>
      <View style={[styles.ellipseParent, styles.childLayout]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-28.png")}
        />
        <Text style={styles.q1}>Q1</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.frameInner, styles.frameInnerShadowBox]} />
          <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-427320702.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.frameInnerShadowBox]} />
          <Text style={[styles.no, styles.noTypo]}>No</Text>
          <Image
            style={styles.frameChild1}
            contentFit="cover"
            source={require("../assets/group-427320704.png")}
          />
        </View>
      </View>
      <StatusBar style={styles.childLayout} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 46,
    position: "absolute",
  },
  rectanglePosition: {
    width: 149,
    top: 0,
    position: "absolute",
  },
  frameInnerShadowBox: {
    height: 221,
    elevation: 10,
    shadowRadius: 10,
    width: 149,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  noTypo: {
    top: 30,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0.5,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  text: {
    marginTop: -213,
    marginLeft: -180.5,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    top: 0,
    left: "0%",
    right: "0%",
    height: 48,
    position: "absolute",
    width: "100%",
  },
  text1: {
    marginTop: -20,
    marginLeft: -44,
    fontWeight: "500",
    color: Color.colorDimgray_200,
    textAlign: "left",
    letterSpacing: 0.5,
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 162,
    width: "79.39%",
    right: "10.43%",
    left: "10.18%",
    height: 48,
    top: "50%",
    position: "absolute",
  },
  frameItem: {
    left: 0,
    height: 46,
    width: 46,
    top: 0,
    position: "absolute",
  },
  q1: {
    top: 3,
    left: 7,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  ellipseParent: {
    marginTop: -289,
    marginLeft: -23.5,
    width: 46,
    height: 46,
    left: "50%",
    top: "50%",
  },
  frameInner: {
    backgroundColor: "rgba(246, 161, 121, 0.8)",
  },
  yes: {
    left: 52,
  },
  groupIcon: {
    top: 98,
    left: 11,
    width: 126,
    height: 127,
    position: "absolute",
  },
  rectangleGroup: {
    right: 0,
    height: 225,
  },
  rectangleView: {
    backgroundColor: "rgba(210, 210, 210, 0.8)",
  },
  no: {
    left: 58,
  },
  frameChild1: {
    top: 110,
    left: 24,
    width: 101,
    height: 117,
    position: "absolute",
  },
  rectangleContainer: {
    right: 188,
    height: 227,
  },
  frameParent: {
    marginTop: -95,
    marginLeft: -166.5,
    width: 337,
    height: 227,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame10;
