import React, { useEffect, useState } from 'react';
import {  StyleSheet, View,  Alert,  TouchableOpacity,Keyboard,Modal, Button, TextInput} from "react-native";
import {auth,db} from '../firebaseConfig';
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView, VStack, Box, FormControl, Input , HStack, KeyboardAvoidingView, Divider, IconButton, Pressable, FlatList, Text} from "native-base";

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const ordersRef = db.collection('order');
    const query = ordersRef.where('주문자', '==', userId).orderBy('결제일자', 'desc');
    
    query.get().then((querySnapshot) => {
      const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // 결제 일자별로 그룹화
      const groupedOrders = orders.reduce((groups, order) => {
        const date = order.결제일자.toDate().toISOString().split('T')[0];  // 날짜만 추출
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(order);
        return groups;
      }, {});

      setOrders(groupedOrders);
    });
  }, []);
  

  return (
    <View style={styles.view1} >
        <HStack mt={10} ml={6}space={3} alignItems={"center"}>
        <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      <Text style={[styles.titleText, styles.textTypo2]}>주문 내역</Text>
      </HStack>

    <ScrollView mt={50}>
        <VStack space={10} ml={5} mr={5}>
        {Object.entries(orders).map(([date, ordersOnDate]) => (
        <VStack space={2} key={date}>
          <Text style={styles.textTypo3}>{date}</Text>
          {ordersOnDate.map(order => (
            <VStack p={2} borderWidth={1} borderRadius={5} borderColor={"coolGray.600"} key={order.id}>
              <Text bold color={"green.700"}>{order.상태}</Text>
              <Divider mt={2}/>
              {order.주문서.map(item => (
                <Box key={item.레시피}>
                <HStack alignItems={"center"}>
                <Text style={styles.textTypo3}>{item.레시피}</Text>
                  <Text style={styles.textTypo5}> {item.제품} {item.개수}개</Text>
                  </HStack>
                </Box>
              ))}
              <Divider/>
              <HStack  alignItems={"center"} justifyContent={'space-between'}>
                <Text style={styles.textTypo4}>결제 금액</Text>
               <Text style={styles.textTypo4}>{order.결제금액.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
               </HStack>
              {/* <Text>보내는 사람: {order.보내는사람}</Text>
              <Text>받는 사람: {order.받는사람}</Text>
              <Text>결제 시간: {order.paymentTime}</Text>
              <Text>주소: {order.도로명}, {order.상세주소}</Text> */}
            </VStack>
          ))}
        </VStack>
      ))}
      </VStack>
      </ScrollView>
      </View>)
      }
          

      const styles = StyleSheet.create({

        view1 : {
            backgroundColor: 'white',
            flex:1,
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
        textTypo3: {
            fontFamily: FontFamily.pretendardLight,
            fontWeight: "600",
            lineHeight: 40,
            fontSize: FontSize.size_xl,
          }, 
          textTypo4: {
            fontFamily: FontFamily.pretendardLight,
            fontWeight: "600",
            lineHeight: 40,
            fontSize: FontSize.size_mini,
          },
          textTypo5: {
            fontFamily: FontFamily.pretendardLight,
            fontWeight: "600",
            lineHeight: 40,
            fontSize: FontSize.size_smi,
          },
          
      });

      export default OrderHistoryScreen;