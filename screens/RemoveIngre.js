import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { HStack,Circle, Text} from "native-base";
const Frame = () => {
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
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
     
      {/* 단계 */}
      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"25px"} bg={item.color}>
          <Text style={[ styles.textTypo]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
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
        제거하고 싶은 성분을 선택해주세요dh
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
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
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
