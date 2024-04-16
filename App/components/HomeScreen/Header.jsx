import { View, Text, Image, StyleSheet, Platform, TextInput, Pressable,  } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import Colors from '../../utils/Colors';
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
    const { isLoaded, IsSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View style={styles.container}>
        <View style={styles.headerc}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.image} source={{ uri: user?.imageUrl }} />
            <View>
              <Text style={styles.welcome}>Welcome, </Text>
              <Text style={styles.username}>{user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.coinView}>
            <Image
              source={require("../../../assets/images/coin.png")}
              style={styles.coin}
            />
            <Text
              style={{
                ...styles.username,
                textAlign: "center",
                paddingTop: 13,
              }}
            >
              1350
            </Text>
          </View>
        </View>
        <View style={styles.searchView}>
          <TextInput style={styles.search} placeholder="Search Courses" />
          <Pressable style={styles.searchBtn}>
            <Ionicons name="search" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 10 : 20,
    flexDirection: "col",
    padding: 24,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
    headerc: {
      
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
  username: {
    fontSize: 20,
    fontFamily: "outfit",
    color: Colors.white,
  },
  welcome: {
    color: Colors.white,
    fontFamily: "outfit",
  },
  coin: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
  coinView: {
    flexDirection: "row",
  },
  searchView: {
    backgroundColor: Colors.white,
    paddingLeft: 20,
      height: 50,
      marginLeft: 4,
    
    flexDirection: "row",
    dividerColor: Colors.tertiary,
    borderRadius: 10,
      marginTop: 20,
    marginRight: 4,
  },
  search: {
    flex: 1,
    fontFamily: "outfit",
  },
  searchBtn: {
    backgroundColor: Colors.secondary,
    textAlign: "center",
    padding: 11,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});