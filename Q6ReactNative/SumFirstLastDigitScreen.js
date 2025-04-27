import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SumFirstLastDigitScreen = () => {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    if (number.length > 0) {
      const first = parseInt(number[0]);
      const last = parseInt(number[number.length - 1]);
      setSum(first + last);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Calculate Sum" onPress={calculateSum} />
      {sum !== null && <Text style={styles.result}>Sum: {sum}</Text>}
    </View>
  );
};

export default SumFirstLastDigitScreen;

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
