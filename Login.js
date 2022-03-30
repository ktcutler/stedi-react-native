import React ,{useState}from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
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
            <Button title="Verify OTP" onPress={()=>{verifyOTP(oneTimePassword,phoneNumber,props)
            }
              }></Button>
        </View>
    );
}
const sendOTP = async (phoneNumber) => {
  await fetch('https://dev.stedi.me/twofactorlogin/'+ phoneNumber, {
  method: 'POST',
  headers: {
    Accept: 'application/text',
    'Content-Type': 'application/text'
  },
});
}
//token 9f19ef66-ff87-4aba-ba2b-bbb787e53a95
const verifyOTP = async (oneTimePassword,phoneNumber,props) => {
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'POST',
    headers: {
      Accept: 'application/text',
      'Content-Type': 'application/text',
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
      oneTimePassword: oneTimePassword,
    })
  },
  );
  const token = await tokenResponse.text();
  console.log(token);
  const emailResponse = await fetch('https://dev.stedi.me/validate/'+ token, {
    method: 'GET',
    headers: {
      Accept: 'application/text',
      'Content-Type': 'application/text',
    },
  });
  const email = await emailResponse.text();
props.setUserEmail(email);
props.setUserLoggedIn(true);
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