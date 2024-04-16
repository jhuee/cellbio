import React from 'react';
import { Modal, Text, Button, Box } from 'native-base'; // 이 부분은 사용하는 UI 라이브러리에 맞게 수정해주세요.

const CustomModal = ({ isOpen, onClose, extras, totalPrices, onSave }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <Modal.Content maxWidth="400px">
      <Modal.CloseButton />
      <Modal.Header >
        {/* <Text style={styles.textModal}>/ */}
          <Text style={styles.text4}>
          추출물 구매
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Box>
      <Text style={styles.text4}>추출물 구매 (50ml)</Text>
      <Divider mt={1} />
  </Box>
  {extras.map((extra, index) => (
<Box key={index}>
<HStack mt={3} alignItems={"center"} space={2} justifyContent={"space-between"}>
  <Text style={styles.text4}>{extra.name}</Text>
  <HStack alignItems={"center"}>
    <HStack alignItems={"center"} space={1}>
      <IconButton _pressed={{bg: "gray.100:alpha.1"}} icon={<Feather name="minus" size={18} color={"gray"}/>} borderRadius="full"  onPress={() => decreaseCounts(index)}/>
      <Box alignItems={"center"} w={10} borderWidth={1} borderRadius={5}> 
        <Text>{extra.count}</Text>
      </Box>
      <IconButton  _pressed={{bg: "gray.100:alpha.1"}}  icon={<Feather name="plus" size={18} color={"gray"}/>}  borderRadius="full" onPress={() => increaseCounts(index)}/>
    </HStack>
  </HStack>
</HStack>
</Box>
))
}

 <Divider/>
  <HStack mt={2} justifyContent={"space-between"}>
    <Text style={styles.text4}>총 금액</Text>
    <Text style={styles.text4}>{totalPrices.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
    </HStack>
      </Modal.Body>
      <Modal.Footer>
        <Button.Group space={2} justifyContent={'space-between'} >
          <Button w={'50%'} borderRadius={5} borderWidth={1} borderColor={'#83B8B8'} variant="ghost" colorScheme="blueGray" onPress={async  () =>{
                const extrasToSave = extras.filter(extra => extra.count > 0);

                const extrasString = extrasToSave.map(extra => `${extra.name}(${extra.count}개)`).join(', ');

              
           
          try {
          const userId = auth.currentUser.uid;
          const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
          const recipeRef = userRef.collection('cart').doc(); // 레시피 문서 참조 생성
            
          await recipeRef.set({ // 레시피 문서에 데이터 저장
              skinType : '지성 피부',
              "제품" : extrasString,
              "레시피" : '추출물',
              "가격" : totalPrices,
            });
    
          alert("저장되었습니다.")
          navigation.reset({
            index: 0,
            routes: [{ name: 'Cart' }],
          });
        } catch (error) {
          console.error(error);
        }
      }} >
            <Text style={styles.text4}>
              장바구니 
            </Text>
          </Button>
          <Button  w={'50%'} bg="#83B8B8" onPress={handleExtraItem}>
            <Text style={styles.text4} color={"white"}>
              바로구매
            </Text>
          </Button>
        </Button.Group>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
  );
};

export default CustomModal;
