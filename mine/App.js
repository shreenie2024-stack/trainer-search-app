import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import HOME1 from'Home'

export default function App() {
  const [name, setName] = useState('');        // input state
  const [submittedName, setSubmittedName] = useState(''); // output state

  const handlePress = () => {
    setSubmittedName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      {/* Input field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* Button */}
      <Button title="Show Name" onPress={handlePress} />

      {/* Display name and image */}
      {submittedName ? (
        <View style={styles.resultContainer}>
          <Text style={styles.nameText}>Hello, {submittedName}!</Text>
          <Image
            source={require('./assets/lotus.jpg')}  // same image for all
            style={styles.image}
          />
        </View>
      ) : null}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f4064ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#cec8e9ff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#d2a3f8ff',
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#080101ff',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});

