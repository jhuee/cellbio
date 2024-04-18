import React, { useEffect, useState } from 'react';
import {  StyleSheet, View,  Alert,  TouchableOpacity,Keyboard, Button, TextInput} from "react-native";
import {auth,db} from '../firebaseConfig';
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView,FlatList, VStack, Box, FormControl, Input , HStack, KeyboardAvoidingView, Divider, Select, Pressable, Badge, Text, Modal, Radio} from "native-base";

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // 또는 useState({})
  const [currentStatus, setCurrentStatus] = useState(selectedOrder ? selectedOrder.상태 : '결제대기');
  const [refresh, setRefresh] = useState(false);

  // 상태 변경 함수
  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    updateOrderStatus(selectedOrder.id, newStatus); // 선택된 order의 상태를 업데이트하는 함수, 구현 필요
    console.log(selectedOrder.id)
  };

  const StatusButton = ({ status }) => (
    <Pressable
      onPress={() => handleStatusChange(status)}
      style={({ isPressed }) => [
        {
          backgroundColor: currentStatus === status ? 'darkblue' : 'lightgray',
          padding: 10,
          margin: 2,
        },
        isPressed && {
          backgroundColor: currentStatus === status ? 'darkblue' : 'gray',
        },
      ]}
    >
      <Text style={{ color: 'white' }}>{status}</Text>
    </Pressable>
  );


  useEffect(() => {
    const userId = auth.currentUser.uid;
    const ordersRef = db.collection('order');
    const query = ordersRef.orderBy('결제일자', 'desc');
    
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
  },  [refresh]);
  
  // 주문 상태 업데이트 함수
const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const orderRef = db.collection('order').doc(orderId); // 'order'는 주문 정보가 저장되어 있는 컬렉션의 이름입니다.
    await orderRef.update({
      '상태': newStatus
    });
    console.log("주문 상태가 성공적으로 업데이트되었습니다.");
    setRefresh(prev => !prev);

  } catch (error) {
    console.error("주문 상태 업데이트 중 오류 발생:", error);
  }
};


  return (
    <View style={styles.view1} >
        <HStack mt={10} ml={6}space={3} alignItems={"center"}>
        
      <Text style={[styles.titleText, styles.textTypo2]}>주문 내역 리스트</Text>
      </HStack>

      
      <ScrollView mt={50}>
        <VStack space={10}>
          {Object.entries(orders).map(([date, ordersOnDate]) => (
            <VStack space={2} key={date}>
              <Text style={styles.textTypo3}>{date}</Text>
              {ordersOnDate.map(order => (
                <VStack space={3} key={order.id}>
                  <Pressable
                    shadow={2}
                    rounded={4}
                    ml={2}
                    mr={2}
                    p={4}
                    bgColor={"coolGray.100"}
                    onPress={() => {
                      setShowModal(true);
                      setSelectedOrder(order); // 선택된 주문 상태 업데이트
                    }}
                  >
                    <Text bold color={"green.700"}>{order.상태}</Text>
                    {order.주문서.map(item => (
                      <Box key={item.레시피}>
                        <HStack alignItems={"center"}>
                          <Text style={styles.textTypo3}>{item.레시피}</Text>
                          <Text style={styles.textTypo5}> {item.제품} *{item.개수}개</Text>
                        </HStack>
                      </Box>
                    ))}
                    <Text bold color={"green.700"} style={styles.textTypo4}>자세히</Text>
                  </Pressable>
                </VStack>
              ))}
            </VStack>
          ))}
        </VStack>
      </ScrollView>

      {/* 모달 구현 */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>주문서 상세</Modal.Header>
          <Text style={styles.textTypo3}>주문 현황 변경</Text>
        <Select  onValueChange={itemValue => handleStatusChange(itemValue)} placeholder="주문 현황 변경">
          <Select.Item label='결제 대기' value='결제대기'></Select.Item>
          <Select.Item label='입금 확인' value='입금확인'></Select.Item>
          <Select.Item label='배송 준비' value='배송준비'></Select.Item>
          <Select.Item label='배송중' value='배송중'></Select.Item>
          <Select.Item label='배송완료' value='배송완료'></Select.Item>
        </Select>
       <Divider mt={3}/>

          <FlatList
  data={selectedOrder ? selectedOrder.주문서 : []}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <VStack key={index} space={2}>
      <HStack alignItems={"center"}>
        <Text style={styles.textTypo3}>{item.레시피}</Text>
        <Text style={styles.textTypo5}> {item.제품} *{item.개수}개</Text>
      </HStack>
      {item.농도 && <Text style={styles.textTypo6}>농도: {item.농도}</Text>}
      {item.베이스 && <Text style={styles.textTypo6}>베이스: {item.베이스}</Text>}
      {item.용량 && <Text style={styles.textTypo6}>용량: {item.용량}</Text>}
      {item.제형 && <Text style={styles.textTypo6}>제형: {item.제형}</Text>}
      {item.케이스 && <Text style={styles.textTypo6}>케이스: {item.케이스}</Text>}
      <Divider/>
      <HStack alignContent={"center"} justifyContent={"space-between"}>
        <Text style={styles.textTypo4}>보내는 사람</Text>
        {selectedOrder && <Text color={"blue.500"} style={styles.textTypo4} bold>{selectedOrder.보내는사람}</Text>}
      </HStack>
      <HStack alignContent={"center"} justifyContent={"space-between"}>
        <Text style={styles.textTypo4}>받는 사람</Text>
        {selectedOrder &&<Text color={"blue.500"} style={styles.textTypo4} bold >{selectedOrder.받는사람}</Text>}
      </HStack>
      <VStack alignContent={"center"} >
        <Text style={styles.textTypo4}>주소</Text>
        {selectedOrder && <Text color={"blue.500"} style={styles.textTypo4} bold >{selectedOrder.도로명}, {selectedOrder.상세주소} </Text>}
      </VStack>
      <HStack alignContent={"center"} justifyContent={"space-between"}>
        <Text style={styles.textTypo4}>연락처</Text>
        {selectedOrder && <Text color={"blue.500"} style={styles.textTypo4} bold >{selectedOrder.연락처}</Text>}
      </HStack>
      <HStack alignContent={"center"} justifyContent={"space-between"}>
        <Text style={styles.textTypo4}>입금자명</Text>
        {selectedOrder &&  <Text color={"blue.500"} style={styles.textTypo4} bold >{selectedOrder.입금자명}</Text>}
      </HStack>
      <HStack alignItems={"center"} justifyContent={'space-between'}>
        <Text style={styles.textTypo4}>결제 금액</Text>
        {selectedOrder &&<Text style={styles.textTypo4}>{selectedOrder.결제금액} 원</Text>}
      </HStack>
    </VStack>
  )}
/>
        </Modal.Content>
      </Modal>

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
          textTypo6: {
            fontFamily: FontFamily.pretendardLight,
            lineHeight: 40,
            fontSize: FontSize.size_smi,
          },
      });

      export default OrderHistoryScreen;