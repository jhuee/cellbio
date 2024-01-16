import {useState, useEffect}  from "react";
import {StyleSheet} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Divider, HStack, ScrollView, View, Text, VStack, Circle, Box, Pressable,ChevronRightIcon, AddIcon, Button, Modal, FormControl, Input, IconButton} from "native-base";
import {db, auth} from '../firebaseConfig'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Frame1 = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation(); // navigation hook 추가
  const [addedSkinTypes, setAddedSkinTypes] = useState([]);
  const [remainingSkinTypes, setRemainingSkinTypes] = useState(['건성', '중성','지성', '복합성']);
  const [recipes, setRecipes] = useState([]); // 레시피 데이터를 저장할 state

    async function getRecipe() {
        const userId = auth.currentUser.uid;
        const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
        const recipeRef = userRef.collection('recipe'); // 레시피 컬렉션 참조 생성
        const snapshot = await recipeRef.get(); // 레시피 컬렉션의 스냅샷 가져오기
        
        // 스냅샷에서 문서 데이터 가져오기
        const recipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return recipes; // 레시피 데이터 반환
      }
       getRecipe('userId').then((recipes) => console.log(recipes));
      
      

      useEffect(() => {
        getRecipe().then((data) => setRecipes(data)); // 레시피 데이터 가져오기
      }, []);
    
      const groupedRecipes = recipes.reduce((grouped, recipe) => {
        (grouped[recipe.skinType] = grouped[recipe.skinType] || []).push(recipe);
        return grouped;
      }, {});

      

      async function getSkinType() {
        const userId = auth.currentUser.uid;
        const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
        const skinTypeRef = userRef.collection('type').doc('skinType'); // 피부타입 문서 참조 생성
        const skinTypeDoc = await skinTypeRef.get();
        return skinTypeDoc.exists ? skinTypeDoc.data().types : [];
      }
    
      useEffect(() => {
        getSkinType().then((skinTypes) => {
          setAddedSkinTypes(skinTypes);
          setRemainingSkinTypes(['건성', '중성','지성', '복합성'].filter((type) => !skinTypes.includes(type)));
        });
      }, []);
    
      const addSkinType = (type) => {
        setAddedSkinTypes([...addedSkinTypes, type]);
        setRemainingSkinTypes(remainingSkinTypes.filter((skinType) => skinType !== type));
      };
    
      const removeSkinType = (type) => {
        setAddedSkinTypes(addedSkinTypes.filter((skinType) => skinType !== type));
        setRemainingSkinTypes([...remainingSkinTypes, type]);
      };
      
      const saveSkinTypes = () => {

        const userId = auth.currentUser.uid;
        const userRef = db.collection('users').doc(userId); // 사용자 문서 참조 생성
        userRef.collection('type').doc('skinType').set({
          types: addedSkinTypes,
        }, { merge: true });
      
      };
    
      return (
        <View style={styles.view}>
          <VStack space={4}mt={10}>
          <Box>
  <HStack space={4} alignItems={"center"} justifyContent={"center"}>
    {addedSkinTypes.map((type, index) => {
      let result;
      switch (type) {
        case '지성':
          result = '지성 피부';
          break;
        case '건성':
          result = '건성·민감성 피부';
          break;
        case '중성':
          result = '중성·약간 민감성 피부';
          break;
        case '복합성':
          result = '복합성 피부';
          break;
      }
      return (
        <Pressable key={type} onPress={() => navigation.navigate('Result', { result })}>
          <Circle size="60px" bg={index === 0 ? "#B5CECE" : index === 1 ? "#83B8B8" : "#5DA6A6"}>
            <Text color={"#033838"}>{type}</Text>
          </Circle>
        </Pressable>
      );
    })}
    <Pressable onPress={() => setShowModal(true)}>
      <Circle size="60px" borderColor={"#83B8B8"} borderWidth={2}>
        <AddIcon color={"#033838"}/>
      </Circle>
    </Pressable>
  </HStack>
</Box>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header >
            <Text style={styles.text}>
              피부 타입 추가
            </Text>
          </Modal.Header>
          <Modal.Body>
            {/* 피부 타입 추가 */}
            <Box>
        <HStack alignItems={"center"} space={2}>
          <Text>추가된 타입</Text>
          <Divider w={"70%"} />
        </HStack>
      </Box>
      {addedSkinTypes.map((type) => (
        <Box key={type}>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Text>{type}</Text>
            <IconButton _pressed={{bg: "red.600:alpha.20"}} onPress={() => removeSkinType(type)} icon={<AntDesign name="minuscircleo" size={18} color="#D80000"  />} borderRadius="full" />
          </HStack>
        </Box>
      ))}
      <Box>
        <HStack alignItems={"center"} space={2}>
          <Text>피부 타입</Text>
          <Divider w={"70%"} />
        </HStack>
      </Box>
      {remainingSkinTypes.map((type) => (
        <Box key={type}>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Text>{type}</Text>
            <IconButton _pressed={{bg: "green.600:alpha.20"}} onPress={() => addSkinType(type)} icon={<AntDesign name="pluscircleo" size={18} color="#488000" />} borderRadius="full" />
          </HStack>
        </Box>
      ))}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                <Text style={styles.text}>
                  취소
                </Text>
              </Button>
              <Button bg="#83B8B8" onPress={() => {
              setShowModal(false);
              saveSkinTypes();
            }}>
                <Text style={styles.text} color={"white"}>
                  저장
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          <Box ml={6} mr={6}>
            <HStack alignItems={"center"} space={2} >
            <Text style={styles.textTypo1} color={"#B8B8B8"}>지성</Text>
            <Divider thickness={1.5} w={"90%"}/>
            </HStack>
            </Box>
            
              <Pressable ml={8} mr={8}>
                <HStack h={60} alignItems={"center"} justifyContent="space-between">
                <Text style={styles.text}>맞춤 레시피1</Text>
                <ChevronRightIcon />
                </HStack>
              </Pressable>
            
            
              <Pressable ml={8} mr={8}>
                <HStack h={60} alignItems={"center"} justifyContent="space-between">
                <Text style={styles.text}>맞춤 레시피2</Text>
                <ChevronRightIcon />
                </HStack>
              </Pressable>
           
            </VStack>
            {/* {Object.keys(groupedRecipes).map((skinType) => (
              <View key={skinType}>
                <HStack>
                <Text style={styles.textTypo}>{skinType}</Text>
                <Divider thickness={2}/>
                </HStack>
                {groupedRecipes[skinType].map((recipe) => (
                  <View key={recipe.id}>
                    <Text>{recipe.base}</Text>
                    {recipe.concerns && recipe.concerns.map((concern, index) => (
  <Text key={index}>{concern}</Text>
))}
                  </View>
                ))}
              </View>
            ))} */}
        </View>
      );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    width: 108,
    textAlign: "center",
    top: 0,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    position: "absolute",
  },
  textTypo3: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  itemPosition: {
    height: 1,
    width: 338,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    marginLeft: -169,
    left: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    width: 59,
    marginTop: -11.5,
    height: 25,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    width: 60,
    borderRadius: Border.br_xl,
    height: 25,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.pretendardLight,
  },
  chevronIconPosition: {
    height: 24,
    marginTop: -10.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 21,
    left: 28,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.pretendardLight,
  },
  chevronLeftIcon: {
    left: 11,
    width: 41,
    height: 41,
    top: "50%",
    marginTop: -20,
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 55,
    right: "0%",
    left: "0%",
    height: 46,
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    top: 4,
    left: 25,
    width: 52,
    height: 52,
    position: "absolute",
  },
  text1: {
    top: 31,
    width: 46,
    height: 26,
    color: Color.colorBlack,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  green1: {
    color: "#03aa00",
  },
  text2: {
    color: Color.colorBlack,
  },
  green: {
    top: 8,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  groupParent: {
    top: 136,
    height: 61,
  },
  text3: {
    marginLeft: -182.5,
  },
  text4: {
    marginLeft: -54.5,
    width: 107,
    top: 0,
    textAlign: "center",
    left: "50%",
  },
  text5: {
    marginLeft: 73.5,
  },
  group: {
    top: 228,
    height: 48,
  },
  child: {
    top: 291,
  },
  item: {
    top: 420,
  },
  text6: {
    top: 311,
    left: 26,
  },
  frameItem: {
    backgroundColor: "#ffc075",
  },
  text7: {
    left: 13,
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    top: 2,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -169,
    marginTop: -11.5,
  },
  frameInner: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  text8: {
    left: 8,
  },
  rectangleGroup: {
    marginLeft: -77,
  },
  chevronRightIcon: {
    marginLeft: -103,
    width: 19,
    height: 24,
    marginTop: -10.5,
  },
  chevronRightIcon1: {
    marginLeft: 82,
    width: 19,
    height: 24,
    marginTop: -10.5,
  },
  chevronRightIcon2: {
    marginLeft: -11,
    width: 20,
    height: 24,
    marginTop: -10.5,
  },
  text9: {
    left: 18,
  },
  rectangleContainer: {
    marginLeft: 108,
  },
  frameView: {
    marginLeft: 16,
  },
  frameParent: {
    width: "86.01%",
    top: 357,
    right: "7.38%",
    left: "6.62%",
    height: 25,
    position: "absolute",
  },
  my: {
    top: 450,
    width: 92,
  },
  text11: {
    top: 515,
    width: 96,
  },
  text12: {
    top: 580,
    width: 144,
  },
  text13: {
    top: 645,
    width: 118,
  },
  text14: {
    top: 709,
    width: 183,
  },
  text15: {
    top: 775,
    width: 116,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame1;
