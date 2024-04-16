import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/HomeScreen/Header'
import Colors from '../utils/Colors';
import Sizes from '../utils/Sizes';
import CourseList from '../components/HomeScreen/CourseList';

const HomeScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: Sizes.screen.height / 3,
        }}
      >
        <Header />
      </View>
      <View style={{ paddingLeft: 20, marginTop: -100 }}>
        <CourseList level={"Beginner"} />
      </View>
      <View style={{ paddingLeft: 20, marginTop:20 }}>
        <CourseList level={"Intermidiate"} />
      </View>
    </View>
  );
}

export default HomeScreen