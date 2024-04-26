import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {
  Center,
  VStack,
  Pressable,
  Box,
  ScrollView,
  HStack,
  Circle,
  Modal,
  Divider,
  Button,
  IconButton,
} from "native-base";

import { useDispatch } from "react-redux";
import { setExtra, setItem, setPrice, setRecName } from "../src/actions";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { db, auth } from "../firebaseConfig";

const Frame9 = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1); // 초기값을 1로 설정
  const items = [
    "스킨",
    "에센스",
    "크림",
    "샴푸",
    "바디워시",
    "클렌징",
    "크림베이스 구매",
    "추출물 구매",
  ];
  const [extras, setExtras] = useState([
    { name: "병출 추출물", count: 0, price: 5000 },
    { name: "녹차 추출물", count: 0, price: 5000 },
    { name: "달팽이 점액 추출물", count: 0, price: 5000 },
    { name: "꿀 추출물", count: 0, price: 5000 },
    { name: "프로폴리스 추출물", count: 0, price: 5000 },
    { name: "어성초 추출물", count: 0, price: 5000 },
    { name: "인진쑥 추출물", count: 0, price: 5000 },
  ]);
  const dispatch = useDispatch();
  const [creamModal, showCreamModal] = useState(false);
  const [extrasModal, showExtrasModal] = useState(false);
  const totalPrice = 15000 * count; // 총 가격을 계산합니다.
  const [extraValue, setExtraValue] = useState([]);
  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const handleCloseModal = () => {
    // extras의 모든 아이템의 count를 0으로 초기화
    const resetExtras = extras.map((extra) => ({ ...extra, count: 0 }));
    setExtras(resetExtras);
    showExtrasModal(false);
  };

  const handleCreamItem = () => {
    dispatch(setRecName("크림베이스 구매"));
    dispatch(setPrice(totalPrice));
    dispatch(setExtra(""));
    showCreamModal(false);
    console.log(totalPrice);
    navigation.navigate("Payment");
  };

  const handleExtraItem = () => {
    const extrasToSave = extras.filter((extra) => extra.count > 0);

    // // 배열을 객체로 변환
    const extrasObject = extrasToSave.reduce((obj, extra) => {
      obj[extra.name] = { count: extra.count, price: extra.price };
      return obj;
    }, {});

    // // 변환된 객체를 상태로 저장
    dispatch(setExtra(extrasObject));
    dispatch(setRecName("추출물 구매"));
    dispatch(setPrice(totalPrices));
    showExtrasModal(false);
    navigation.navigate("Payment");
  };

  const increaseCount = () => {
    setCount(count + 1); // count 값을 1 증가
  };

  const decreaseCount = () => {
    if (count > 1) {
      // count 값이 1보다 클 때만 감소
      setCount(count - 1); // count 값을 1 감소
    }
  };

  const decreaseCounts = (index) => {
    setExtras(
      extras.map((extra, i) =>
        i === index ? { ...extra, count: Math.max(extra.count - 1, 0) } : extra
      )
    );
  };

  // count를 늘리는 함수
  const increaseCounts = (index) => {
    setExtras(
      extras.map((extra, i) =>
        i === index ? { ...extra, count: extra.count + 1 } : extra
      )
    );
  };

  // 총 금액 계산
  const totalPrices = extras.reduce(
    (total, extra) => total + extra.count * 5000,
    0
  );

  const handlePress = (item) => {
    if (item == "크림베이스 구매") {
      showCreamModal(true);
    } else if (item == "추출물 구매") {
      showExtrasModal(true);
    } else {
      dispatch(setItem(item));
      navigation.navigate("Frame8");
    }
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <StatusBar barStyle="default" />

      <Box mt={"13%"}>
        <HStack
          alignItems={"center"}
          justifyContent={"flex-end"}
          p={4}
          space={5}
        >
          <Pressable onPress={() => navigation.navigate("Cart")}>
            <Feather name="shopping-cart" size={30} color="#705757" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Frame1")}>
            <FontAwesome5 name="user" size={30} color="#705757" />
          </Pressable>
        </HStack>
      </Box>
      <ScrollView mt={150}>
        <VStack alignSelf={"center"} marginTop={4} space={5}>
          {items.map((item, index) => (
            <Pressable key={index} onPress={() => handlePress(item)} w={330}>
              <Box
                style={[styles.frameChild, styles.frameGroupPosition]}
                p={5}
                alignItems={"center"}
              >
                <Text style={styles.text1}>{item}</Text>
              </Box>
            </Pressable>
          ))}
          <HStack justifyContent={"space-between"} space={6} mt={15}>
            <Pressable ml={2} onPress={() => navigation.navigate("Frame10")}>
              <Text style={[styles.my1, styles.textTypo]}>My 피부타입</Text>
            </Pressable>
            <Pressable mr={2} onPress={() => navigation.navigate("Recipe")}>
              <Text p style={[styles.my2, styles.textTypo]}>
                저장된 레시피
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
      <Text style={[styles.text8, styles.textTypo]}>{formattedDate}</Text>

      {/*  크림 베이스 구매 모달*/}
      <Modal isOpen={creamModal} onClose={() => showCreamModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            {/* <Text style={styles.textModal}>/ */}
            <Text style={styles.text4}>크림베이스 구매</Text>
          </Modal.Header>
          <Modal.Body>
            <Box>
              <Text style={styles.text4}>크림베이스 구매</Text>
              <Divider mt={1} />
            </Box>

            <Box>
              <HStack
                mt={3}
                alignItems={"center"}
                space={2}
                justifyContent={"space-between"}
              >
                <Text style={styles.text4}>500ml</Text>
                <HStack alignItems={"center"}>
                  <HStack alignItems={"center"} space={1}>
                    <IconButton
                      _pressed={{ bg: "gray.100:alpha.1" }}
                      icon={<Feather name="minus" size={18} color={"gray"} />}
                      borderRadius="full"
                      onPress={decreaseCount}
                    />

                    <Box
                      alignItems={"center"}
                      w={10}
                      borderWidth={1}
                      borderRadius={5}
                    >
                      <Text>{count}</Text>
                    </Box>
                    <IconButton
                      _pressed={{ bg: "gray.100:alpha.1" }}
                      icon={<Feather name="plus" size={18} color={"gray"} />}
                      borderRadius="full"
                      onPress={increaseCount}
                    />
                  </HStack>
                </HStack>
              </HStack>
            </Box>
            <HStack mt={2} justifyContent={"space-between"}>
              <Text style={styles.text3}>총 금액</Text>
              <Text style={styles.text4}>
                {totalPrice.toLocaleString("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                })}
              </Text>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2} justifyContent={"space-between"}>
              <Button
                w={"50%"}
                borderRadius={5}
                borderWidth={1}
                borderColor={"#83B8B8"}
                variant="ghost"
                colorScheme="blueGray"
                onPress={async () => {
                  try {
                    const userId = auth.currentUser.uid;
                    const userRef = db.collection("users").doc(userId); // 사용자 문서 참조 생성
                    const recipeRef = userRef.collection("cart").doc(); // 레시피 문서 참조 생성

                    await recipeRef.set({
                      // 레시피 문서에 데이터 저장
                      skinType: "지성 피부",
                      제품: "크림베이스",
                      용량: "500ml",
                      레시피: "크림베이스",
                      개수: count,
                      가격: 15000,
                    });

                    alert("저장되었습니다.");
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Cart" }],
                    });
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                <Text style={styles.text4}>장바구니</Text>
              </Button>
              <Button w={"50%"} bg="#83B8B8" onPress={handleCreamItem}>
                <Text style={styles.text4} color={"white"}>
                  바로구매
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {/* 추출물 구매 */}
      <Modal isOpen={extrasModal} onClose={handleCloseModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            {/* <Text style={styles.textModal}>/ */}
            <Text style={styles.text4}>추출물 구매</Text>
          </Modal.Header>
          <Modal.Body>
            <Box>
              <Text style={styles.text4}>추출물 구매 (50ml)</Text>
              <Divider mt={1} />
            </Box>
            {extras.map((extra, index) => (
              <Box key={index}>
                <HStack
                  mt={3}
                  alignItems={"center"}
                  space={2}
                  justifyContent={"space-between"}
                >
                  <Text style={styles.text4}>{extra.name}</Text>
                  <HStack alignItems={"center"}>
                    <HStack alignItems={"center"} space={1}>
                      <IconButton
                        _pressed={{ bg: "gray.100:alpha.1" }}
                        icon={<Feather name="minus" size={18} color={"gray"} />}
                        borderRadius="full"
                        onPress={() => decreaseCounts(index)}
                      />
                      <Box
                        alignItems={"center"}
                        w={10}
                        borderWidth={1}
                        borderRadius={5}
                      >
                        <Text>{extra.count}</Text>
                      </Box>
                      <IconButton
                        _pressed={{ bg: "gray.100:alpha.1" }}
                        icon={<Feather name="plus" size={18} color={"gray"} />}
                        borderRadius="full"
                        onPress={() => increaseCounts(index)}
                      />
                    </HStack>
                  </HStack>
                </HStack>
              </Box>
            ))}

            <Divider />
            <HStack mt={2} justifyContent={"space-between"}>
              <Text style={styles.text4}>총 금액</Text>
              <Text style={styles.text4}>
                {totalPrices.toLocaleString("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                })}
              </Text>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2} justifyContent={"space-between"}>
              <Button
                w={"50%"}
                borderRadius={5}
                borderWidth={1}
                borderColor={"#83B8B8"}
                variant="ghost"
                colorScheme="blueGray"
                onPress={async () => {
                  const extrasToSave = extras.filter(
                    (extra) => extra.count > 0
                  );

                  const extrasString = extrasToSave
                    .map((extra) => `${extra.name}(${extra.count}개)`)
                    .join(", ");

                  try {
                    const userId = auth.currentUser.uid;
                    const userRef = db.collection("users").doc(userId); // 사용자 문서 참조 생성
                    const recipeRef = userRef.collection("cart").doc(); // 레시피 문서 참조 생성

                    await recipeRef.set({
                      // 레시피 문서에 데이터 저장
                      skinType: "지성 피부",
                      제품: extrasString,
                      레시피: "추출물",
                      가격: totalPrices,
                    });

                    alert("저장되었습니다.");
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Cart" }],
                    });
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                <Text style={styles.text4}>장바구니</Text>
              </Button>
              <Button w={"50%"} bg="#83B8B8" onPress={handleExtraItem}>
                <Text style={styles.text4} color={"white"}>
                  바로구매
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameGroupPosition: {
    left: "0%",
    top: 0,
    right: "0%",
  },
  frameParentPosition: {
    height: 69,
    left: "5%",
    right: "5%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  myPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  text4: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
    color: Color.colorDimgray_300,
  },
  text3: {
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.pretendardLight,
    color: Color.colorDimgray_300,
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
  text: {
    top: 160,
    left: 32,
    fontWeight: "700",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  textModal: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
  },

  frameChild: {
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
    height: 69,
  },
  text1: {
    color: Color.colorRosybrown,
    fontWeight: "600",
    fontFamily: FontFamily.pretendardLight,
    fontSize: FontSize.size_6xl,
  },
  rectangleParent: {
    height: 67,
  },
  frameChildPosition: {
    marginTop: -34.5,
    height: 69,
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
    top: "50%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  text2: {
    marginLeft: -32,
    left: "50%",
    marginTop: -19.5,
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: "50%",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  rectangleGroup: {
    top: 89,
  },
  rectangleContainer: {
    top: 180,
  },
  framePressable: {
    top: 271,
  },
  text5: {
    marginLeft: -43,
    left: "50%",
    marginTop: -19.5,
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: "50%",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  rectangleParent1: {
    top: 362,
  },
  rectangleParent2: {
    top: 453,
  },
  frameGroup: {
    height: 522,
  },
  my1: {
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  my2: {
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  my: {
    right: 197,
  },
  text7: {
    right: 13,
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  frame: {
    margin: 5,
    top: 581,
    right: "7%",
    left: "7%",
    position: "absolute",
    flex: 1,
  },
  frameParent: {
    top: 120,
    alignContent: "center",
    flex: 1,
  },
  text8: {
    top: 128,
    left: 34,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Frame9;
