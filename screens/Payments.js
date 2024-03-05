import React, { useState, useEffect } from "react";
import {  StyleSheet, View,  Alert,  TouchableOpacity,Keyboard,Modal, Button, TextInput} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView, VStack, Box, FormControl, Input ,Text, HStack, KeyboardAvoidingView, Divider, IconButton, Pressable, FlatList} from "native-base";
import {auth,db} from '../firebaseConfig'
import { useSelector } from "react-redux";
import { Feather } from '@expo/vector-icons';



const Payment = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [user, setUser] = useState('');
  const item = useSelector(state => state.item);
  const formulation = useSelector(state => state.formulation);
  const base = useSelector(state => state.base);
  const concern = useSelector(state => state.concern);
  const concentration = useSelector(state => state.concentration);
  const volume = useSelector(state => state.volume);
  const bottle = useSelector(state => state.case);
  const name = useSelector(state => state.name);
  const extra = useSelector(state => state.extra);
  const price = useSelector(state => state.price);

  const [count, setCount] = useState(1); // 초기값을 1로 설정
  const [address, setAddress] = useState('');
  const [keyword, setKeyword] = useState('');
  const [detailAddr, setDetailAddr] = useState('');
  const [sender, setSender] = useState(user);
  const [receiver, setReceiver] = useState(user);
  const [extraValue, setExtraValue] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemPrice, setitemPrice] = useState(0);
  const increaseCount = () => {
      setCount(count + 1); // count 값을 1 증가
      console.log(count)
      setitemPrice(pricePerItem * (count+1))
  }

  const decreaseCount = () => {
      if (count > 1) { // count 값이 1보다 클 때만 감소
          setCount(count - 1); // count 값을 1 감소
          setitemPrice(pricePerItem * (count-1))
      }
  }

  const priceTable = {
    '크림': 5000, 
    '병출 추출물' : 5000,
    '녹차 추출물' : 5000,
    '달팽이 점액 추출물' : 5000,
    '꿀 추출물' : 5000,
    '프로폴리스 추출물' : 5000,
    '어성초 추출물' : 5000,
    '인진쑥 추출물' : 5000,
    // 필요한 만큼 다른 상품과 가격을 추가할 수 있습니다.
  };

  const pricePerItem = priceTable[item];  // 상품에 해당하는 가격을 찾습니다.
  useEffect(() => {
    if (!pricePerItem) {
      setTotalPrice(price)
      // setTotalPrice(Object.values(extra).reduce((sum, item) => sum + item.count * item.price, 0))
      setExtraValue(Object.keys(extra).join(", "))
      // console.log(Object.values(extra).reduce((sum, item) => sum + item.count * item.price, 0))
      
    }
    else{setitemPrice(pricePerItem * count) } // 총 가격을 계산합니다.
  }, [pricePerItem, extra]);
  
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();  // 월은 0부터 시작하므로 1을 더해야 합니다.
  const date = now.getDate();
  
  const paymentTime = now.toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
  const paymentDate = new Date(year, month, date  );  // 월은 0부터 시작하므로 1을 빼야 합니다.
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
  

  const searchAdd = async () => {
    const apiKey = 'devU01TX0FVVEgyMDI0MDIwNzA0NDIxMTExNDUwMTY=';
    const url = `http://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${apiKey}&currentPage=1&countPerPage=5&keyword=${encodeURI(keyword)}&resultType=json`;
  
    const response = await fetch(url);
  
    const data = await response.json();
  
    if (data.results.juso && data.results.juso.length > 0) {
      setAddress(data.results.juso[0].roadAddr);
      console.log(address)
    } else {
      console.log("No such address!");
      console.log(data.results.common.errorMessage)
    }
  };
  
  
  

  
const validateInput = () => {
  if(keyword === '' || user === '') {
    Alert.alert(
      "", // 타이틀을 빈 문자열로 설정하여 "ALERT"를 표시하지 않음
      "모든 필드를 채워주세요", // 알림 메시지
      [
        {text: "확인", onPress: () => console.log("OK Pressed")}
      ],
      { cancelable: false }
    );
    return false;
  }
  return true;
};



const AddressSearchModal = ({ isVisible, onClose, onSelected }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchAddress = async () => {
    const apiKey = 'devU01TX0FVVEgyMDI0MDIwNzA0NDIxMTExNDUwMTY=';
    const url = `http://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${apiKey}&currentPage=1&countPerPage=20&keyword=${encodeURI(searchText)}&resultType=json`;
  
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.results.juso && data.results.juso.length > 0) {
      setSearchResults(data.results.juso);
      console.log(searchResults.map)
    } else {
      console.log("No such address!");
    }
  };

  const setAddress = (addr) => {
    setKeyword(addr);
    onClose();
  }
  return (
    <Modal visible={isVisible} onRequestClose={onClose}>
      <View style={{flex: 1}}> 
      <VStack space={1} flex={1}>
        <Input 
          value={searchText} 
          onChangeText={text => setSearchText(text)}
          placeholder="주소 검색" 
        />
        <Button title="검색" onPress={searchAddress} />
        <Button title="닫기" onPress={onClose} />
        <ScrollView  > 
        
        {searchResults.map((result, index) => (
        <Pressable onPress={() => setAddress(result.roadAddr)} mt={1} mb={1} borderBottomWidth={1} borderBottomColor={"gray.300"}>
          <Text key={index} style={styles.text21}>
            지번주소: {result.jibunAddr} {"\n"}
            도로명주소: {result.roadAddr} {"\n"}
            우편번호: {result.zipNo} 
          </Text>
          </Pressable>
        
        ))}
       
        </ScrollView>
      </VStack>
      </View>
    </Modal>
  );
};

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);

  const closeModal = () => setModalVisible(false);

  const handleAddressSelected = (selectedAddress) => {
    setAddress(selectedAddress);
    closeModal();
  };


  return (

    <View style={styles.view}>

<AddressSearchModal 
        isVisible={modalVisible} 
        onClose={closeModal} 
        onSelected={handleAddressSelected} 
      />

      <Text style={styles.text}>주문하기</Text>
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}   >
      <ScrollView mt={180} ml={15} mr={30} >
        
        <VStack space={2} mr={5} ml={5}>
        {item ? (<>
          <Box  mr={8}>
                <HStack h={60} alignItems={"center"} justifyContent="space-between">
                <Text style={styles.texttb}>{name}</Text>
                </HStack>
        <Text>
           {bottle} {extraValue}
        </Text>
        </Box> 
        <HStack alignItems={"center"} justifyContent={"space-between"}>
        
          <HStack alignItems={"center"} space={1}>
        <IconButton _pressed={{bg: "gray.100:alpha.1"}} icon={<Feather name="minus" size={18} color={"gray"}/>} borderRadius="full"  onPress={decreaseCount}/>

        <Box alignItems={"center"} w={10} borderWidth={1} borderRadius={5}> 
          <Text>{count}</Text>
        </Box>
        <IconButton  _pressed={{bg: "gray.100:alpha.1"}}  icon={<Feather name="plus" size={18} color={"gray"}/>}  borderRadius="full" onPress={increaseCount}/>
        </HStack>

        <Text style={styles.text4}>{itemPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
        </HStack>
        </>) : (<>
          <Box  mr={8}>
                <HStack h={60} alignItems={"center"} justifyContent="space-between">
                <Text style={styles.texttb}>{name}</Text>
                </HStack>
                <Text>
          {extraValue}
        </Text>
        </Box> 
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} space={1}>
       
        </HStack>
        <Text style={styles.text4}>{totalPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
        </HStack>
        </>)}
  

        

        <Divider/>
        <Text style={styles.texttb}>주문자 정보</Text>
        <Text>보내는 사람</Text>
<Input
  size="lg"
  width={"100%"}
  backgroundColor={"white"}
  focusOutlineColor={"#9A887E"}
  mr={1}
  onChangeText={text => setSender(text)}
  defaultValue={user}
/>
        <Text>받는 사람</Text>
        <Input size="lg" width={"100%"} backgroundColor={"white"} focusOutlineColor={"#9A887E"} mr={1} onChangeText={text => setReceiver(text)} >{user}</Input>
        <Text>배송 주소</Text>
        <HStack>
          <Input
          size="lg"
          width={"70%"}
          backgroundColor={"white"}
          focusOutlineColor={"#9A887E"}
          mr={1}
          readOnly={"true"}
          value={keyword}
          />
          <Pressable borderRadius={5} w={"30%"} backgroundColor={"coolGray.400"} justifyContent={"center"} onPress={openModal}>
            <Text textAlign={"center"}>주소검색</Text>
          </Pressable>
        </HStack>
          <Text>상세 주소</Text>
          <Input size="lg" width={"100%"} backgroundColor={"white"} focusOutlineColor={"#9A887E"} mr={1}   onChangeText={text => setDetailAddr(text)} ></Input>
          <Pressable onPress={async () => {
            if (!validateInput()) {
              return;
            }
            try {
              
              const newOrderRef = db.collection('order');
              await newOrderRef.add({
                "결제금액" : totalPrice, 
                "보내는 사람" : sender || user,
                "받는 사람" : receiver || user,
                "도로명" : address,
                "상세 주소": detailAddr,
                "종류" : item,
                "제형" : formulation,
                "베이스" : base,
                "고민" : concern,
                "농도" : concentration,
                "용량" : volume,
                "케이스" : bottle,
                "결제시간" : paymentTime,
                "결제일자" : paymentDate,
                "주문자": auth.currentUser.uid
              });
              alert("결제 기능 준비 중")
              navigation.reset({
                index: 0,
                routes: [{ name: 'Screen1' }],
              });
                  } catch (error) {
              console.error(error);
            }
          }} h={"12"} borderRadius={5} w={"100%"} backgroundColor={"coolGray.400"} justifyContent={"center"} >
            <Text style={styles.textTypo1} textAlign={"center"}>결제하기</Text>
          </Pressable>
        </VStack>

    </ScrollView>    
    </KeyboardAvoidingView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    color: Color.colorWhite,
    top: 0,
    height: 30,
    lineHeight: 32,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.pretendardLight,
    fontWeight: "600",
  },
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
  texttb: {
    fontWeight: "600",
    fontFamily: FontFamily.pretendardLight,
    lineHeight: 40,
    fontSize: FontSize.size_6xl,
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
  text21: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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

export default Payment;
