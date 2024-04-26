import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {
  Box,
  VStack,
  HStack,
  Text,
  Pressable,
  ScrollView,
  Checkbox,
  Circle,
} from "native-base";
import { setConcern } from "../src/actions";
import { useDispatch } from "react-redux";
const Frame6 = () => {
  const navigation = useNavigation();
  const [groupValue, setGroupValue] = useState([]);
  const num = [
    { color: "#BCB1B1", text: "1" },
    { color: "#BCB1B1", text: "2" },
    { color: "#8E6868", text: "3" },
    { color: "#BCB1B1", text: "4" },
    { color: "#BCB1B1", text: "5" },
    { color: "#BCB1B1", text: "6" },
    { color: "#BCB1B1", text: "7" },
    { color: "#BCB1B1", text: "8" },
  ];
  const items = [
    {
      title: "예민",
      content: "알로에, 알란토인 등",
    },
    {
      title: "각질",
      content: "A-HA, BA-HA, 효소, 썰파 등",
    },
    {
      title: "주름 개선",
      content: "레티놀, 콜라겐, 아데노신 등",
    },
    {
      title: "브라이트닝",
      content: "비타민C, 나이아신 아마이드, 알부틴, 감초추출물 등",
    },
    {
      title: "건조",
      content:
        "히아루론산, 글리세린, 세라마이드, 호호바오일, 코코넛오일, 쉐어버터, 미네랄오일 등",
    },
    {
      title: "미백",
      content:
        "글루타치온, 화이트닝컴플렉스, 이데베논, 녹차추출물, 감초추출물, 나이아신아마읻, 알부틴",
    },
    {
      title: "보습",
      content:
        "세라마이드, D판테놀, 콜라겐, 글리세레스-26, 히알루론산, 엘라스틴, 아미노산, 트레할로스, 베타인",
    },
    {
      title: "재생",
      content: "EGF, D판테놀, 보르피린 등",
    },
    {
      title: "항산화·노화",
      content: "코엔자임Q10, 이데베논, 화이트닝컴플렉스",
    },
    {
      title: "트러블·여드름",
      content:
        "펩타이드, 피토넵, 화이트닝컴플렉스, 어성초추출물, 녹차추출물, 감초 추출물, 알란토인",
    },
    {
      title: "진정(수렴)",
      content: "녹차추출물",
    },
  ];

  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setConcern(groupValue));
    navigation.navigate("Frame5");
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Text style={[styles.text7, styles.text3]}>피부 고민을 선택해주세요</Text>

      <HStack mt={3} ml={3} space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </Pressable>
        <Text style={[styles.titleText, styles.textTypo2]}>
          피부 고민 별 선택사항
        </Text>
      </HStack>
      <Text style={styles.n}>최대 2개 가능</Text>

      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
            <Circle key={idx} size={"28px"} bg={item.color}>
              <Text style={[styles.textTypo1]}>{item.text}</Text>
            </Circle>
          ))}
        </HStack>
      </View>

      <ScrollView mt={130}>
        <Checkbox.Group
          colorScheme="yellow"
          defaultValue={groupValue}
          onChange={(values) => setGroupValue(values || [])}
        >
          <VStack alignSelf={"center"} marginTop={4} space={5}>
            {items.map((item, index) => (
              <Box
                key={index}
                style={[styles.rectangleParentLayout, styles.frameChildLayout]}
                pl={4}
                pt={3}
                alignItems={"flex-start"}
              >
                <HStack>
                  <Checkbox
                    mt={8}
                    value={item.title}
                    aria-label="concern"
                  ></Checkbox>
                  <VStack>
                    <Text style={[styles.text9, styles.textTypo]}>
                      {item.title}
                    </Text>
                    <Text style={[styles.text10, styles.textLayout]}>
                      {item.content}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Checkbox.Group>
      </ScrollView>

      <Pressable style={[styles.rectangleView]} onPress={handlePress}>
        <Text style={styles.text8}>선택 완료</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentPosition: {
    width: 27,
    left: "50%",
    marginTop: -15,
    top: "50%",
    height: 30,
    position: "absolute",
  },
  titleText: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo2: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  rectanglePosition: {
    height: 62,
    bottom: 0,
  },
  parentPosition: {
    width: "100%",
  },
  rectangleParentLayout: {
    height: 112,
    width: 352,
  },
  frameChildLayout: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    height: 112,
  },
  textTypo: {
    color: Color.colorRosybrown,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  textLayout: {
    width: 287,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  textPosition: {
    left: 49,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  text17Position: {
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
    height: 27,
    width: 27,
  },
  text: {
    left: 9,
    width: 9,
  },
  ellipseParent: {
    marginLeft: -106.5,
    left: "50%",
    marginTop: -15,
  },
  text1: {
    left: 7,
    width: 12,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseContainer: {
    marginLeft: -44.5,
    left: "50%",
    marginTop: -15,
  },
  frameView: {
    marginLeft: -13.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent1: {
    marginLeft: 17.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent2: {
    marginLeft: 79.5,
    left: "50%",
    marginTop: -15,
  },
  ellipseParent3: {
    marginLeft: 48.5,
    left: "50%",
    marginTop: -15,
  },
  frameParent: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  text3: {
    top: 160,
    left: 32,
    color: Color.colorBlack,
  },
  text7: {
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  rectangleView: {
    backgroundColor: Color.colorSilver,
    height: 82,
  },
  text8: {
    color: Color.colorGray_300,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.pretendardLight,
    textAlign: "center",
    marginTop: 15,
  },
  rectangleParent: {
    width: "100%",

    bottom: 0,
  },
  n: {
    top: 100,
    color: "#464646",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    left: 32,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  frameChild4: {
    width: 352,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  text9: {
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  text10: {
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  frameChild5: {
    top: 48,
    left: 12,
    width: 17,
    height: 17,
    position: "absolute",
  },
  rectangleGroup: {
    top: 134,
  },
  rectangleContainer: {
    top: 268,
  },
  text12: {
    color: Color.colorRosybrown,
    top: 15,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  text13: {
    width: 296,
    top: 47,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  rectangleParent1: {
    top: 536,
  },
  rectangleParent2: {
    top: 402,
  },
  frameChild12: {
    marginTop: -56,
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    top: "50%",
  },
  framePressable: {
    top: 0,
    height: 112,
  },
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  text17: {
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    marginTop: -20,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    marginLeft: -106.5,
  },
  chevronLeftIcon: {
    width: 41,
    height: 41,
    overflow: "hidden",
  },

  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame6;
