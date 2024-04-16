import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.text}>로그인</Text>
      <Text style={[styles.text1, styles.textPosition]}>
        <Text style={styles.text2}>회원가입</Text>
        <Text style={styles.text3}>{`이 
완료되었습니다.`}</Text>
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildPosition]}
        onPress={() => navigation.navigate("Screen1")}
      >
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <Text style={[styles.text4, styles.textPosition]}>확인</Text>
      </Pressable>
      <View style={[styles.ellipseParent, styles.frameItemPosition]}>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-26.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  frameChildPosition: {
    height: 67,
    right: "0%",
    position: "absolute",
  },
  frameItemPosition: {
    height: 100,
    width: 100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameInnerPosition: {
    transform: [
      {
        rotate: "-45.5deg",
      },
    ],
    width: 5,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 481,
    left: 164,
    textAlign: "center",
    position: "absolute",
    color: Color.colorWhite,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.pretendardLight,
  },
  text3: {
    fontFamily: FontFamily.pretendardLight,
  },
  text1: {
    marginTop: -56,
    marginLeft: -110.5,
    fontSize: FontSize.size_16xl,
    lineHeight: 56,
    color: Color.colorDarkslategray_100,
  },
  frameChild: {
    top: 0,
    left: "0%",
    backgroundColor: Color.colorDarksalmon,
    width: "100%",
  },
  text4: {
    marginTop: -19.5,
    marginLeft: -54.5,
    width: 110,
    color: Color.colorWhite,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleParent: {
    width: "104.07%",
    bottom: 0,
    left: "-4.07%",
  },
  frameItem: {
    marginTop: -50,
    marginLeft: -50,
  },
  frameInner: {
    marginTop: -0.4,
    marginLeft: -25,
    height: 30,
  },
  rectangleView: {
    marginTop: -18.3,
    marginLeft: 20.3,
    height: 45,
  },
  ellipseParent: {
    marginTop: -176,
    marginLeft: -50.5,
  },
  view: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame11;
