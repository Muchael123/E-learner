import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import Colors from '../../utils/Colors';

export default function OptionItem({ name, value }) {
    console.log(name, value)
  return (
    <View style={styles.box}>
      <Ionicons name={name} size={24} color={Colors.grey} />
      <Text style={styles.TxtDesc}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
    TxtDesc: {
    color: Colors.grey,
  }
});