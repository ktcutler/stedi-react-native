import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';
export default function Login(props){
    return(
        <View>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <TextInput placeholder='Phone Number'></TextInput>
            <Text> </Text>
            <TextInput placeholder='Password'></TextInput>
            <Text> </Text>
            <Text> </Text>
            <Button title="Get OTP" onPress={()=>props.setUserLoggedIn(true)}></Button>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>

        </View>
    );
}

fetch('https://dev.stedi.me/twofactorlogin/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue'
  })
});

const getTwoFactorFromApi = () => {
  return fetch('https://dev.stedi.me/twofactorlogin/')
    .then((response) => response.text())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};