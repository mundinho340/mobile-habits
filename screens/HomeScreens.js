import React from 'react'
import {SafeAreaView ,StyleSheet,View, Text } from 'react-native'
import tw from ""

const HomeScreens = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>HomeScreens</Text>
    </SafeAreaView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});