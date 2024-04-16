import { View, Pressable, StyleSheet, Platform, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailsSection from '../components/CourseDetailScreen/DetailsSection';
import Colors from '../utils/Colors';
import ChapterSection from '../components/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
    const navigation = useNavigation();
    const params = useRoute().params;
  return (
    params.course && (
      <View style={styles.container}>
        <Pressable style={styles.Icon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={48} color={Colors.white} />
        </Pressable>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DetailsSection course={params.course} />
          <ChapterSection chapterList={params.course.chapter} />
        </ScrollView>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
    backgroundColor: Colors.primary,
    paddingLeft: 12,
    paddingRight: 12,
        paddingBottom:8,
    paddingTop: Platform.OS === 'android' ? 88 : 40,
  },
    Icon: {
        marginTop: 12,
        marginBottom: 12,
        position: 'absolute',
        top: 24
  }
});