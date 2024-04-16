import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors';

export default function ButtonSection({price, enroll}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> enroll()} style={styles.button}>
        <Text style={styles.buttonText}>Enroll for Free</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Membership}>
              <Text style={styles.MembershipText}>Membership KES 200/Mon</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "outfit",
  },
  Membership: {
    backgroundColor: Colors.tertiary,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 4,
  },
  MembershipText: {
    color: Colors.white,
  },
});