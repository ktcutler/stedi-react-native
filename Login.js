import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Username");
  const [number, onChangeNumber] = React.useState(null);
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Button
        style={styles.Button}
        value="Login">
        </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;