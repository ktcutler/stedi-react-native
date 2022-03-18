import React ,{useState}from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';
export default function Login(props){
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState("")
    return(
        <View>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <TextInput
            style={styles.login}
            placeholder='Phone Number'
            onChangeText={setPhoneNumber}
            value = {phoneNumber}
            keyboardType="numeric"/>
            <Text> </Text>
            <TextInput
            style={styles.login}
            placeholder='One Time Password'
            onChangeText={setOneTimePassword}
            value={oneTimePassword}
            keyboardType="numeric"
            />
            <Text> </Text>
            <Text> </Text>
            <Button title="Get OTP" onPress={()=>sendOTP(phoneNumber)}></Button>
            <Text> </Text>
            <Text> </Text>
            <Button title="Verify OTP" onPress={()=>
              props.setUserLoggedIn()}></Button>
        </View>
    );
}
const sendOTP = (phoneNumber) => {
  fetch('https://dev.stedi.me/twofactorlogin/'+ phoneNumber, {
  method: 'POST',
  headers: {
    Accept: 'application/text',
    'Content-Type': 'application/text'
  },
});
}
const styles = StyleSheet.create({
  login: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: 'green',
      height: '12%',
      alignItems: 'flex-end',
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
})