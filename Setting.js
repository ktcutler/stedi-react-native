import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Setting() {
    return(
      <View>
      <Button
      title="Log Out"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
      </View>
    )
  }

export default Setting;