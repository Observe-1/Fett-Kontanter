import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

export default function PortfolioScreen() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Portfolio!</Text>
        <Button raised accent text="Edit" />
        <Card>
          <Card.Title title="Inflow" subtitle="💰 All money coming in. 💰" />
          <Card.Content>
            <Paragraph>       Main job:        £2,000.00 pcm </Paragraph>
            <Paragraph>       Bonus:           £500.00   pcm</Paragraph>
          </Card.Content>          
        </Card>
        {/* TODO Remove below*/}
        <Text> </Text>
        <Card>
          <Card.Title title="Outflow" subtitle="💸 Essential money going out. 💸" />
          <Card.Content>
            <Paragraph>       Rent:         £1,000.00 pcm</Paragraph>
            <Paragraph>       Food:        £500.00   pcm</Paragraph>
            <Paragraph>       Utilities:    £200.00   pcm</Paragraph>
            {/* TODO Remove below*/}
            <Paragraph> </Paragraph>
            <Paragraph>       Estimated other outflows (based on accounts):    £200.00   pcm</Paragraph>
          </Card.Content>          
        </Card>
      </View>
    );
  }