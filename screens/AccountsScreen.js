import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

export default function AccountsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
        <Button raised accent text="Button to nowhere lol" />
      </View>
    );
  }