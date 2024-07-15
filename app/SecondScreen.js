import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SecondScreen = ({ route }) => {
  const { animationValue } = route.params;

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // "OR" yazısının yukarı kayma mesafesi
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { transform: [{ translateY }] }]}>OR</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SecondScreen;