import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component = ({ onClose }) => {
  return (
    <View style={[styles.view, styles.viewLayout]}>
      <Image
        style={[styles.child, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Text style={styles.text}>선택 완료</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  child: {
    width: "207.63%",
    top: -316,
    right: "-9.92%",
    left: "-97.71%",
    height: 1000,
    position: "absolute",
  },
  text: {
    top: 87,
    left: 156,
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.pretendard,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 500,
    maxHeight: "100%",
  },
});

export default Component;
