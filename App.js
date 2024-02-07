import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {

  const [thingToSay, setThingToSay] = useState('');
  const speak = () => {

    Speech.speak(thingToSay);
    setThingToSay(''); // clear the input field after speaking
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Write text here'
        onChangeText={text => setThingToSay(text)}
        value={thingToSay} />

      <Button title="Press to hear pronunciation" onPress={speak} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});
