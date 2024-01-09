const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import Screen1 from "./screens/SignIn";
import Frame3 from "./screens/SelectCase";
import Frame from "./screens/RemoveIngre";
import Component from "./components/Component";
import Frame1 from "./screens/MyPage";
import Frame2 from "./screens/Frame2";
import Frame4 from "./screens/Volume";
import Frame5 from "./screens/Concentration"; 
import Frame6 from "./screens/Concern";
import Frame7 from "./screens/Base";
import Frame8 from "./screens/Fomulation";
import Frame9 from "./screens/Home";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/CompleteSignUp";
import Frame12 from "./screens/SignUp";
import Screen2 from "./screens/Splash";
import { Provider } from 'react-redux';
import store from './src/store';
import Confirm from "./screens/Confirm";
import Result from './screens/ResultFrame'
import Recipe from './screens/MyRecipe'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  let [fontsLoaded] = useFonts({
    'Pretendard-Light': require('./assets/fonts/Pretendard-Light.otf'),  // 경로와 파일명은 본인의 환경에 맞게 변경해주세요.
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  return (
    <>
    <Provider store={store}>
       <NativeBaseProvider>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Screen1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame9"
              component={Frame9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10"
              component={Frame10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame11"
              component={Frame11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame12"
              component={Frame12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirm"
              component={Confirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recipe"
              component={Recipe}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Screen2 />
        )}
      </NavigationContainer>
      </NativeBaseProvider>
      </Provider>
    </>
  );
};
export default App;
