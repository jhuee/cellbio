import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={[styles.ellipseGroup, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text, styles.textTypo2]}>1</Text>
      </View>
      <View style={[styles.ellipseContainer, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>2</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>3</Text>
      </View>
      <View style={[styles.ellipseParent1, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>4</Text>
      </View>
      <View style={[styles.ellipseParent2, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-4911.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>5</Text>
      </View>
      <View style={[styles.ellipseParent3, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>7</Text>
      </View>
      <View style={[styles.ellipseParent4, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-49.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>6</Text>
      </View>
      <Text style={[styles.text7, styles.textTypo1]}>전성분 확인</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-427320700.png")}
        />
      </Pressable>
      <Text style={[styles.text8, styles.textTypo1]}>
        제거하고 싶은 성분을 선택해주세요
      </Text>
      <Pressable
        style={styles.frameItem}
        onPress={() => navigation.navigate("Frame4")}
      />
      <Text style={[styles.text9, styles.textTypo]}>{`○ 정제수,
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
      <View style={[styles.frameInner, styles.groupChildPosition]} />
      <Text style={[styles.text10, styles.textTypo]}>선택 완료</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 30,
    top: 125,
    width: 27,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    top: 0,
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    height: 30,
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  frameChild: {
    top: -316,
    left: -384,
    width: 816,
    height: 820,
    position: "absolute",
  },
  groupChild: {
    top: 2,
    height: 27,
    width: 27,
    left: 0,
  },
  text: {
    left: 9,
    width: 9,
  },
  ellipseGroup: {
    left: 30,
  },
  text1: {
    left: 7,
    width: 12,
  },
  ellipseContainer: {
    left: 61,
  },
  groupView: {
    left: 92,
  },
  ellipseParent1: {
    left: 123,
  },
  ellipseParent2: {
    left: 154,
  },
  ellipseParent3: {
    left: 216,
  },
  ellipseParent4: {
    left: 185,
  },
  text7: {
    top: 41,
    left: 54,
    color: Color.colorDarkslategray_100,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 16,
    top: 47,
    width: 16,
    height: 28,
    position: "absolute",
  },
  text8: {
    top: 160,
    left: 32,
    color: Color.colorBlack,
  },
  frameItem: {
    marginLeft: -176.5,
    top: 220,
    left: "50%",
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
    width: 352,
    height: 635,
    position: "absolute",
  },
  text9: {
    top: 244,
    left: 39,
    color: "#414141",
    width: 325,
    fontWeight: "500",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  frameInner: {
    top: 885,
    backgroundColor: Color.colorSilver,
    width: 396,
    height: 62,
  },
  text10: {
    top: 896,
    left: 151,
    color: Color.colorGray_300,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
  },
  ellipseParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 947,
    overflow: "hidden",
    display: "none",
    width: "100%",
  },
});

export default Frame;
