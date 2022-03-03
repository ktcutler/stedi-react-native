import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
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

function savetoken(token){
    // whatever passes as token should save into local storage
        if (window.localStorage){
         localStorage.setItem("token", token);
        }
    }

    function checkexpiredtoken(){
        // read token from local storage - check with ajax call
            if(window.localStorage){
            usertoken = localStorage.getItem("token", token);
            $.ajax({
               type: 'GET',
                url: '/checkToken',
                data: '{"usertoken":"' + usertoken + '"}',
                success: function(data){savetoken(data)},
                contentType: "application/text",
                dataType: 'text' })
            }
        }
        
        function userlogin(){
            setuserpassword();
            setusername();
            $.ajax({
                type: 'POST',
                url: '/login',
                data: ' {"userName":"'+ phoneNumber +'", "password":"'+ password +'"}', // or JSON.stringify ({name: 'jonas'}),
                success: function(data) {
                    savetoken(data);
                    localStorage.removeItem("customer");
                    window.location.href = "/timer.html";
                 },
                contentType: "application/text",
                dataType: 'text'
            });
        
        }
        
        function setusername(){
            userName = $("#un").val();
        }
        
        function setuserpassword(){
            password = $("#pw").val();
        }
        
        var enterFunction = (event) =>{
            if (event.keyCode === 13){
                event.preventDefault();
                $("#loginbtn").click();
            }
        }
        
        var passwordField = document.getElementById("pw");
        
        passwordField.addEventListener("keyup", enterFunction);