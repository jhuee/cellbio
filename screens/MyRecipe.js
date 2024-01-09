import {useState, useEffect}  from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { ScrollView } from "native-base";
import {db, auth} from '../firebaseConfig'
const Frame1 = () => {
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
      
      const [recipes, setRecipes] = useState([]); // 레시피 데이터를 저장할 state

      useEffect(() => {
        getRecipe().then((data) => setRecipes(data)); // 레시피 데이터 가져오기
      }, []);
    
      const groupedRecipes = recipes.reduce((grouped, recipe) => {
        (grouped[recipe.skinType] = grouped[recipe.skinType] || []).push(recipe);
        return grouped;
      }, {});
    
      return (
        <View style={styles.view}>
          <ScrollView>
            {Object.keys(groupedRecipes).map((skinType) => (
              <View key={skinType}>
                <Text>{skinType}</Text>
                {groupedRecipes[skinType].map((recipe) => (
                  <View key={recipe.id}>
                    <Text>{recipe.base}</Text>
                    {recipe.concerns && recipe.concerns.map((concern, index) => (
  <Text key={index}>{concern}</Text>
))}
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
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
    lineHeight: 21,
    fontSize: FontSize.size_smi,
    top: 2,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.pretendardLight,
    position: "absolute",
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
    marginLeft: -57.5,
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.pretendardLight,
    left: "50%",
    top: "50%",
    marginTop: -20,
    position: "absolute",
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
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame1;
