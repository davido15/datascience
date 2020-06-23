import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Alert,
} from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";

import AppIntro from "./app/components/AppIntro";
import Home from "./app/screens/Home";
import Joinme from "./app/screens/Joinme";

export default function App() {
  const [intro, setIntro] = useState(true);

  if (intro) {
    return (
      <AppIntro
        onDone={() => {
          setIntro(false);
          console.log("foneeeeeeeeeeeee");
        }}
      />
    );
  }

  return (
    <NavigationContainer><AppNavigator></AppNavigator></NavigationContainer>

  );
}
