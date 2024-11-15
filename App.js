import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import User from './components/User';
import MainOne from './components/MainOne';
import MainSec from './components/MainSec';
import Footer from './components/Footer';

export default function App() {
  return (
  
    <View>
        <ScrollView>
      <User />
      <MainOne />
      <MainSec />
    </ScrollView>
    <Footer />
    </View>

  );
}