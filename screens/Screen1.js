import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.text, styles.textTypo1]}>로그인</Text>
      </View>
      <Input
        style={styles.frame1}
        placeholder="이메일"
        required={true}
        inputStyle={{}}
        containerStyle={styles.frameTextInputInput}
      />
      <Input
        style={styles.frame1}
        placeholder="비밀번호"
        required={false}
        disabled={false}
        inputStyle={{}}
        containerStyle={styles.frameTextInput1Input}
      />
      <Pressable
        style={[styles.frame3, styles.framePosition]}
        onPress={() => navigation.navigate("Frame9")}
      >
        <View style={[styles.frameChild, styles.text1Position]} />
        <Text style={[styles.text1, styles.text1Position]}>로그인</Text>
      </Pressable>
      <View style={[styles.parent, styles.groupPosition]}>
        <Text style={[styles.text2, styles.textTypo]}>
          사업자등록증이 있으시다면?
        </Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Frame12")}
        >
          <Text style={[styles.text3, styles.textTypo]}>회원가입</Text>
        </Pressable>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text2, styles.textTypo]}>
          셀바이오가 처음이시라면?
        </Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Frame12")}
        >
          <Text style={[styles.text3, styles.textTypo]}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameTextInputInput: {
    left: "10.69%",
    right: "11.2%",
    width: "78.12%",
    height: 32,
    top: 318,
    position: "absolute",
  },
  frameTextInput1Input: {
    left: "10.69%",
    right: "11.2%",
    width: "78.12%",
    height: 32,
    top: 391,
    position: "absolute",
  },
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
  },
  text1Position: {
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 32,
    left: "10.69%",
    right: "11.2%",
    width: "78.12%",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "300",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
  },
  text: {
    fontSize: FontSize.size_16xl,
    lineHeight: 56,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 166,
    left: 42,
    width: 309,
    height: 56,
  },
  frame1: {
    overflow: "hidden",
  },
  frameChild: {
    marginTop: -33.5,
    right: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarksalmon,
    height: 67,
    width: "100%",
  },
  text1: {
    marginTop: -19.5,
    marginLeft: -32,
    left: "50%",
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
  },
  frame3: {
    width: "82.44%",
    top: 467,
    right: "8.91%",
    left: "8.65%",
    height: 67,
  },
  text2: {
    color: Color.colorGray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text3: {
    textDecoration: "underline",
    color: Color.colorDarkslategray_300,
  },
  pressable: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 584,
  },
  group: {
    top: 552,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen1;
