import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const image = { uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d155e83025466898117b8058e2258b3c" };

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('LoginForm');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titleText}>Do your tasks quickly and easy</Text>
        <Text style={styles.subtitleText}>Your tasks, your rules, our support.</Text>
        <View style={styles.buttonContainer}>
        <Link style={styles.button} href="screens/login/LoginForm">
            <Text style={styles.buttonText}>Login</Text>
        </Link>
        </View>
        <Text style={styles.createAccountText}>Create an account</Text>
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingVertical: 90,
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 64,
    marginBottom: 20,
  },
  subtitleText: {
    fontSize: 18,
    marginBottom: 80,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F6F6F6',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
  },
  createAccountText: {
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  separatorText: {
    fontSize: 19,
    marginHorizontal: 10,
    color: '#333333',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});

export default HomeScreen;
