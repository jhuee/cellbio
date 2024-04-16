import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {db, auth} from '../firebaseConfig'
import { ScrollView, VStack, Box, FormControl, Input, HStack, KeyboardAvoidingView, Divider, IconButton, Pressable, FlatList, ZStack} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Frame2 = () => {
  const [user, setUser] = useState('');
  const navigation = useNavigation();

  const getUserData = async () => {
    const userId = auth.currentUser.uid;
    const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
  
    const doc = await userRef.get();
  
    if (doc.exists) {
      const userData = doc.data();
      const name = userData.name;
      setUser(name)
    } else {
      console.log("No such document!");
    }
  }
  getUserData();
  return (
    <View style={styles.view}>
         <HStack mt={"20%"} ml={6}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo4]}>장바구니</Text>
      </HStack>
      <ScrollView mt={50}  >
      <VStack mr={5} ml={5} space={2}>
      <Box>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-427320737.png")}
        />
        <Text style={styles.text1}>{user}님</Text>
        <Text style={styles.green}>
          <Text style={styles.green1}>Green</Text>
          <Text style={styles.text2}> 등급</Text>
        </Text>
        </Box>
      <HStack justifyContent={"space-between"} mt={2} p={1} pl={4} pr={4}>
        <Box w={50}>
        <Text style={[ styles.textTypo2]}>{`포인트 
0`}</Text>
</Box>
<Box  w={50}>
        <Text style={[styles.textTypo2]}>{`쿠폰 
0`}</Text>
</Box>
<Box w={50}>
        <Text style={[styles.textTypo2]}>{`리뷰 
0`}</Text>
</Box>
      </HStack>
    <Divider/>
    
      <Text style={[ styles.textTypo3]}>제작 중인 레시피</Text>
      <HStack justifyContent={"space-between"} mt={3} mb={5}>
          <Box justifyContent={"center"} style={[styles.frameItem, styles.frameLayout]}>
          <Text style={styles.text7}>레시피</Text>
          </Box>
        <Image
          style={[styles.chevronRightIcon, ]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
          <Box justifyContent={"center"}style={[styles.frameInner, styles.frameLayout]} >
          <Text style={[styles.text8, styles.textTypo1]}>업체선정</Text>
          </Box>
        <Image
          style={[styles.chevronRightIcon, ]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Box justifyContent={"center"}style={[styles.frameInner, styles.frameLayout]} >
          <Text style={[styles.text8, styles.textTypo1]}>제작</Text>
          </Box>
        <Image
          style={[styles.chevronRightIcon, ]}
          contentFit="cover"
          source={require("../assets/chevronright11.png")}
        />
        <Box justifyContent={"center"}style={[styles.frameInner, styles.frameLayout]} >
          <Text style={[styles.text8, styles.textTypo1]}>완성</Text>
        </Box>
      </HStack>
      <Divider/>
      <Pressable h={50} justifyContent={'center'} onPress={() => navigation.navigate("Frame10")}>
      <Text style={[styles.textTypo]}>MY 피부타입</Text>
      </Pressable>
      <Pressable h={50} justifyContent={'center'} onPress={() => navigation.navigate("Recipe")}>
      <Text style={[styles.textTypo]}>보관된 레시피</Text>
      </Pressable>
      <Pressable h={50} justifyContent={'center'} onPress={() => navigation.navigate("Order")}>
      <Text style={[styles.textTypo]}>주문 내역</Text>
      </Pressable>
      <Pressable h={50} justifyContent={'center'} onPress={() => navigation.navigate("AdminPage")}>
      <Text style={[styles.textTypo]}>취소, 반품, 교환 내역</Text>
      </Pressable>
      <Pressable h={50} justifyContent={'center'}>
      <Text style={[styles.textTypo]}>배송지/환불 계좌</Text>
      </Pressable>
      <Pressable h={50} justifyContent={'center'}>
      <Text style={[styles.textTypo]}>이벤트 참여 현황</Text>
      </Pressable>
      </VStack>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 393,
    left: 0,
  },
  textTypo2: {
    textAlign:"center",
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
  },
  titleText:{
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
},
textTypo4: {
  fontFamily: FontFamily.pretendardLight,
  fontWeight: "600",
  lineHeight: 40,
  fontSize: FontSize.size_6xl,
},

  textTypo3: {
    color: Color.colorBlack,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
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
  },
  textTypo1: {
    color: Color.colorDimgray_300,
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
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
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
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
    width: 41,
    height: 41,
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
    width: 52,
    height: 52,
  },
  text1: {
    top: 25,
    width: 100,
    height: 26,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 60,
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
    top: 2,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 60,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  groupParent: {
    top: 136,
    height: 61,
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
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleParent: {
    marginLeft: -169,
    marginTop: -11.5,
  },
  frameInner: {
    backgroundColor: Color.colorWhitesmoke_100,
  },

  rectangleGroup: {
    marginLeft: -77,
  },
  chevronRightIcon: {
    width: 19,
    height: 24,
  },
  chevronRightIcon1: {
    marginLeft: 82,
    width: 19,
    height: 24,
    marginTop: -10.5,
  },
  chevronRightIcon2: {
    width: 20,
    height: 24,
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

export default Frame2;
