import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { HStack, VStack, Circle, Text, Pressable, Radio, Box } from "native-base";
import { useDispatch } from "react-redux";
import { setVolume } from "../src/actions";
const Frame4 = () => {
  const navigation = useNavigation();
  const num = [
    { color:"#BCB1B1", text: '1' },
    { color:"#BCB1B1", text: '2' },
    { color:"#BCB1B1", text: '3' },
    { color:"#BCB1B1", text: "4" },
    { color:"#BCB1B1", text: '5' },
    { color: "#8E6868", text: '6' },
    { color:"#BCB1B1", text: '7' },
  ];

  const mlValues = ['500ml', '1,000ml', '3,000ml', '10,000ml'];

  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setVolume(value));
    navigation.navigate("Frame3");
  };
  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
            <View style={styles.frameGroup1}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"25px"} bg={item.color}>
          <Text style={[ styles.textTypo2]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>
      <Text style={[styles.text7, styles.textTypo]}>
        원하시는 용량을 선택해주세요
      </Text>

      {/* 라디오 그룹 */}
      <Radio.Group value={value} onChange={nextValue => {setValue(nextValue);}}>
      <VStack style={styles.frameGroup} alignSelf={"center"} space={5}>
      {mlValues.map((value, index) => (
            <Box key={index} w={330} style={[styles.rectangleParent, styles.rectangleView]} justifyContent={"center"}>
            <Radio value={value} colorScheme={"gray"} ml={3}>
              <Text style={[styles.ml, styles.textTypo1]} ml={4}>{value}</Text>
            </Radio>
          </Box>
        ))}
      </VStack>
      </Radio.Group>
       
      <Pressable
        style={[styles.framePressable, styles.framePosition]}
        onPress={handlePress}
      >
        <View style={[styles.frameChild11, styles.framePosition]} />
        <Text style={[styles.text8, styles.textPosition]}>선택 완료</Text>
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text9, styles.textPosition]}>용량 선택</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    width: 27,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  textTypo: {
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo2: {
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  rectangleParentPosition: {
    height: 74,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  framePosition: {
    height: 62,
    bottom: 0,
    left: "0%",
    position: "absolute",
  },
  textPosition: {
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
    top: 2,
    left: 0,
    height: 27,
  },
  text: {
    left: 9,
    width: 9,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
  },
  ellipseParent: {
    marginLeft: -106.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  text1: {
    left: 7,
    width: 12,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 30,
  },
  ellipseGroup: {
    marginLeft: -75.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseContainer: {
    marginLeft: -44.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  frameView: {
    marginLeft: -13.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent1: {
    marginLeft: 17.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent2: {
    marginLeft: 79.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
  },
  ellipseParent3: {
    marginLeft: 48.5,
    left: "50%",
    top: "50%",
    marginTop: -15,
    width: 27,
    height: 30,
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
    left: 32,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    top: 0,
  },
  ml: {
    color: Color.colorRosybrown,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
  },
  frameChild4: {
    top: 29,
    left: 16,
    width: 17,
    height: 17,
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  rectangleGroup: {
    top: 118,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  rectangleContainer: {
    top: 236,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  rectangleParent1: {
    top: 354,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 74,
  },
  frameGroup: {
    top: 278,
    flex:1
  },
  frameGroup1: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  frameChild11: {
    backgroundColor: Color.colorSilver,
    right: "0%",
    bottom: 0,
    width: "100%",
  },
  text8: {
    marginLeft: -47,
    fontWeight: "500",
    color: Color.colorGray_300,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    marginTop: -20,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
  },
  framePressable: {
    width: "100.76%",
    right: "-0.76%",
  },
  text9: {
    marginLeft: -46.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
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
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 947,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame4;
