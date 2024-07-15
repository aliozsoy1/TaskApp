import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';

const FirstScreen = ({ navigation }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Second', { animationValue });
    });
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // "OR" yazısının yukarı kayma mesafesi
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { transform: [{ translateY }] }]}>OR</Animated.Text>
      <Button title="Login" onPress={startAnimation} />
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

export default FirstScreen;