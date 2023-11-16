import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CountDown from './src/components/CountDown';
import RoundButton from './src/components/RoundButton';

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CountDown isPaused={start} />
      <RoundButton title={!start ? 'Start' : 'Pause'} onPress={() => setStart(!start)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hours: {
    fontSize: 40,
    color: '#FFF'
  },
  viewHours: {
    padding: 50,
    borderRadius: 16,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
});
