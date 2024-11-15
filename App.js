import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import User from './components/User';
import MainOne from './components/MainOne';
import MainSec from './components/MainSec';

export default function App() {
  return (
  
    <ScrollView>
      <View>
      <User />
      <MainOne />
      <MainSec />
    </View>
    </ScrollView>

  );
}