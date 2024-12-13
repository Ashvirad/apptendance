import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const StudentDashboard = () => {
  const [locationStatus, setLocationStatus] = useState(null); // null, 'Verified', 'Rejected'
  const [faceStatus, setFaceStatus] = useState(null); // null, 'Verified', 'Rejected'

  const verifyLocation = () => {
    // Mock location verification logic
    const result = Math.random() > 0.5 ? 'Verified' : 'Rejected';
    setLocationStatus(result);
    Alert.alert('Location Verification', `Status: ${result}`);
  };

  const verifyFace = () => {
    // Mock face recognition logic
    const result = Math.random() > 0.5 ? 'Verified' : 'Rejected';
    setFaceStatus(result);
    Alert.alert('Face Recognition', `Status: ${result}`);
  };

  const reverify = (type) => {
    if (type === 'location') {
      setLocationStatus(null);
    } else if (type === 'face') {
      setFaceStatus(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Dashboard</Text>

      {/* Verify Location Button */}
      {locationStatus === null ? (
        <TouchableOpacity style={styles.button} onPress={verifyLocation}>
          <Text style={styles.buttonText}>Verify Location</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Location: {locationStatus}</Text>
          {locationStatus === 'Rejected' && (
            <TouchableOpacity
              style={styles.reverifyButton}
              onPress={() => reverify('location')}
            >
              <Text style={styles.reverifyText}>Reverify Location</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Confirm with Face Recognition Button */}
      {faceStatus === null ? (
        <TouchableOpacity style={styles.button} onPress={verifyFace}>
          <Text style={styles.buttonText}>Confirm with Face Recognition</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Face Recognition: {faceStatus}</Text>
          {faceStatus === 'Rejected' && (
            <TouchableOpacity
              style={styles.reverifyButton}
              onPress={() => reverify('face')}
            >
              <Text style={styles.reverifyText}>Reverify Face</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  reverifyButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  reverifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentDashboard;
