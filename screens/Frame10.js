import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import {
  Circle,
  VStack,
  Box,
  ZStack,
  Center,
  Text,
  Pressable,
} from "native-base";

const Frame10 = () => {
  const questions = [
    {
      text: "화장을 하면 피부 좋다는 말을 많이 듣는 편이다.",
      yes: 1,
      no: 4,
    },
    {
      text: "T존 부위가 항상 번들거린다.",
      yes: 5,
      no: 2,
    },
    {
      text: "피부가 얇고 건조하다.",
      yes: 3,
      no: 5,
    },
    {
      text: "얼굴이 잘 붉어진다.",
      yes: 6,
      no: 7,
    },
    {
      text: "얼굴과 몸에 뾰루지가 잘 생긴다.",
      yes: 9,
      no: 8,
    },
    {
      text: "세안 후 당기고 각질이 일어난다.",
      yes: 9,
      no: 10,
    },
    {
      text: "화장품은 민감성 제품만 골라쓰는 편이다.",
      yes: 10,
      no: 5,
    },
    {
      text: "얼굴에 잔주름이 많다.",
      yes: 11,
      no: 10,
    },
    {
      text: "머리가 가렵고 비듬이 생긴다.",
      yes: 13,
      no: 12,
    },
    {
      text: "화장이 잘 뜨고 쉽게 지워진다.",
      yes: 13,
      no: 14,
    },
    {
      text: "햇빛 알러지가 있다",
      yes: 9,
      no: 14,
    },
    {
      text: "화장품 트러블이 잘 생긴다.",
      yes: 14,
      no: 15,
    },
    {
      text: "하루에 샤워를 안 해도 머리와 몸이 끈적이고 불쾌한 냄새가 난다.",
      yes: 13,
      no: 16,
    },
    {
      text: "코에 검은 피지가 많다",
      yes: 18,
      no: 17,
    },
    {
      text: "각질 때문에 항상 얼굴에 크림이나 보습제를 챙겨 바른다.",
      yes: 17,
      no: 18,
    },
    {
      text: "얼굴과 몸에 털이 많은편이다.",
      yes: 18,
      no: 19,
    },
    {
      text: "눈가와 입주위가 거뭇하고 닭살같이 오돌토돌 튀어나온 것이 있다.",
      yes: 20,
      no: 21,
    },
    {
      text: "겨울엔 피부가 잘 튼다.",
      yes: 16,
      no: 21,
    },
    {
      text: "끈적임이 싫어서 가급적 화장품을 많이 바르지 않는다.",
      yes: 23,
      no: 22,
    },
    {
      text: "아침에는 얼굴이 밝아보이는데 오후에 갈수록 점점 칙칙해진다.",
      yes: 23,
      no: 22,
    },
    {
      text: "팔뚝과 허벅지에 닭살이 있다.",
      result: "건성·민감성 피부",
      no: 21,
    },
    {
      text: "계절이 바뀔 때마다 피부 트러블이 생긴다.",
      result: "중성·약간 민감성 피부",
      result1: "복합성 피부",
    },
    {
      text: "오랜만에 신경 써서 마사지를 하고나면 얼굴에 여드름이 생긴다.",
      result: "복합성 피부",
      no: 21,
    },
    {
      text: "모공이 넓은 편이다.",
      result: "지성 피부",
      no: 22,
    },
  ];

  const questionsIndexedById = questions.reduce((acc, question, index) => {
    acc[index] = question;
    return acc;
  }, {});

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const navigation = useNavigation(); // navigation hook 추가

  const handleYes = () => {
    const nextQuestion = questionsIndexedById[currentQuestionId]?.yes;
    const result =
      questionsIndexedById[currentQuestionId]?.result ||
      questionsIndexedById[currentQuestionId]?.result1;
    if (nextQuestion !== undefined) {
      setCurrentQuestionId(nextQuestion);
      setQuestionNumber(questionNumber + 1);
    } else if (result) {
      navigation.navigate("Result", { result }); // 결과 페이지로 이동
    } else {
      console.error(`'id'가 ${nextQuestion}인 질문을 찾을 수 없습니다.`);
    }
  };

  const handleNo = () => {
    const nextQuestion = questionsIndexedById[currentQuestionId]?.no;
    const result = questionsIndexedById[currentQuestionId]?.result;
    if (nextQuestion !== undefined) {
      setCurrentQuestionId(nextQuestion);
      setQuestionNumber(questionNumber + 1);
    } else if (result) {
      navigation.navigate("Result", { result }); // 결과 페이지로 이동
    } else {
      console.erssror(`'id'가 ${nextQuestion}인 질문을 찾을 수 없습니다.`);
    }
  };

  const currentQuestionText = questionsIndexedById[currentQuestionId]?.text;

  return (
    <View style={styles.view}>
      <VStack alignItems={"center"} justifyContent={"center"} mt={130}>
        <Circle size="40px" bg={"#FFC38B"}>
          <Text style={styles.q1}>Q{questionNumber}</Text>
        </Circle>
        <Text style={styles.text}>{currentQuestionText}</Text>
      </VStack>

      <View style={styles.frameParent}>
        <Pressable onPress={handleYes}>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.frameInner, styles.frameInnerShadowBox]} />
            <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-427320702.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={handleNo}>
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={[styles.rectangleView, styles.frameInnerShadowBox]} />
            <Text style={[styles.no, styles.noTypo]}>No</Text>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-427320704.png")}
            />
          </View>
        </Pressable>
      </View>
      <StatusBar style={styles.childLayout} barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 46,
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
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_xl,
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
    height: 46,
    width: 46,
  },
  q1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  ellipseParent: {
    width: 46,
    height: 46,
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
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame10;
