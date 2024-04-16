import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors';
import { Ionicons } from "@expo/vector-icons";

export default function ChapterItem({ content, index }) {
const concat =
  content.title.length > 30
    ? content.title.substring(0, 20) + " ..."
    : content.title;
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
        <Text style={styles.index}>{index}</Text>
        <Text style={styles.concat}>{concat}</Text>
      </View>
      <Ionicons name="play-circle" size={28} color={Colors.terciary_light} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.secondary,
    marginTop: 10,
    borderRadius: 14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
        alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    },
    index: {
        fontWeight: 'bold',
        color: Colors.grey,
        fontSize: 28
    },
    concat: {
        fontWeight: 'bold',
        fontFamily: 'outfit',
        color: Colors.terciary_light,
        fontSize: 16
    }
});