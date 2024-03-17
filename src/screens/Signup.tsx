import React, { useState, useContext } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import AppwriteContext from '../appwrite/AppwriteContext';

const Signup = ({ navigation }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      repeatPassword.length < 1
    ) {
      setError('All fields are required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
    } else if (password !== repeatPassword) {
      setError('Passwords do not match');
    } else {
      const user = {
        email,
        password,
        name,
      };
      appwrite.createAccount(user).then((response) => {
        if (response) {
          setIsLoggedIn(true);
          Snackbar.show({
            text: 'Signup success',
            duration: Snackbar.LENGTH_LONG,
          });
        }
      });
    }

    if (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView>
        <ImageBackground source={require('../asserts/logins.png')} resizeMode='cover' style={{ flex: 1, height: 612 }}>
          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={[styles.title, { marginLeft: 100, marginBottom: 16 }]}>Sign-up</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => {
                  setError('');
                  setName(text);
                }}
                placeholder='Name'
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                value={email}
                onChangeText={(text) => {
                  setError('');
                  setEmail(text);
                }}
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder='Enter Password'
                value={password}
                onChangeText={(text) => {
                  setError('');
                  setPassword(text);
                }}
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                secureTextEntry
                style={styles.input}
                value={repeatPassword}
                onChangeText={(text) => setRepeatPassword(text)}
                placeholder='Re-enter Password'
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.submit}><Text>Submit</Text></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.6,
    //  backgroundColor:'rgba(225, 225, 225, 0.6)',
    height: 42,
    width: 80,
    marginLeft: 100,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    marginTop: 112,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingTop: 2,
    height: 370,
    width: '100%',
    backgroundColor: 'rgba(225, 225, 225, 0.6)',
    borderRadius: 20,
  },
  input: {
    paddingLeft: 18,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: 'white', // Set background color for TextInput
    opacity: 0.7
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});
