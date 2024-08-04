import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login Form</Text>
      <Link style={styles.button} href="screens/login/LoginHome">
            <Text style={styles.buttonText}>Geri Dön</Text>
        </Link>
      {/* Giriş formunuzu burada oluşturabilirsiniz */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LoginForm;
