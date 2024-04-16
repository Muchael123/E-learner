import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Sizes from '../utils/Sizes';
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import React,{ useCallback } from 'react';

WebBrowser.maybeCompleteAuthSession();


const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const HandleSignIn = useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();

        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
 
  return (
    <View
      style={{ alignItems: "center", height: Dimensions.get("screen").height }}
    >
      <Image
        source={require("../../assets/images/auth2.png")}
        style={{
          width: 250,
          height: Dimensions.get("screen").height / 1.3,
          objectFit: "contain",
          marginBottom: "-40%",
        }}
      />
      <View
        style={{
          height: Sizes.screen.height / 2,
          backgroundColor: Colors.primary,
                  width: Sizes.screen.width,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
                      fontSize: 40,
            marginTop:50,
            color: Colors.white,
          }}
        >
          E-learner
        </Text>
        <Text
          style={{
            fontFamily: "outfit-light",
            fontSize: 20,
            marginTop: 20,
            textAlign: "center",
            color: "#A1D6E2",
          }}
        >
          Your learning journey starts here. Join us now and start the fun
        </Text>
              <TouchableOpacity
            onPress={HandleSignIn}
          style={{
            backgroundColor: Colors.white,
                      display: "flex",
                      width: '100%',
            justifyContent: "center",
                      flexDirection: "row",
                      padding: 12,
                      borderRadius: 99,
                      marginTop: 24,
            gap: 10,
          }}
        >
          <AntDesign name="google" size={20} color={Colors.primary} />
          <Text
            style={{
                          fontFamily: "outfit-medium",
                fontSize: 16,
            }}
          >
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen