import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame1 = () => {

  return (
    <View style={styles.view}>
      <View style={styles.parent}>
        <Text style={styles.text}>마이 페이지</Text>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-427320737.png")}
        />
        <Text style={styles.text1}>김주희</Text>
        <Text style={styles.green}>
          <Text style={styles.green1}>Green</Text>
          <Text style={styles.text2}> 등급</Text>
        </Text>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text3, styles.textTypo2]}>{`포인트 
0`}</Text>
        <Text style={[styles.text4, styles.textTypo3]}>{`쿠폰 
0`}</Text>
        <Text style={[styles.text5, styles.textTypo2]}>{`리뷰 
0`}</Text>
      </View>
      <View style={[styles.child, styles.itemPosition]} />
      <View style={[styles.item, styles.itemPosition]} />
      <Text style={[styles.text6, styles.textTypo3]}>제작 중인 레시피</Text>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={styles.text7}>레시피</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.text8, styles.textTypo1]}>업체선정</Text>
        </View>
        <Image
          style={[styles.chevronRightIcon, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Image
          style={[styles.chevronRightIcon1, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Image
          style={[styles.chevronRightIcon2, styles.chevronIconPosition]}
          contentFit="cover"
          source={require("../assets/chevronright11.png")}
        />
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.text9, styles.textTypo1]}>완성</Text>
        </View>
        <View style={[styles.frameView, styles.rectanglePosition]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.text9, styles.textTypo1]}>제작</Text>
        </View>
      </View>
      <Text style={[styles.my, styles.textTypo]}>MY 피부타입</Text>
      <Text style={[styles.text11, styles.textTypo]}>보관된 레시피</Text>
      <Text style={[styles.text12, styles.textTypo]}>
        취소, 반품, 교환 내역
      </Text>
      <Text style={[styles.text13, styles.textTypo]}>배송지/환불 계좌</Text>
      <Text style={[styles.text14, styles.textTypo]}>재입고 알림</Text>
      <Text style={[styles.text15, styles.textTypo]}>이벤트 참여 현황</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    width: 108,
    textAlign: "center",
    top: 0,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    position: "absolute",
  },
  textTypo3: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  itemPosition: {
    height: 1,
    width: 338,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    marginLeft: -169,
    left: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    width: 59,
    marginTop: -11.5,
    height: 25,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    width: 60,
    borderRadius: Border.br_xl,
    height: 25,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorDimgray_300,
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    top: 2,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  chevronIconPosition: {
    height: 24,
    marginTop: -10.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 21,
    left: 28,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  text: {
    marginLeft: -57.5,
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    top: "50%",
    marginTop: -20,
    position: "absolute",
  },
  chevronLeftIcon: {
    left: 11,
    width: 41,
    height: 41,
    top: "50%",
    marginTop: -20,
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 55,
    right: "0%",
    left: "0%",
    height: 46,
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    top: 4,
    left: 25,
    width: 52,
    height: 52,
    position: "absolute",
  },
  text1: {
    top: 31,
    width: 46,
    height: 26,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  green1: {
    color: "#03aa00",
  },
  text2: {
    color: Color.colorBlack,
  },
  green: {
    top: 8,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  groupParent: {
    top: 136,
    height: 61,
  },
  text3: {
    marginLeft: -182.5,
  },
  text4: {
    marginLeft: -54.5,
    width: 107,
    top: 0,
    textAlign: "center",
    left: "50%",
  },
  text5: {
    marginLeft: 73.5,
  },
  group: {
    top: 228,
    height: 48,
  },
  child: {
    top: 291,
  },
  item: {
    top: 420,
  },
  text6: {
    top: 311,
    left: 26,
  },
  frameItem: {
    backgroundColor: "#ffc075",
  },
  text7: {
    left: 13,
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    top: 2,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -169,
    marginTop: -11.5,
  },
  frameInner: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  text8: {
    left: 8,
  },
  rectangleGroup: {
    marginLeft: -77,
  },
  chevronRightIcon: {
    marginLeft: -103,
    width: 19,
    height: 24,
    marginTop: -10.5,
  },
  chevronRightIcon1: {
    marginLeft: 82,
    width: 19,
    height: 24,
    marginTop: -10.5,
  },
  chevronRightIcon2: {
    marginLeft: -11,
    width: 20,
    height: 24,
    marginTop: -10.5,
  },
  text9: {
    left: 18,
  },
  rectangleContainer: {
    marginLeft: 108,
  },
  frameView: {
    marginLeft: 16,
  },
  frameParent: {
    width: "86.01%",
    top: 357,
    right: "7.38%",
    left: "6.62%",
    height: 25,
    position: "absolute",
  },
  my: {
    top: 450,
    width: 92,
  },
  text11: {
    top: 515,
    width: 96,
  },
  text12: {
    top: 580,
    width: 144,
  },
  text13: {
    top: 645,
    width: 118,
  },
  text14: {
    top: 709,
    width: 183,
  },
  text15: {
    top: 775,
    width: 116,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame1;
