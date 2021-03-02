import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <View>
          <Text>Welcome to Financial...</Text>
          <Button raised accent text="Button to nowhere lol" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
