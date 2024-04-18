import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VStack, HStack, Divider, Select, Box, ScrollView} from 'native-base';

const DetailScreen = ({ route }) => {
  const { selectedOrder } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
      <VStack>
        <Text style={styles.textTypo3}>주문 현황 변경</Text>
        <Select  onValueChange={itemValue => handleStatusChange(itemValue)} placeholder="주문 현황 변경">
          <Select.Item label='결제 대기' value='결제대기'></Select.Item>
          <Select.Item label='입금 확인' value='입금확인'></Select.Item>
          <Select.Item label='배송 준비' value='배송준비'></Select.Item>
          <Select.Item label='배송중' value='배송중'></Select.Item>
          <Select.Item label='배송완료' value='배송완료'></Select.Item>
        </Select>
       <Divider mt={3}/>
        {selectedOrder && selectedOrder.주문서.map((item, index) => (
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
          </VStack>
        ))}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // 여기에 필요한 스타일을 추가합니다.
});

export default DetailScreen;
