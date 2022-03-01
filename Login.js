import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function Login(){
  return(
    <View>
      <Text>This is the Login Screen</Text>
      <Button title="Log In" onPress={setUserLoggedIn(true)}></Button>
    </View>
  
  );
  
  }  

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