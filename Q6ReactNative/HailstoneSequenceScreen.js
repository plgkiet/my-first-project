import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

const HailstoneSequenceScreen = () => {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateSequence = () => {
    let n = parseInt(number);
    if (n <= 0 || isNaN(n)) return;

    const result = [];
    while (n !== 1) {
      result.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    result.push(1);

    setSequence(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a positive number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Generate Sequence" onPress={generateSequence} />
      <ScrollView style={styles.scroll}>
        {sequence.map((num, index) => (
          <Text key={index} style={styles.item}>
            {num}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default HailstoneSequenceScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
  },
  scroll: {marginTop: 20},
  item: {fontSize: 18, marginVertical: 2},
});
