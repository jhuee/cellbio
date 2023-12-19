import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Component from "../components/Component";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame3 = () => {
  const [frameButtonVisible, setFrameButtonVisible] = useState(false);

  const openFrameButton = useCallback(() => {
    setFrameButtonVisible(true);
  }, []);

  const closeFrameButton = useCallback(() => {
    setFrameButtonVisible(false);
  }, []);

  return (
    <>
      <View style={styles.view}>
        <Image
          style={[styles.child, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-48.png")}
        />
        <View style={styles.frameParent}>
          <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>1</Text>
          </View>
          <View style={[styles.ellipseGroup, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>2</Text>
          </View>
          <View style={[styles.ellipseContainer, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>3</Text>
          </View>
          <View style={[styles.frameView, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>4</Text>
          </View>
          <View style={[styles.ellipseParent1, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          </View>
          <View style={[styles.ellipseParent2, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-4911.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>7</Text>
          </View>
          <View style={[styles.ellipseParent3, styles.ellipseParentPosition]}>
            <Image
              style={[styles.frameChild, styles.parentPosition1]}
              contentFit="cover"
              source={require("../assets/ellipse-49.png")}
            />
            <Text style={[styles.text1, styles.textTypo1]}>6</Text>
          </View>
        </View>
        <Text style={[styles.text7, styles.textTypo]}>
          담을 케이스를 고르세요
        </Text>
        <View style={styles.frameGroup}>
          <Pressable
            style={[styles.ckTc028600007722Parent, styles.parentPosition]}
            onPress={openFrameButton}
          >
            <Image
              style={[styles.ckTc028600007722Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ck-tc02860000772-2.png")}
            />
            <Text style={styles.text8}>스포이드 타입</Text>
          </Pressable>
          <View style={[styles.ckTc028600007322Parent, styles.parentPosition]}>
            <Image
              style={[styles.ckTc028600007322Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ck-tc02860000732-2.png")}
            />
            <Text style={styles.text8}>튜브 타입</Text>
          </View>
          <View style={[styles.ckTc028600007952Parent, styles.parentPosition]}>
            <Image
              style={[styles.ckTc028600007722Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ck-tc02860000795-2.png")}
            />
            <Text style={styles.text8}>원형 타입</Text>
          </View>
          <View style={[styles.ckTc028600008111Parent, styles.parentPosition]}>
            <Image
              style={[styles.ckTc028600007722Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ck-tc02860000811-1.png")}
            />
            <Text style={styles.text8}>병 타입</Text>
          </View>
        </View>
        <View style={[styles.parent, styles.parentPosition1]}>
          <Text style={[styles.text12, styles.text12Position]}>
            케이스 선택
          </Text>
          <Image
            style={[styles.chevronLeftIcon, styles.text12Position]}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameButtonVisible}>
        <View style={styles.frameButtonOverlay}>
          <Pressable style={styles.frameButtonBg} onPress={closeFrameButton} />
          <Component onClose={closeFrameButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseParentPosition: {
    width: 27,
    marginTop: -15,
    left: "50%",
    top: "50%",
    height: 30,
    position: "absolute",
  },
  parentPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
  textTypo: {
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  parentPosition: {
    height: 153,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    borderRadius: Border.br_3xs,
    height: 153,
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text12Position: {
    marginTop: -20,
    top: "50%",
    position: "absolute",
  },
  child: {
    width: "207.63%",
    top: -316,
    right: "-9.92%",
    left: "-97.71%",
    height: 820,
    position: "absolute",
  },
  frameChild: {
    top: 2,
    height: 27,
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    width: "33.33%",
    left: "33.33%",
  },
  ellipseParent: {
    marginLeft: -106.5,
  },
  text1: {
    width: "44.44%",
    left: "25.93%",
  },
  ellipseGroup: {
    marginLeft: -75.5,
  },
  ellipseContainer: {
    marginLeft: -44.5,
  },
  frameView: {
    marginLeft: -13.5,
  },
  ellipseParent1: {
    marginLeft: 17.5,
  },
  ellipseParent2: {
    marginLeft: 79.5,
  },
  ellipseParent3: {
    marginLeft: 48.5,
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
  frameButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ckTc028600007722Icon: {
    top: 0,
  },
  text8: {
    marginTop: -19.5,
    left: "4.55%",
    color: Color.colorGray_200,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  ckTc028600007722Parent: {
    top: 0,
  },
  ckTc028600007322Icon: {
    marginTop: -76.5,
    top: "50%",
    borderRadius: Border.br_3xs,
  },
  ckTc028600007322Parent: {
    top: 178,
  },
  ckTc028600007952Parent: {
    top: 356,
  },
  ckTc028600008111Parent: {
    top: 534,
  },
  frameGroup: {
    width: "89.57%",
    top: 258,
    right: "4.83%",
    left: "5.6%",
    height: 687,
    position: "absolute",
  },
  text12: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    marginTop: -20,
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
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 996,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame3;
