import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const FindMinimumScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [min, setMin] = useState(null);

  const findMinimum = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const c = parseFloat(num3);
    setMin(Math.min(a, b, c));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Number 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Number 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <TextInput
        style={styles.input}
        placeholder="Number 3"
        keyboardType="numeric"
        value={num3}
        onChangeText={setNum3}
      />
      <Button title="Find Minimum" onPress={findMinimum} />
      {min !== null && <Text style={styles.result}>Minimum: {min}</Text>}
    </View>
  );
};

export default FindMinimumScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
  },
  result: {marginTop: 20, fontSize: 20},
});
