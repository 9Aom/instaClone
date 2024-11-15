import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { BiSolidGrid } from 'react-icons/bi';

const MainSec = () => {
  return (
    <View style={{marginTop: '10%'}} >
        <TouchableOpacity>
        {/* <FontAwesome6 style={{borderBottomWidth: 1, width: '20%', }} name="border-all" size={50}  /> */}
        <BiSolidGrid />
        </TouchableOpacity>
    </View>
  )
}

export default MainSec