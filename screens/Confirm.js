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
  Input,
  KeyboardAvoidingView,
} from "native-base";
import { setRecName, setTotal } from "../src/actions";
import { useSelector, useDispatch } from "react-redux";
import { db, auth } from "../firebaseConfig";

const Confirm = () => {
  const navigation = useNavigation();

  const formulation = useSelector((state) => state.formulation);
  const base = useSelector((state) => state.base);
  const concern = useSelector((state) => state.concern);
  const concentration = useSelector((state) => state.concentration);
  const volume = useSelector((state) => state.volume);
  const bottle = useSelector((state) => state.case);
  const item = useSelector((state) => state.item);
  const extra = useSelector((state) => state.extra);
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handlePress = () => {
    if (name == "") {
      alert("레시피 이름을 설정해주세요!");
    } else {
      dispatch(setRecName(name));
      dispatch(setTotal(totalPrice));
      navigation.navigate("Payment");
    }
  };

  useEffect(() => {
    const fetchPriceInfo = async () => {
      try {
        const prices = await Promise.all([
          db.collection("prices").doc("product").get(),
          db.collection("prices").doc("base").get(),
          db.collection("prices").doc("volume").get(),
          db.collection("prices").doc("extras").get(),
        ]);

        const itemData = prices[0].data();
        const baseData = prices[1].data();
        const volumeData = prices[2].data();
        const extraData = prices[3].data();

        const itemPrice = itemData[item] || 0;
        const basePrice = baseData[base] || 0;
        const volumePrice = volumeData[volume] || 0;
        let extraTotalPrice = 0;
        Object.keys(extra).forEach((key) => {
          // 여기서 extrasFromRedux[key]가 존재하는지 먼저 확인
          if (extra[key]) {
            const count = extra[key].count || 0; // 이렇게 해도 되고,
            const price = extraData[key] || 0;
            extraTotalPrice += price * count;
            console.log(extraData[key]);
          }
        });

        // 선택된 아이템, 베이스, 볼륨, 그리고 extra에 맞는 가격을 가져와 총 가격을 계산합니다.
        const calculatedTotalPrice =
          itemPrice + basePrice + volumePrice + extraTotalPrice;
        setTotalPrice(calculatedTotalPrice);

        console.log(extra, calculatedTotalPrice, item, base, volume);
      } catch (error) {
        console.error("가격 정보를 가져오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchPriceInfo();
  }, []); // 의존성 배열에 상태를 추가합니다.

  // 총 가격에 수량을 반영하여 최종 가격을 계산합니다.
  return (
    <View style={styles.view}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={200}>
        <Image
          style={styles.child}
          contentFit="cover"
          source={require("../assets/ellipse-48.png")}
        />

        <HStack mt={52} ml={3} space={3} alignItems={"center"}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={styles.chevronLeftIcon}
              contentFit="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.titleText, styles.textTypo3]}>레시피 이름</Text>
        </HStack>

        <VStack
          mt={100}
          alignItems={"center"}
          justifyContent={"center"}
          space={3}
        >
          <Box justifyContent={"center"} alignItems={"center"}>
            <Image
              style={styles.child2}
              contentFit="cover"
              source={require("../assets/circleB.png")}
            ></Image>
          </Box>
          <Text style={styles.textTypo}>레시피 이름 설정</Text>
          <Input
            size="lg"
            width={"75%"}
            backgroundColor={"white"}
            focusOutlineColor={"#9A887E"}
            mr={1}
            onChangeText={(text) => setName(text)}
          ></Input>
          <HStack
            justifyContent={"space-between"}
            space={3}
            alignItems={"center"}
          >
            <Pressable
              justifyContent={"center"}
              borderWidth={1}
              borderRadius={5}
              borderColor={"#9A887E"}
              w={"35%"}
              alignItems={"center"}
              h={10}
              onPress={async () => {
                try {
                  const userId = auth.currentUser.uid;
                  const userRef = db.collection("users").doc(userId); // 사용자 문서 참조 생성
                  const recipeRef = userRef.collection("recipe").doc(); // 레시피 문서 참조 생성

                  await recipeRef.set({
                    // 레시피 문서에 데이터 저장
                    skinType: "지성 피부",
                    제품: item,
                    제형: formulation,
                    베이스: base,
                    피부고민: concern,
                    농도: concentration,
                    용량: volume,
                    케이스: bottle,
                    레시피: name,
                    가격: totalPrice,
                    추출물: extra,
                  });

                  alert("저장되었습니다.");
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Recipe" }],
                  });
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              <Text style={styles.textTypo}>저장</Text>
            </Pressable>
            <Pressable
              justifyContent={"center"}
              borderWidth={1}
              borderRadius={5}
              borderColor={"#9A887E"}
              w={"35%"}
              alignItems={"center"}
              h={10}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Screen1" }],
                })
              }
            >
              <Text style={styles.textTypo}>삭제</Text>
            </Pressable>
          </HStack>
          <Pressable
            mt={18}
            borderRadius={5}
            backgroundColor={"#9A887E"}
            w={"75%"}
            alignItems={"center"}
            justifyContent={"center"}
            h={10}
            onPress={handlePress}
          >
            <Text style={styles.textTypo1}>주문하기</Text>
          </Pressable>
        </VStack>
      </KeyboardAvoidingView>
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
  textTypo3: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },
  textTypo1: {
    color: Color.colorWhite,
    top: 0,
    height: 30,
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
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
    fontFamily: FontFamily.pretendardLight,
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
  child2: {
    width: 280,
    height: 280,
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
    textAlign: "center",
    marginTop: 15,
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
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
  },
  chevronLeftIcon: {
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

export default Confirm;
