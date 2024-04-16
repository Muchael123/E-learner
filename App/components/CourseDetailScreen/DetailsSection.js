import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Sizes from '../../utils/Sizes';
import OptionItem from './OptionItem';
import CourseDescription from './CourseDescription';
import ButtonSection from './ButtonSection';
import { enrollCourse } from '../../Services';
import { useUser } from '@clerk/clerk-expo';

export default function DetailsSection({ course }) {
  const { user } = useUser();
  console.log(user.primaryEmailAddress.emailAddress, course.id);

  const UserenrollCourse = async () => {
    console.log("Enrolling Course", course.id, user.primaryEmailAddress.emailAddress);
    enrollCourse(course.id, user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log(res, 'from res///');
      })
      .catch((err) => {
        console.log('from err',err);
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: course?.banner?.url }} />
      <View style={{padding:10, width: '100%'}}>
        <Text style={styles.courseName}>{course?.name}</Text>
        <View style={styles.Options}>
          <OptionItem
            name={"book-outline"}
            value={course?.chapter?.length + " Chapters"}
          />
          <OptionItem name={"time"} value={course?.hours} />
        </View>
        <View style={styles.Options}>
          <OptionItem
            name={"person-circle-outline"}
            value={course?.author}
          />
          <OptionItem name={"cellular-outline"} value={course?.level} />
        </View>
          </View>
          <CourseDescription desc={course?.description?.markdown} />
          <ButtonSection price={course?.price} enroll = {UserenrollCourse} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    width: '100%',
        alignItems: "center",
    padding:12
  },
  image: {
      height: 190,
      width: '100%',
    borderRadius: 16,
    objectFit: "cover",
  },
  courseName: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "outfit-medium",
    width: '100%'
    },
    Options: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        marginTop: 12
    }
});