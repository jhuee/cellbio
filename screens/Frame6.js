import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View,  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {Radio, Box, VStack, HStack, Text, Pressable, ScrollView, Checkbox} from "native-base";
const Frame6 = () => {
  const navigation = useNavigation();
  const items = [
    {
      title: '예민',
      content: '알로에, 알란토인 등',
    },
    {
      title: '각질',
      content: 'A-HA, BA-HA, 효소, 썰파 등',
    },
    {
      title: '주름 개선',
      content: '레티놀, 콜라겐, 아데노신 등',
    },
    {
      title: '브라이트닝',
      content: '비타민C, 나이아신 아마이드, 알부틴, 감초추출물 등',
    },
    {
      title: '건조',
      content: '히아루론산, 글리세린, 세라마이드, 호호바오일, 코코넛오일, 쉐어버터, 미네랄오일 등',
    },
  ];
  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>2</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-4911.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>3</Text>
        </View>
        <View style={[styles.frameView, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>4</Text>
        </View>
        <View style={[styles.ellipseParent1, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
        </View>
        <View style={[styles.ellipseParent2, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>7</Text>
        </View>
        <View style={[styles.ellipseParent3, styles.ellipseParentPosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-49.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        </View>
      </View>
      <Text style={styles.text7}>피부 고민을 선택해주세요</Text>
      
      <Text style={styles.n}>최대 N개 가능</Text>


      <ScrollView mt={220}
      >
           
      <VStack alignSelf={"center"} marginTop={4} space={5}>
        {items.map((item, index)=> (
          <Box key={index} style={[styles.rectangleParentLayout, styles.frameChildLayout]} p={5} alignItems={"left"}>
          <HStack>
            <Checkbox colorScheme="coolGray" mt={7}></Checkbox>
              <VStack>
                <Text style={[styles.text9, styles.textTypo]}>{item.title}</Text>
                <Text style={[styles.text10, styles.textLayout]}>{item.content}</Text>
              </VStack>
          </HStack>
          </Box>
        ))}

    </VStack>
    </ScrollView>
    <Pressable
        style={[styles.rectangleView]}
        onPress={() => navigation.navigate("Frame5")}
      >
        <Text style={styles.text8}>선택 완료</Text>
      </Pressable>
      {/* <View style={styles.frameGroup}>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.text9, styles.textTypo]}>예민</Text>
          <Text style={[styles.text10, styles.textLayout]}>
            알로에, 알란토인 등
          </Text>
          <Image
            style={styles.frameChild5}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.text9, styles.textTypo]}>각질</Text>
          <Text style={[styles.text10, styles.textLayout]}>
            A-HA, BA-HA, 효소, 썰파 등
          </Text>
          <Image
            style={styles.frameChild5}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.text12, styles.textPosition]}>주름 개선</Text>
          <Text style={[styles.text13, styles.textPosition]}>
            레티놀, 콜라겐, 아데노신 등
          </Text>
          <Image
            style={styles.frameChild5}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.text9, styles.textTypo]}>브라이트닝</Text>
          <Text style={[styles.text10, styles.textLayout]}>
            비타민C, 나이아신 아마이드, 알부틴, 감초추출물 등
          </Text>
          <Image
            style={styles.frameChild5}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </View>
        <Pressable
          style={[styles.framePressable, styles.rectangleParentLayout]}
        >
          <View style={[styles.frameChild12, styles.frameChildLayout]} />
          <Text style={[styles.text9, styles.textTypo]}>건조</Text>
          <Text style={[styles.text10, styles.textLayout]}>
            히아루론산, 글리세린, 세라마이드, 호호바오일, 코코넛오일, 쉐어버터,
            미네랄오일 등
          </Text>
          <Image
            style={styles.frameChild5}
            contentFit="cover"
            source={require("../assets/ellipse-50.png")}
          />
        </Pressable>
      </View> */}
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text17, styles.text17Position]}>
          피부 고민 별 선택사항
        </Text>
        <Image
          style={[styles.chevronLeftIcon, styles.text17Position]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
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
  textTypo1: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
    position: "absolute",
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
    width: 296,
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
  text7: {
    top: 160,
    color: Color.colorBlack,
    left: 32,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
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
  },
  rectangleParent: {
    width: "100%",

    bottom: 0,
  },
  n: {
    top: 196,
    color: "#464646",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    left: 32,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
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
    width: "89.57%",
    top: 258,
    right: "4.33%",
    left: "6.11%",
    height: 648,
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
    left: 11,
    width: 41,
    height: 41,
    overflow: "hidden",
  },
  parent: {
    top: 55,
    height: 46,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1026,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame6;
