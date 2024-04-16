import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors';
import { Ionicons } from "@expo/vector-icons";


export default function CourseCard({ course }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: course?.banner?.url }} style={styles.image} />
      <View style={styles.Content}>
        <Text style={styles.contentHeader}>{course?.name}</Text>
        <View style={styles.description}>
          <View style={styles.chapters}>
            <Ionicons name="book" size={20} color={Colors.grey} />
            <Text style={styles.descText}>
              {course?.chapter?.length} Chapters
            </Text>
          </View>
          <View style={styles.chapters}>
            <Ionicons name="time" size={20} color={Colors.grey} />
            <Text style={styles.descText}>{course?.hours} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 120,
    borderRadius: 16,
  },
  container: {
    padding: 10,
    backgroundColor: Colors.white,
    marginRight: 16,
    borderRadius: 16,
    maxWidth: 240,
  },
  contentHeader: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
    color: Colors.black,
  },
  Content: {
    padding: 8,
  },
  chapters: {
    flexDirection: "row",
    gap: 4,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descText: {
    color: Colors.grey
  }
});