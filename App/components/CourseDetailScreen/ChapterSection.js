import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ChapterItem from './ChapterItem';
import Colors from '../../utils/Colors';

export default function ChapterSection({ chapterList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapters</Text>
      {chapterList?.map((chapter, index) => (
        <ChapterItem content={chapter} index={index + 1} key={chapter?.id} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    width: '100%',
    backgroundColor: Colors.white,
    marginTop: 10,
        borderRadius: 16,
    },
});