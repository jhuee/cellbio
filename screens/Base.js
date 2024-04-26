import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {
  Center,
  HStack,
  Text,
  Circle,
  VStack,
  Box,
  ScrollView,
} from "native-base";
import { useDispatch } from "react-redux";
import { setBase } from "../src/actions";

const Frame7 = () => {
  const navigation = useNavigation();
  const num = [
    { color: "#BCB1B1", text: "1" },
    { color: "#8E6868", text: "2" },
    { color: "#BCB1B1", text: "3" },
    { color: "#BCB1B1", text: "4" },
    { color: "#BCB1B1", text: "5" },
    { color: "#BCB1B1", text: "6" },
    { color: "#BCB1B1", text: "7" },
    { color: "#BCB1B1", text: "8" },
  ];

  const items = [
    {
      key: "premium",
      title: "Premium",
      description: `DIY 화장품 제조에 모두 사용할 수 있는 고급 원료만을 사용한 제품으로 최상의 결과를 보여줍니다.`,
      style: styles.premium,
    },
    {
      key: "standard",
      title: "Standard",
      description: "합리적인 가격대로 우수한 결과물을 얻을 수 있습니다.",
      style: styles.premium,
    },
    {
      key: "basic",
      title: "Basic",
      description: `가장 기본적인 제품으로 무난한 결과물을 얻을 수 있습니다.`,
      style: styles.premium,
    },
  ];

  const dispatch = useDispatch();
  const handlePress = (base) => {
    dispatch(setBase(base));
    navigation.navigate("Frame6");
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Text style={[styles.text3, styles.textTypo1]}>
        베이스를 선택해주세요
      </Text>

      <HStack mt={3} ml={3} space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </Pressable>
        <Text style={[styles.titleText, styles.textTypo3]}>베이스 선택</Text>
      </HStack>

      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
            <Circle key={idx} size={"28px"} bg={item.color}>
              <Text style={[styles.textTypo]}>{item.text}</Text>
            </Circle>
          ))}
        </HStack>
      </View>

      <ScrollView mt={150}>
        <View>
          <VStack space={5} alignItems={"center"}>
            {items.map((item, index) => (
              <Pressable
                key={index}
                style={styles.rectangleGroup}
                width={"95%"}
                onPress={() => handlePress(item.key)}
              >
                <Text style={styles.premium} textAlign={"center"}>
                  {item.title}
                </Text>
                <Text style={[styles.text, styles.textTypo2]}>
                  {item.description}
                </Text>
              </Pressable>
            ))}
            <Text textAlign={"left"} style={styles.textTypo4}>
              ※ 제형에 따라서 첨가할 수 있는 유효성분이 불가할 수도 있습니다.
            </Text>
            <Text textAlign={"left"} style={styles.textTypo4} mt={-4}>
              ※ 전성분은 차후 완성형 레시피에서 확인 하실 수 있습니다.
            </Text>
          </VStack>
        </View>
      </ScrollView>

      {/* 
      <View style={[styles.parent, styles.parentPosition]}>

      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    color: Color.colorDimgray_200,
    fontWeight: "500",
    lineHeight: 32,
    fontSize: 17,
    top: 70,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  titleText: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo3: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo4: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_mini,
  },

  basicTypo: {
    color: Color.colorRosybrown,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    top: 29,
  },
  parentPosition: {
    right: "0%",
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  ellipseParentLayout: {
    width: 27,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  text11Position: {
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
  frameShadowBox: {},
  premium: {
    color: Color.colorRosybrown,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    top: 29,
  },
  titleText: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },

  text: {
    marginLeft: 40,
    marginRight: 40,
  },
  rectangleParent: {
    marginTop: -292,
    height: 172,
    right: "1.12%",
    top: "50%",
    left: "0%",
    width: "98.88%",
    position: "absolute",
  },
  standard: {
    marginLeft: -53.05,
  },
  text1: {
    marginLeft: -83.05,
  },
  rectangleGroup: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    height: 180,
  },
  basic: {
    marginLeft: -31.05,
  },
  text2: {
    marginLeft: -78.05,
  },
  rectangleContainer: {
    height: "29.45%",
    top: "70.55%",
    bottom: "0%",
    left: "1.12%",
    right: "0%",
    width: "98.88%",
  },
  frameParent: {
    top: 320,
    flex: 1,
  },
  text3: {
    top: 160,
    left: 32,
    color: Color.colorBlack,
  },
  ellipseIcon: {
    top: 2,
    left: 0,
    height: 27,
  },
  text4: {
    left: 9,
    width: 9,
  },
  ellipseParent: {
    marginLeft: -106.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  text5: {
    left: 7,
    width: 12,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseContainer: {
    marginLeft: -44.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  frameView: {
    marginLeft: -13.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent1: {
    marginLeft: 17.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent2: {
    marginLeft: 79.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  ellipseParent3: {
    marginLeft: 48.5,
    marginTop: -15,
    width: 27,
    height: 30,
    left: "50%",
    top: "50%",
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  text11: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    left: "50%",
    marginTop: -20,
  },
  chevronLeftIcon: {
    width: 41,
    height: 41,
    overflow: "hidden",
  },
  parent: {
    left: "0%",
    width: "100%",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame7;
