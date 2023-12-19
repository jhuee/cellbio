const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';

import Screen1 from "./screens/Screen1";
import Frame3 from "./screens/Frame3";
import Frame from "./screens/Frame";
import Component from "./components/Component";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Frame9 from "./screens/Frame9";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/Frame11";
import Frame12 from "./screens/Frame12";
import Screen2 from "./screens/Screen2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  return (
    <>
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
          </Stack.Navigator>
        ) : (
          <Screen2 />
        )}
      </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};
export default App;
