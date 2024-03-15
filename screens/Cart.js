import React, { useState, useEffect } from "react";
import {  StyleSheet, View,  Alert,  TouchableOpacity,Keyboard,Modal, Button, TextInput} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView, VStack, Box, FormControl, Input ,Text, HStack, KeyboardAvoidingView, Divider, IconButton, Pressable, FlatList, Radio} from "native-base";
import {auth,db} from '../firebaseConfig'
import { useSelector } from "react-redux";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Cart = () => {
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
  const [depositor, setDepositor] = useState('');
  const [carts, setCarts] = useState([]); // 레시피 데이터를 저장할 state
  const increaseCount = (recipe) => {
    const id = recipe.id;
    setCount(prevCount => ({...prevCount, [id]: (prevCount[id] !== undefined ? prevCount[id] : recipe.count || 1) + 1}));
}

const decreaseCount = (recipe) => {
    const id = recipe.id;
    setCount(prevCount => ({...prevCount, [id]: Math.max((prevCount[id] !== undefined ? prevCount[id] : recipe.count || 1) - 1, 0) }));
}
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();  // 월은 0부터 시작하므로 1을 더해야 합니다.
const date = now.getDate();

const paymentTime = now.toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
const paymentDate = new Date(year, month, date  );  // 월은 0부터 시작하므로 1을 빼야 합니다.

  const priceTable = {
    '크림': 5000, 
    '병출 추출물' : 5000,
    '녹차 추출물' : 5000,
    '달팽이 점액 추출물' : 5000,
    '꿀 추출물' : 5000,
    '프로폴리스 추출물' : 5000,
    '어성초 추출물' : 5000,
    '인진쑥 추출물' : 5000,
  };

  const pricePerItem = priceTable[item];  // 상품에 해당하는 가격을 찾습니다.
  useEffect(() => {
    if (!pricePerItem) {
      setTotalPrice(price)
      setExtraValue(Object.keys(extra).join(", "))
      
    }
    else{setitemPrice(pricePerItem * count) } // 총 가격을 계산합니다.
  }, [pricePerItem, extra]);
  

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
  
  async function getCart() {
    const userId = auth.currentUser.uid;
    const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
    const cartRef = userRef.collection('cart'); // 레시피 컬렉션 참조 생성
    const snapshot = await cartRef.get(); // 레시피 컬렉션의 스냅샷 가져오기
    
    // 스냅샷에서 문서 데이터 가져오기
    const cart = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return cart; // 레시피 데이터 반환
  }
  

  useEffect(() => {
    getCart().then((data) => setCarts(data)); // 레시피 데이터 가져오기
  }, []);
  const groupedCarts = carts.reduce((grouped, recipe) => {
    (grouped[recipe.skinType] = grouped[recipe.skinType] || []).push(recipe);
    return grouped;

  }, {});





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
        <Pressable key={index} onPress={() => setAddress(result.roadAddr)} mt={1} mb={1} borderBottomWidth={1} borderBottomColor={"gray.300"}>
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

  async function deleteCart(recipeId) {
    const userId = auth.currentUser.uid;
    const userRef = db.collection('users').doc(userId);
    const cartRef = userRef.collection('cart').doc(recipeId);
  
    await cartRef.delete();
    getCart().then((data) => setCarts(data));

  }

  let total = 0;
  Object.keys(groupedCarts).forEach((skinType) => {
      groupedCarts[skinType].forEach((recipe) => {
          total += recipe.가격 * (count[recipe.id] !== undefined ? count[recipe.id] : recipe.개수 || 1);
      });
  });
  
  return (

    <View style={styles.view}>
<AddressSearchModal 
        isVisible={modalVisible} 
        onClose={closeModal} 
        onSelected={handleAddressSelected} 
      />

     
      <KeyboardAvoidingView flex={1} behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}   >
         <HStack mt={10} ml={6}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.navigate('Screen1')  }>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo2]}>장바구니</Text>
      </HStack>

      <ScrollView mt={70} ml={15} mr={30} >
        
        <VStack space={2} mr={5} ml={5}>
            
        {Object.keys(groupedCarts).map((skinType) => (
              <Box key={skinType}>
                {groupedCarts[skinType].map((recipe) => (
                  <VStack key={recipe.id}>
                  <Box  >
                <HStack h={60} alignItems={"center"} justifyContent={"space-between"}>
                <Text style={styles.texttb}>{recipe.레시피}</Text>
                <IconButton
                    _pressed={{bg: "gray.600:alpha.10"}}
                    icon={<AntDesign name="delete" size={18} color="gray"  />}
                    borderRadius="full"
                    onPress={() => deleteCart(recipe.id)}/>
                    
                </HStack>
        <Text>
           {recipe.제품}, {recipe.케이스}
        </Text>
        </Box> 
        <HStack alignItems={"center"} justifyContent={"space-between"}>
        
          <HStack alignItems={"center"} space={1}>
        <IconButton _pressed={{bg: "gray.100:alpha.1"}} icon={<Feather name="minus" size={18} color={"gray"}/>} borderRadius="full"  onPress={() => decreaseCount(recipe)}/>

        <Box key={recipe.id} alignItems={"center"} w={10} borderWidth={1} borderRadius={5}> 
        <Text>{count[recipe.id] !== undefined ? count[recipe.id] : recipe.개수 || 1}</Text>
        </Box>
        <IconButton  _pressed={{bg: "gray.100:alpha.1"}}  icon={<Feather name="plus" size={18} color={"gray"}/>}  borderRadius="full" onPress={() => increaseCount(recipe)}/>
        </HStack>

        <Text style={styles.text4}>{(recipe.가격 * (count[recipe.id] !== undefined ? count[recipe.id] : recipe.개수 || 1)).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
        </HStack>

              
                  </VStack>
                ))}
              </Box>
              
            ))}
      

        

        <Divider/>
        <HStack justifyContent={'space-between'}>
        <Text style={styles.texttb}>총 금액</Text>
        <Text style={styles.texttb}>{total.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
        </HStack>
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
  value={sender ? sender : user}

/>
        <Text>받는 사람</Text>
        <Input size="lg" width={"100%"} backgroundColor={"white"} focusOutlineColor={"#9A887E"} mr={1} onChangeText={text => setReceiver(text ? text:user)} >{user}</Input>
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
          
          <Divider mt={5}/>
          <Text style={styles.texttb}>결제 수단</Text>
          <VStack space={4}>
          <Radio.Group mt={2}colorScheme={"blue"}>
          <Radio >무통장입금</Radio>
          </Radio.Group>
          <HStack justifyContent={"space-between"}>
            <Text>받는사람</Text>
            <Text bold color={"blue.500"}>주식회사 셀바이오</Text>
          </HStack>
          <HStack  justifyContent={"space-between"}>
            <Text>입금은행</Text>
            <Text bold color={"blue.500"}>기업은행</Text>
          </HStack>
          <HStack  justifyContent={"space-between"}>
            <Text>계좌번호</Text>
            <Text bold color={"blue.500"}>472-059724-01-013</Text>
          </HStack>
          <HStack  justifyContent={"space-between"}>
            <Text>송금액</Text>
            <Text bold color={"blue.500"}>{total}원</Text>
          </HStack>
          <Text>입금자명</Text> 
          <Input size="lg" width={"100%"} backgroundColor={"white"} focusOutlineColor={"#9A887E"} mr={1}   onChangeText={text => setDepositor(text)} ></Input>
          </VStack>

          
          <Pressable onPress={async () => {
            if (!validateInput()) {
              return;
            }
            try {
                const cartWithCount = carts.map(item => ({
                    ...item,
                    개수: count[item.id] !== undefined ? count[item.id] : item.개수 || 1,
                }));
              const newOrderRef = db.collection('order');
              const userId = auth.currentUser.uid;

    const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
  
    const doc = await userRef.get();
        const userData = doc.data();
      const phone = userData.phone;
              await newOrderRef.add({
                "결제금액" : total, 
                "보내는사람" : sender || user,
                "받는사람" : receiver || user,
                "결제시간" : paymentTime,
                "결제일자" : paymentDate,
                "도로명" : keyword,
                "상세주소": detailAddr,
                "주문서": cartWithCount,
                "주문자": auth.currentUser.uid,
                "입금자명": depositor,
                "연락처": phone,
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
  chevronLeftIcon: {
    width: 41,
    height: 41,
    overflow: "hidden",
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

export default Cart;
