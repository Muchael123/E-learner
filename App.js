import { StyleSheet,  View, Text } from 'react-native';
import { useFonts } from "expo-font";
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from './App/navigation/TabNavigation';

export default function App() {
    const [fontsLoaded] = useFonts({
      "outfit": require("./assets/fonts/Outfit-Regular.ttf"),
      "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
      "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
      "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
      "outfit-thin": require("./assets/fonts/Outfit-Thin.ttf"),
      "outfit-extralight": require("./assets/fonts/Outfit-ExtraLight.ttf"),

    });

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_ZHluYW1pYy1maW5jaC05Mi5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
