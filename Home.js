import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import { useLinkProps } from '@react-navigation/native';

const Home = () => {
  return (
    <View>
      <Bar useremail={props.useremail}/>
      <Icons />
    </View>
  );
};

export default Home;
