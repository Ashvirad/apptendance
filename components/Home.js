import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/home1.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Apptendance</Text>
      <Text style={styles.subtitle}>Your one-stop solution for attendance management</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StudentSignIn')}
      >
        <Text style={styles.buttonText}>Student Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.teacherButton]}
        onPress={() => navigation.navigate('TeacherSignIn')}
      >
        <Text style={styles.buttonText}>Teacher Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  teacherButton: {
    backgroundColor: '#8e44ad',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
