import { View, Text, StyleSheet, FlatList, RefreshControl, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import CourseCard from './CourseCard';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({level}) {
    useEffect(() => {
        getCourses();
    }, [])
      const [refreshing, setRefreshing] = useState(true);
    const [CourseList, setCourseList] = useState([]);

    const navigation = useNavigation();

    const getCourses = () => {
        getCourseList(level).then((res) => {
            console.log('from res///', res)
            setCourseList(res?.courses)
                   
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setRefreshing(false)
        })
    }

    const Mycolor =
      level === "Beginner"
        ? "white"
        : "black"

  return (
    <View>
      <Text style={{ ...styles.Title, color: Mycolor }}>{level} Courses</Text>
      <FlatList
        data={CourseList}
        horizontal={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getCourses} />
        }
        bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", {
              course: item
          })}>
            <CourseCard course={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontfamily: 'outfit',
        marginBottom: 8,
    }
});