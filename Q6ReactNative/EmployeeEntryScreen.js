import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';

const EmployeeEntryScreen = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleUpdate = () => {
    Alert.alert('Success', 'Employee information updated successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Occupation:</Text>
      <TextInput
        style={styles.input}
        value={occupation}
        onChangeText={setOccupation}
      />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default EmployeeEntryScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  label: {marginVertical: 5},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
  },
});
