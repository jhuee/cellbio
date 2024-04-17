import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Center, VStack, Pressable, Box,ScrollView, HStack, Circle, Heading, View, Text, Divider, Icon, AddIcon, IconButton} from "native-base";

import { useDispatch } from 'react-redux';
import { setItem } from '../src/actions';
import { db, auth } from '../firebaseConfig'
import { AntDesign } from '@expo/vector-icons';


const ResultFrame = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute(); // route hook 사용
  const { result } = route.params; // 넘겨받은 데이터 사용

  const skinInfo ={
    '건성·민감성 피부': [
    "각질층의 수분함유량이 10% 이하로 피부의 건조함이나 간지러움을 느낀다.",

    "피부결이 섬세하고 모공이 작으나 탄력이 없고 잔주름이 쉽게 생긴다.",

    "피지와 땀의 분비가 적어 표면이 항상 윤기가 없고 거칠다.",

    "눈가와 뺨 중간, 입 주위 피부가 쉽게 늘어지고 주름이 잡힌다.",

    "세안 후 피부가 심하게 당기며, 마른 각질에 의해 화장이 쉽게 들뜬다.",],

'지성 피부': [
    "피부결이 거칠고 피부 두께가 두꺼우며, 피부 표면이 번들거린다.",
    "피지분비 과다로 모공이 넓고, 코 부위에는 면포가 분포되어 있다.",
    "외부의 불순물이 피부에 부착되기 쉬우며, 여드름 등의 피부 트러블 발생 가능성이 높다.",
    "화장이 잘 받지 않으며 잘 지워진다.",
    "계절적인 영향을 받기도 하나, 주로 사춘기의 청소년에게 많이 발생한다."
    ],

    '중성·약간 민감성 피부' : [
"소구가 얕고 피부결이 매끄럽다.",
"생리주기나 피곤하면 트러블이 조금 올라온다.",

"피부의 탄력이 좋으며 잔주름도 없다.",

"혈액순환이 잘 이루어져 볼 주위로 핑크색의 혈색을 보인다.",

"기미, 잡티 등의 *색소 침착, 화농성 여드름 같은 피부 질환이 없다.",

"세안 후 당김 증상이 있으나 15~20분 방치 시 약산성의 피지막이 고르게 형성된다.",
    ],

    '복합성 피부' : [
"T 존은 피지분비가 많은 지성으로 피부가 번들거리며, 이마에는 여드름이 생길 수 있다.",

"T 존의 모공은 대체로 크고 피부결이 곱지 못하다.",

"U 존은 건조하여 색소 침착이 나타날 수 있다.",

"눈가와 입주위가 당기며, 잔주름이 생긴다.",
]
  }


  
  return (
    <View style={styles.view} backgroundColor="blueGray.400">
      <HStack mt={"10%"} ml={6}space={3} alignItems={"center"}>
      
        <IconButton style={styles.chevronLeftIcon}
                    _pressed={{bg: "gray.600:alpha.10"}}
                    icon={<AntDesign name="home" size={30} color="gray"  />}
                    borderRadius="full"
                    onPress={() => navigation.navigate('Screen1')}/>

      </HStack>
     
  
      
      <ScrollView  mt={100} borderTopLeftRadius={40} borderTopRightRadius={40} backgroundColor={"white"}>
        <Box>
        <VStack space={3} alignItems={"center"}>
      <Heading style={styles.textTypo} color="blueGray.600" mt={10} textAlign={"center"}>
        나의 피부 타입은
      </Heading>
      <Text style={styles.text} > 
        {result}
      </Text>
      <Box m={5}>
          {skinInfo[result].map((info, index) => (
            <HStack key={index} alignItems={"center"}>
            <Text ml={2} mt={3}>✔️</Text>
            <Text style={styles.text7} key={index} mr={5} ml={2} mt={4}> {info}</Text>
            </HStack>
          ))} {/* 'result'에 따라 다른 문구를 보여주는 부분 */}
        </Box>

        <Divider/>
        <Text style={styles.text}  color="blueGray.600" mt={15} textAlign={"center"}>
            {result} 
        </Text>
        <Text style={styles.text}  color="blueGray.600" mt={-3} textAlign={"center"}>
            맞춤 레시피 1
        </Text>
        <HStack space={10}  h="170">
            <VStack space={2}>
            <Circle size={"100px"} bg="#B2A2A2">
                <Text style={styles.text3} color="white">
                    트러블 케어
                </Text>
            </Circle>
            <Text textAlign={"center"}>어성초추출물 </Text>
            <Text textAlign={"center"}>펩타이드</Text>
            </VStack>
            <AddIcon mt={10}></AddIcon>
            <VStack space={2}>
            <Circle size={"100px"} bg="#B5CECE">
            <Text style={styles.text3} color="white">
                    진정
                </Text>
            </Circle>
            
            <Text textAlign={"center"}>녹차추출물 </Text>
            </VStack>
        </HStack>
        <Image
        style={styles.image}
        source={require("../assets/watery.png")}/>
        <Text style={styles.text7}>
            #번들거리지 않는 가벼운 텍스쳐
        </Text>

        <Pressable alignItems={"center"} w={"80%"} borderRadius={10} h={10} backgroundColor={"#94a3b8"}
         onPress={ async  () =>{
          try {
          const userId = auth.currentUser.uid;
          const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
          console.log(userId)
          const recipeRef = userRef.collection('recipe').doc(); // 레시피 문서 참조 생성
    
          await recipeRef.set({ // 레시피 문서에 데이터 저장
              skinType : '지성 피부',
              '레시피' : '맞춤 레시피1',
              base : "Premium",
              concerns : ['각질','예민'],
            });
    
          alert("레시피 저장 완료")
          navigation.navigate("Recipe")
        } catch (error) {
          console.error(error);
        }
      }}>
            <Text mt={2} style={styles.text4} color={"white"}>
               레시피1 저장하기
            </Text>
        </Pressable>

        <Divider/>
        <Text style={styles.text}  color="blueGray.600" mt={15} textAlign={"center"}>
            {result} 
        </Text>
        <Text style={styles.text}  color="blueGray.600" mt={-3} textAlign={"center"}>
            맞춤 레시피 2
        </Text>
        <HStack space={10}  h="170">
            <VStack space={2}>
            <Circle size={"100px"} bg="#94a3b8">
                <Text style={styles.text3} color="white">
                    트러블 케어
                </Text>
            </Circle>
            <Text textAlign={"center"}>어성초추출물 </Text>
            <Text textAlign={"center"}>펩타이드</Text>
            </VStack>
            <AddIcon mt={10}></AddIcon>
            <VStack space={2}>
            <Circle size={"100px"} bg="#B5CECE">
            <Text style={styles.text3} color="white">
                    진정
                </Text>
            </Circle>
            
            <Text textAlign={"center"}>녹차추출물 </Text>
            </VStack>
        </HStack>
        <Image
        style={styles.image}
        source={require("../assets/KakaoTalk_20231117_030756483.gif")}/>
        <Text style={styles.text7}>
            #번들거리지 않는 가벼운 텍스쳐
        </Text>

        <Pressable alignItems={"center"} w={"80%"} borderRadius={10} h={10} backgroundColor={"#94a3b8"} 
       >

            <Text mt={2} style={styles.text4} color={"white"}>
               레시피2 저장하기
            </Text>
        </Pressable>
      </VStack>
        </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },

  titleText:{
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
},
textTypo2: {
  fontFamily: FontFamily.pretendardLight,
  fontWeight: "600",
  lineHeight: 40,
  fontSize: FontSize.size_6xl,
},
  image:{
    left:10,
    height: 130,
    width:280
  },
  frameGroupPosition: {
    left: "0%",
    top: 0,
    right: "0%",
  },
  text3: {
    textAlign: "center",
    fontWeight: "100",
    top: 0,
    fontFamily: FontFamily.pretendardLight,
    fontSize: FontSize.size_mini
  },
  text4: {
    textAlign: "center",
    fontWeight: "100",
    top: 0,
    fontFamily: FontFamily.pretendardLight,
    fontSize: FontSize.size_xl
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
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.pretendardLight,
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
    fontWeight: "600",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
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
    left: 13,
    textAlign: "center",
    color: Color.colorRosybrown,
    fontWeight: "600",
  },
  my: {
    right: 197,
  },
  text7: {
    textAlign: "left",
    fontWeight: "100",
    top: 0,
    fontFamily: FontFamily.pretendardLight,
    fontSize: FontSize.size_mini
  },
  frame: {
    margin:5,
    top: 581,
    right: "7%",
    left: "7%",
    position: "absolute",
    flex:1,    
  },
  frameParent: {
    top: 120,
    alignContent: "center",
    flex:1
  },
  text8: {
    top: 128,
    left: 34,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  view: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ResultFrame;
