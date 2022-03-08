
import React from 'react';
import {styles, SafeAreaView, TextInput, Button} from 'react-native';

export default Login = (props) => {
const [phoneNumber, setPhoneNumber] = React.useState("something");
const [code, setCode] = React.useState(null);

    return (
        <SafeAreaView style={{width: "100%", height: "100%", justifyContent: "center"
        , alignItems: "center", alignSelf:"center", alignContent: "center"}}>
          <TextInput
            placeholder="Enter Phone Number"
            style={styles.input}
            // onChangeText={onChangeText}
            onChangeNumber={number => setPhoneNumber(number)}
            value={phoneNumber}
          />
          <NumberInput
            placeholder="Enter OTP"
            style={styles.input}
            // onChangeText={onChangeNumber}
            onChangeCode={(otp) => setCode(otp)}
            value={code}
            keyboardType="numeric"
          />

    <Button
        title="Log In"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        </SafeAreaView>
      );
    };
    const styles = StyleSheet.create({
      input: {
        width: "80%",
        height: 42,
        justifyContent:"center",
        marginTop: "5%",
        borderBottomWidth: 1
      },
    });

// function savetoken(token){
//     // whatever passes as token should save into local storage
//         if (window.localStorage){
//          localStorage.setItem("token", token);
//         }
//     }

//     function checkexpiredtoken(){
//         // read token from local storage - check with ajax call
//             if(window.localStorage){
//             usertoken = localStorage.getItem("token", token);
//             $.ajax({
//                type: 'GET',
//                 url: '/checkToken',
//                 data: '{"usertoken":"' + usertoken + '"}',
//                 success: function(data){savetoken(data)},
//                 contentType: "application/text",
//                 dataType: 'text' })
//             }
//         }
        
//         function userlogin(){
//             setuserpassword();
//             setusername();
//             $.ajax({
//                 type: 'POST',
//                 url: '/login',
//                 data: ' {"userName":"'+ phoneNumber +'", "password":"'+ password +'"}', // or JSON.stringify ({name: 'jonas'}),
//                 success: function(data) {
//                     savetoken(data);
//                     localStorage.removeItem("customer");
//                     window.location.href = "/timer.html";
//                  },
//                 contentType: "application/text",
//                 dataType: 'text'
//             });
        
//         }
        
//         function setusername(){
//             userName = $("#un").val();
//         }
        
//         function setuserpassword(){
//             password = $("#pw").val();
//         }
        
//         var enterFunction = (event) =>{
//             if (event.keyCode === 13){
//                 event.preventDefault();
//                 $("#loginbtn").click();
//             }
//         }
        
//         var passwordField = document.getElementById("pw");
        
//         passwordField.addEventListener("keyup", enterFunction);