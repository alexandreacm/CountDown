import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import CountDown from './src/components/CountDown';
import RoundButton from './src/components/RoundButton';

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CountDown isPaused={start} />
      <RoundButton title={!start ? 'Start' : 'Pause'} onPress={() => setStart(!start)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8E44AD'
  }
});
