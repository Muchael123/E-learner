import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/Colors';

export default function CourseDescription({ desc }) {
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const concatDesc = (desc) => {
        if (desc.length > 100 && !descriptionExpand) {
            return desc.slice(0, 100) + '...';
        }
        return desc;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Course Description</Text>
          <Text style={styles.descContent}>{concatDesc(desc)} </Text>
          <Pressable onPress={() => setDescriptionExpand(!descriptionExpand)}>
              <Text style={styles.show}>Show {descriptionExpand ? 'Less' : 'More'}</Text>
            </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    },
    desc: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'outfit',
        marginTop: 12
    },
    descContent: {
        fontSize: 14,
        fontFamily: 'outfit-light',
        marginTop: 12
    },
    show: {
        color: Colors.secondary,
        width: '100%',
        textAlign: 'right'
    }

});