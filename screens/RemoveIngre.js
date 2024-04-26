import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { HStack, Circle, Text } from "native-base";
const Frame = () => {
  const navigation = useNavigation();
  const num = [
    { color: "#8E6868", text: "1" },
    { color: "#BCB1B1", text: "2" },
    { color: "#BCB1B1", text: "3" },
    { color: "#BCB1B1", text: "4" },
    { color: "#BCB1B1", text: "5" },
    { color: "#BCB1B1", text: "6" },
    { color: "#BCB1B1", text: "7" },
  ];
  const formulation = useSelector((state) => state.formulation);
  const formulationInfo = {
    스킨: "스킨은 피부에 수분을 공급하고, 이후에 사용할 제품들이 더 잘 흡수되도록 도와주는 역할을 합니다.",
    에센스:
      "에센스는 피부에 깊숙이 침투하여, 피부를 촉촉하게 유지하고 피부 밸런스를 맞춰줍니다.",
    크림: "크림은 피부를 보호하는 마지막 단계로, 피부에 필요한 영양을 공급하고 수분을 잠가줍니다.",
    샴푸: "샴푸는 머리카락과 두피를 깨끗이 하는 역할을 합니다.",
    바디워시: "바디워시는 몸의 노폐물을 제거하고 피부를 상쾌하게 해줍니다.",
    클렌징: "클렌징은 피부의 노폐물과 메이크업을 제거하는 첫번째 단계입니다.",
  };
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
              <Text style={[styles.textTypo]}>{item.text}</Text>
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
        제거하고 싶은 성분을 선택해주세요
      </Text>
      <Pressable
        style={styles.frameItem}
        onPress={() => navigation.navigate("Frame4")}
      />
      <Text style={[styles.text9, styles.textTypo]}>
        {" "}
        {formulationInfo[formulation]}
      </Text>
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
