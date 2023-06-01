import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PhoneNumber from "./Screens/Phone";

const App = () => {
 type StackParamList = {
   PhoneNumber: undefined;
 };

 const Stack = createStackNavigator<StackParamList>();

 return (
   <NavigationContainer>
     <Stack.Navigator
       initialRouteName="PhoneNumber"
       screenOptions={{
         headerShown: false,
       }}
     >
       <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
     </Stack.Navigator>
   </NavigationContainer>
 );
};

export default App;
