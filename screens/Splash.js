import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Screen2 = () => {
  return (
    <View style={[styles.view, styles.viewLayout]}>
      <Image
        style={[styles.ckCm3200069711Icon, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/Splash1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
  ckCm3200069711Icon: {
    position: "absolute",
    top: 0,
    right: "0%",
    left: "0%",
    maxWidth: "100%",
  },
  view: {
    flex: 1,
  },
});

export default Screen2;
