import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { HStack, VStack, Circle, Text, ScrollView, Box,Checkbox} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { setGroupValue, setRemoveIng } from "../src/actions";

const Frame2 = () => {
  const navigation = useNavigation();
  const num = [
    { color: "#BCB1B1", text: '1' },
    { color:"#BCB1B1", text: '2' },
    { color:"#BCB1B1", text: '3' },
    { color:"#BCB1B1", text: "4" },
    { color:"#8E6868", text: '5' },
    { color:"#BCB1B1", text: '6' },
    { color:"#BCB1B1", text: '7' },
    { color:"#BCB1B1", text: '8' },
  ];

  const item = useSelector(state => state.item);
  const itemInfo = {
    '스킨': `정제수 
글리세린
부틸렌글라이콜 
프로판다이올
펜틸렌글라이콜
1,2-헥산다이올
판테놀 
베타인 
알란토인 
글루코노락톤 
에틸헥실글리세린 
카프릴로일살리실릭애씨드 
잔탄검 
옥탄다이올 
토코페롤
다이소듐이디티에이`,
    '에센스': `정제수
다이프로필렌글라이콜
글리세린
다이프로필렌글라이콩
부틸렌글라이콜, 정제수
에탄올
페녹시에탄올
피이지-60하이드로제네이티드캐스터오일
아크릴레이트/C10-30알킬아크릴레이트크로스폴리머
트라이에탄올아민
하이드록시에틸셀룰로오스, 
다이소듐포스페이트, 소듐포스페이트
베타인
에틸헥실글리세린
하이드로제네이티드레시틴,
세테아릴알코올, 
시트릭애씨드, 
세라마이드
향료
아데노신
아이소듐이디티에이`,
    '크림': `정제수
카프릴릭/카프릭트라이글리세라이드 
부틸렌글라이콜 
글리세린 
글리세릴스테아레이트 
세테아릴알코올 
비즈왁스 
해바라기씨오일 
시어버터
피이지-100스테아레이트
소듐아크릴레이트/소듐아크릴로일다이메틸타우레이트코폴리머
폴리솔베이트60 
다이메티콘 
베타인
폴리아이소부텐 
1,2-헥산다이올 
카프릴릴글라이콜 
스타아니스추출물 
카보머 
알지닌 
프로폴리스추출물
잔탄검 
솔비탄올리에이트
카프릴릴/카프릴글루코사이드
다이소듐이디티에이 
소듐하이알루로네이트
+ 원하는 추가 성분`,
    '샴푸': `정제수
소듐라우레스설페이트
소듐라우레스설페이트
정제수
글리세린
코카미도프로필베타인
소듐클로라이드
코카마이드디이에이
향료
페녹시에탄올
폴리쿼터늄-10
디소듐이디티에이`,
    '바디워시': `정제수
다이소듐코코암포다이아세테이트
글리세린
소듐클로라이드
코코-베타인 
미리스틱애씨드
라우릭애씨드
소듐코코일이세티오네이트
소듐메틸코코일타우레이트
부틸렌글라이콜
포타슘하이드록사이드
다이포타슘글리시리제이트
다이프로필렌글라이콜
알란토인
소듐글루코네이트
카프릴릴글라이콜
글루코오스
솔비톨
1,2-헥산다이올
소듐파이테이트
아이소프로필미리스테이트
헥실렌글라이콜
에틸헥실글리세린`,

    '클렌징': `정제수
다이프로필렌글라이콜 
피이지-6카프릴릭/카프릭글리세라이즈
피이지-7글리세릴코코에이트 
부틸렌글라이콜
글리세린
m소듐하이알루로네이트 
하이드롤라이즈드하이알루로닉애씨드
소듐아세틸레이티드하이알루로네이트
하이드록시프로필트라이모늄하이알루로네이트
소듐하이알루로네이트크로스폴리머
포타슘하이알루로네이트
1,2-헥산다이올
파파인
하이드록시아세토페논
글루코오스
말토덱스트린
다이소듐이디티에이`
  }

  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setRemoveIng(groupValue));
    navigation.navigate("Frame4");
  };
  
  const [groupvalue, setGroupValue] =  React.useState([]);

  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />

<Text style={[styles.text7, styles.textTypo4]}>
        전성분 확인
      </Text>
<HStack mt={3} ml={3}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo2]}>전성분 확인</Text>
      </HStack>

      <View style={styles.frameGroup}>
        <HStack space={1.5}>
          {num.map((item, idx) => (
          <Circle key={idx} size={"28px"} bg={item.color}>
          <Text style={[ styles.textTypo3]}>{item.text}</Text>
          </Circle>
          ))}
        </HStack>
      </View>

      <ScrollView mt={130}>
        <VStack>
        <Box style={styles.item} m={7}>
       
          {/* 새로 추가한 부분 */}
          {/* 여기까지   */}
      {itemInfo[item].split('\n').map((ingredient, idx) => (
        <VStack key={idx}>
        <Box  m={2} justifyContent={"center"} h={10} >
         <HStack alignItems={"center"}>
          <Text>
            ✔️
          </Text>
            <Text 
              style={[
                styles.text2, 
                styles.textTypo,
                groupvalue.includes(ingredient) ? { textDecorationLine: 'line-through' } : {}
              ]}
              ml={3}
            >
              {ingredient}
            </Text>
            </HStack>
        </Box>
        </VStack>

      ))}
    </Box>

        <Box ml={8} mr={8} mb={5}>
      <Text style={styles.text2}>※ 선택한 '기능성 추출물'은 배합 후  완성품이 만들어 진 전성분표에 라벨로 들어갑니다.</Text>
      </Box>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Frame4")}
      >
        <View style={[styles.rectangleView, styles.parentPosition]} />
        <Text style={[styles.text9, styles.textPosition]}>확인</Text>
      </Pressable>
      </VStack>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  ellipseGroupPosition: {
    width: 27,
    top: "50%",
    marginTop: -15,
    left: "50%",
    height: 30,
    position: "absolute",
  },
  titleText:{
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
},
  text2:{
    color: Color.colorGray_300,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo3: {
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
  },

  textTypo3:{
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
  },
  textTypo4: {
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
  },
  rectangleLayout: {
    height: 62,
    bottom: 0,
  },
  parentPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
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
  frameGroup: {
    top: 125,
    left: 30,
    width: 213,
    height: 30,
    position: "absolute",
  },
  frameChild: {
    top: 2,
    height: 27,
    left: 0,
    width: 27,
    position: "absolute",
  },
  text: {
    left: 9,
    width: 9,
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    top: 0,
    height: 30,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    lineHeight: 32,
    fontFamily: FontFamily.pretendardLight,
  },
  ellipseParent: {
    marginLeft: -106.5,
  },
  text1: {
    left: 7,
    width: 12,
    color: Color.colorWhite,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    top: 0,
    height: 30,
    position: "absolute",
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
  groupView: {
    top: 0,
    left: 0,
    width: 27,
    height: 30,
    position: "absolute",
  },
  groupWrapper: {
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
  },
  item: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
  text8: {
    top: 305,
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "300",
    width: 269,
  },
  rectangleView: {
    backgroundColor: Color.colorSilver,
    height: 62,
    bottom: 0,
    right: "0%",
  },
  text9: {
    marginLeft: -27,
    fontWeight: "500",
    color: Color.colorGray_300,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    marginTop: -20,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
  },
  rectangleParent: {
    height: 62,
    bottom: 0,
  },
  text10: {
    marginLeft: -57.5,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    marginTop: -20,
    left: "50%",
  },
  chevronLeftIcon: {
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
    height: 947,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame2;
