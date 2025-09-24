import { useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from '../firebaseConfig'; // Import the Firestore instance

export default function Login() {
  const router = useRouter();
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!rollNumber || !password) {
      Alert.alert('Error', 'Please enter both roll number and password.');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', rollNumber);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        // WARNING: Storing and comparing plaintext passwords is not secure.
        // This is for demonstration based on your request.
        // Use Firebase Authentication for a secure solution.
        if (userData.password === password) {
          Alert.alert('Success', 'Login successful!');
          // Navigate to the main app
          router.replace('/(tabs)');
        } else {
          Alert.alert('Error', 'Invalid password.');
        }
      } else {
        Alert.alert('Error', 'User not found.');
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      Alert.alert('Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        autoCapitalize="none"
        value={rollNumber}
        onChangeText={setRollNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});