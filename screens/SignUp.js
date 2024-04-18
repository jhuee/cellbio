import React, { useState } from "react";
import {  StyleSheet, View, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView, VStack, Box, FormControl, Input ,Text, HStack, KeyboardAvoidingView, Button} from "native-base";
import {auth,db} from '../firebaseConfig'
const Frame12 = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const checkSamePassword = () => {
    if (password !== confirmPassword) {
        setPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
        setPasswordError('');
    }
};


  const checkDuplicateEmail = async () => {
    try {
        const signInMethods = await auth.fetchSignInMethodsForEmail(email);
        if (signInMethods.length === 0) {
          Alert.alert(
            "", 
            "사용 가능한 이메일입니다.", // 알림 메시지
            [
              {text: "확인"}
            ],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            "",
            "사용 중인 이메일입니다.", // 알림 메시지
            [
              {text: "확인"}
            ],
            { cancelable: false }
          );
        }
    } catch (error) {
        alert('올바른 이메일이 아닙니다.');
    }
};
const handlePhoneChange = (text) => {
  let formattedText = text.split('-').join('');
  if (formattedText.length >= 8) {
    formattedText = formattedText.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  } else if (formattedText.length >= 4) {
    formattedText = formattedText.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  }
  setPhone(formattedText);
};

const validateInput = () => {
  if(email === '' || password === '' || name === '' || birth === '' || phone === '' || confirmPassword === '') {
    Alert.alert(
      "", // 타이틀을 빈 문자열로 설정하여 "ALERT"를 표시하지 않음
      "모든 필드를 채워주세요", // 알림 메시지
      [
        {text: "확인"}
      ],
      { cancelable: false }
    );
    return false;
  }
  return true;
};
  return (

    <View style={styles.view}>

      <Text style={styles.text}>회원가입</Text>
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}   >
      <ScrollView mt={180} ml={30} mr={30} >
        <VStack>
        <Text style={[styles.text6]}>
          <Text textAlign="left" style={styles.text7}>{`이메일 `}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <HStack w={"100%"} mt={2}>
        <Input size="lg" width={"70%"} backgroundColor={"white"} focusOutlineColor={"red.100"} mr={1}   onChangeText={text => setEmail(text)}></Input>
        <Pressable justifyContent="center" alignItems="center" style={styles.frameChild4} borderRadius={"br_3xs"}width={"30%"}
          onPress={checkDuplicateEmail}
        >
          <Text style={[styles.text17, styles.textTypo1]}>중복확인</Text>
        </Pressable>
        </HStack>
        <Text style={[styles.text6]} mt={3}>
    <Text textAlign="left" style={styles.text7}>{`비밀번호`}</Text>
    <Text style={styles.text8}>*</Text>
</Text>
<FormControl isInvalid={!!passwordError}>
    <Input 
        type={show ? "text" : "password"} 
        size="lg"  
        backgroundColor={"white"} 
        focusOutlineColor={"black"} 
        mr={1}   
        onChangeText={text => setPassword(text)}
    />
</FormControl>
<Text style={[styles.text6]} mt={3}>
    <Text textAlign="left" style={styles.text7}>{`비밀번호 확인`}</Text>
    <Text style={styles.text8}>*</Text>
</Text>
<FormControl isInvalid={!!passwordError}>
    <Input 
        type={show ? "text" : "password"} 
        size="lg"  
        backgroundColor={"white"} 
        focusOutlineColor={"black"} 
        mr={1}   
        onChangeText={text => setConfirmPassword(text)}
        onBlur={checkSamePassword}
    />
    <FormControl.ErrorMessage _text={{color: 'red', fontSize: 'sm', mt: '2'}}>
        {passwordError}
    </FormControl.ErrorMessage>
</FormControl>
        <Text style={[styles.text6]} mt={3}>
          <Text textAlign="left" style={styles.text7}>{`이름`}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <Input size="lg"  backgroundColor={"white"} focusOutlineColor={"black"} mr={1}
          onChangeText={text => setName(text)}
          ></Input>
        <Text style={[styles.text6]} mt={3}>
          <Text textAlign="left" style={styles.text7}>{`생년월일`}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <Input size="lg"  backgroundColor={"white"} focusOutlineColor={"black"} mr={1}
              placeholder="예) 000424"
              onChangeText={text => setBirth(text)}
              ></Input>
         <Box justifyContent="center" mt={5}>
    <HStack>
      <Text style={[styles.text6]}mt={1}>
        <Text textAlign="left" style={styles.text7}>{`성별`}</Text>
        <Text style={styles.text8}>*</Text>
      </Text>
      <Button.Group isAttached size="md" ml={2} flex={1}>
        <Button 
          w="50%" 
          variant={selectedButton === '여성' ? "solid" : "outline"} 
          onPress={() => setSelectedButton('여성')}
          colorScheme="dark.500"
        >
          <Text style={styles.text7}>여성</Text>
        </Button>
        <Button 
          w="50%" 
          variant={selectedButton === '남성' ? "solid" : "outline"} 
          onPress={() => setSelectedButton('남성')}
          colorScheme="dark.500"
        >
          <Text style={styles.text7}>남성</Text>
        </Button>
      </Button.Group>
    </HStack>
  </Box>

        <Text style={[styles.text6]} mt={3}>
          <Text textAlign="left" style={styles.text7}>{`핸드폰 번호`}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <Input keyboardType="numeric" size="lg"  backgroundColor={"white"} focusOutlineColor={"black"} mr={1}
        placeholder="010-0000-0000"
        onChangeText={handlePhoneChange}
        value={phone}></Input>

      <Box mt={6} >
      <Pressable
          onPress={async () => {
            if (!validateInput()) {
              return;
            }
            try {
              const userCredential = await auth.createUserWithEmailAndPassword(email, password);
              const user = userCredential.user;
        
              await db.collection('users').doc(user.uid).set({
                name: name,
                birth: birth,
                gender: selectedButton,
                phone: phone
              });
        
              navigation.navigate("Frame11");
            } catch (error) {
              console.error(error);
            }
          }}
            style={[styles.rectangleView, styles.frameChild4Bg]}
            justifyContent="center" alignItems="center"
          >
        
        <Text style={[styles.text5, styles.textTypo1]}>가입하기</Text>
      </Pressable>
      </Box>  
        </VStack>
      {/* <View style={styles.parent}>
        <Text style={[styles.text1, styles.textTypo2]}>성별</Text>
        <View style={[styles.rectangleParent, styles.textPosition]}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Text style={[styles.text2, styles.textTypo2]}>남자</Text>
          <Text style={[styles.text3, styles.textTypo2]}>여자</Text>
          <View style={[styles.frameItem, styles.textPosition1]} />
        </View>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text4, styles.textPosition]}>피부타입</Text>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-12.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupPosition]}
        onPress={() => navigation.navigate("Frame11")}
      >
        <View style={[styles.rectangleView, styles.frameChild4Bg]} />
        <Text style={[styles.text5, styles.textTypo1]}>가입하기</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.containerPosition]}>
        <View style={[styles.frameChild1, styles.frameChildPosition]} />
        <Text style={[styles.text6, styles.textPosition]}>
          <Text style={styles.text7}>{`이름 `}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameView, styles.containerPosition]}>
        <View style={[styles.frameChild1, styles.frameChildPosition]} />
        <Text style={[styles.text9, styles.textTypo2]}>예) 20000424</Text>
        <Text style={[styles.text10, styles.textTypo]}>생년월일</Text>
      </View>
      <View style={[styles.container, styles.containerPosition]}>
        <Text style={[styles.text6, styles.textPosition]}>
          <Text style={styles.text7}>{`비밀번호 `}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <View style={[styles.frameChild3, styles.frameChildPosition]} />
      </View>
      <View style={styles.parent1}>
        <Text style={[styles.text6, styles.textPosition]}>
          <Text style={styles.text7}>{`이메일 `}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <View style={[styles.rectangleParent1, styles.frameChild4Layout]}>
          <View style={[styles.frameChild4, styles.frameChild4Layout]} />
          <Text style={[styles.text17, styles.textTypo1]}>중복확인</Text>
        </View>
        <View style={[styles.frameChild5, styles.frameChildPosition]} />
      </View>
      <View style={styles.parent2}>
        <Text style={styles.textTypo}>
          <Text style={styles.text7}>{`비밀번호 확인 `}</Text>
          <Text style={styles.text8}>*</Text>
        </Text>
        <View style={[styles.frameChild6, styles.frameChildPosition]} />
      </View> */}
    </ScrollView>    
    </KeyboardAvoidingView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    fontWeight: "300",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    height: 39,
  },
  textPosition1: {
    top: 4,
    position: "absolute",
  },
  groupPosition: {
    left: "8.65%",
    right: "8.91%",
    width: "82.44%",
    position: "absolute",
  },
  frameChild4Bg: {
    backgroundColor: Color.colorDarksalmon,
  },
  textTypo1: {
    color: Color.colorWhite,
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
  },
  containerPosition: {
    width: "82.19%",
    right: "8.91%",
    left: "8.91%",
    position: "absolute",
  },
  frameChildPosition: {
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    left: 1,
    top: 0,
    fontWeight: "300",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  frameChild4Layout: {
    width: 95,
    height: 39,
    position: "absolute",
  },
  text: {
    top: 94,
    left: 33,
    fontSize: FontSize.size_16xl,
    lineHeight: 56,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  text1: {
    color: Color.colorDimgray_100,
    left: 0,
    top: 4,
    position: "absolute",
  },
  frameChild: {
    width: 260,
    top: 0,
    position: "absolute",
    left: 0,
  },
  text2: {
    left: 177,
    color: Color.colorDimgray_100,
    top: 4,
    position: "absolute",
  },
  text3: {
    left: 48,
    color: Color.colorDimgray_100,
    top: 4,
    position: "absolute",
  },
  frameItem: {
    left: 130,
    borderStyle: "solid",
    borderColor: "#8e8e8e",
    borderRightWidth: 1,
    width: 1,
    height: 33,
  },
  rectangleParent: {
    width: "80.75%",
    left: "19.25%",
    right: "0%",
    height: 39,
  },
  parent: {
    width: "81.93%",
    top: 609,
    right: "9.16%",
    height: 39,
    left: "8.91%",
    position: "absolute",
  },
  text4: {
    color: Color.colorDimgray_100,
    fontWeight: "300",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.pretendardLight,
    left: 0,
  },
  frameInner: {
    width: "99.69%",
    left: "0.31%",
    top: 32,
    right: "0%",
    position: "absolute",
  },
  polygonIcon: {
    top: 47,
    right: 12,
    width: 13,
    height: 11,
    position: "absolute",
  },
  group: {
    top: 773,
    height: 71,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    height: 67,
    width: "100%",
  },
  text5: {
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
  },
  rectangleGroup: {
    top: 871,
    height: 67,
  },
  frameChild1: {
    top: 32,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    height: 39,
    right: "0%",
    width: "100%",
  },
  text7: {
    color: Color.colorDimgray_100,
  },
  text8: {
    color: Color.colorOrangered,
  },
  text6: {
    fontWeight: "300",
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
    left: 0,
  },
  rectangleContainer: {
    top: 511,
    height: 71,
  },
  text9: {
    top: 36,
    left: 9,
    color: "#6f6f6f",
    position: "absolute",
  },
  text10: {
    color: Color.colorDimgray_100,
  },
  frameView: {
    top: 675,
    height: 71,
  },
  frameChild3: {
    top: 35,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    height: 39,
    right: "0%",
    width: "100%",
  },
  container: {
    top: 307,
    height: 74,
  },
  frameChild4: {
    backgroundColor: Color.colorDarksalmon,
    borderRadius: Border.br_3xs,
    width: 95,
  },
  text17: {
    fontSize: 17,
    lineHeight: 27,
    display: "flex",
  },
  rectangleParent1: {
    right: 0,
    top: 32,
  },
  frameChild5: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    height: 39,
  },
  parent1: {
    width: "83.72%",
    top: 209,
    right: "8.14%",
    left: "8.14%",
    height: 71,
    position: "absolute",
  },
  frameChild6: {
    top: 37,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    height: 39,
    right: "0%",
    width: "100%",
  },
  parent2: {
    top: 408,
    left: 35,
    width: 323,
    height: 76,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default Frame12;
