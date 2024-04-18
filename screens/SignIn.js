import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable , Alert} from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import firebase from '../firebaseConfig';


const Screen1 = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // 로그인이 이미 되어있는 경우
        navigation.reset({
          index: 0,
          routes: [{ name: 'Frame9' }],
        });
      }
    });
    
    // 컴포넌트 unmount 시 리스너 해제
    return unsubscribe;
  }, [navigation]);

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // 여기서는 이메일 주소로 관리자 여부를 가정합니다.
      // 실제로는 Firestore나 Realtime Database에서 관리자 여부를 확인해야 합니다.
      if(user.email === "cellbiotoktok@gmail.com") {
        // 관리자 계정으로 판단되면 다른 화면으로 네비게이션 합니다.
        navigation.navigate("AdminPage");
      } else {
        // 일반 사용자인 경우의 화면으로 네비게이션 합니다.
        navigation.navigate("Frame9");
      }
    } catch (error) {
      Alert.alert("로그인 실패", "이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };
  
  

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
        value={email}
        containerStyle={styles.frameTextInputInput}
        onChangeText={setEmail}

      />
      <Input
        style={styles.frame1}
        placeholder="비밀번호"
        required={false}
        disabled={false}
        inputStyle={{}}
        containerStyle={styles.frameTextInput1Input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}  
      />
      <Pressable
        style={[styles.frame3, styles.framePosition]}
        onPress={handleLogin}
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
