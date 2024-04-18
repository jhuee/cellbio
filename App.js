const Stack = createNativeStackNavigator();
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import * as Font from 'expo-font';
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
import Frame8 from "./screens/Formulation";
import Frame9 from "./screens/Home";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/CompleteSignUp";
import Frame12 from "./screens/SignUp";
import Screen2 from "./screens/Splash";
import { Provider } from 'react-redux';
import store from './src/store';
import Confirm from "./screens/Confirm";
import Result from './screens/ResultFrame';
import Recipe from './screens/MyRecipe';
import Payment from './screens/Payments'
import AdminPage from './screens/AdminPage'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { LogBox } from 'react-native';
import Cart from './screens/Cart'
import Order from './screens/OrderHistroy'
import Detail from './screens/DetailScreen'
LogBox.ignoreLogs(['Warning: ...']);  // Warning: 이후에 경고 메시지의 일부를 입력하면 됩니다.
LogBox.ignoreLogs([
  'If you do not provide children, you must specify an aria-label for accessibility',
  'We can not support a function callback.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  'Failed prop type: Invalid prop `readOnly` of type `string` supplied to `ForwardRef(TextInput)`, expected `boolean`.'
]);
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);


  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        'Pretendard-Light': require('./assets/fonts/Pretendard-Light.otf')
      });
      setHideSplashScreen(true);
    };

    loadFontsAsync();
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
              name="AdminPage"
              component={AdminPage}
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
              name="Detail"
              component={Detail}
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
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Order"
              component={Order}
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
