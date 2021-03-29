import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import { Avatar, Card, DataTable, Paragraph } from "react-native-paper";

import FettKontanterView from "../components/FettKontanterView";

function createData(name, amount, percentage) {
    return { name, amount, percentage };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
];

//TODO Make theme or remake component to support glassmorphism (text is currently black)
export default function FlowsScreen(props) {
    return (
        <FettKontanterView styles={props.styles}>
            {/* <Button raised accent text="Edit" /> */}

            <Card
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                }}
            >
                <Card.Title title="Inflow 💰" subtitle="All money coming in." />
                <Card.Content>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>Job Salary 💼</DataTable.Cell>
                            <DataTable.Cell numeric>£2,500.00</DataTable.Cell>
                            <DataTable.Cell numeric>83.3%</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Bonus 🏆</DataTable.Cell>
                            <DataTable.Cell numeric>£500.00</DataTable.Cell>
                            <DataTable.Cell numeric>16.7%</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Card.Content>
            </Card>

            {/* TODO Remove below*/}
            <Text> </Text>
            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}>
                <Card.Title
                    title="Outflow 💸"
                    subtitle="Essential money going out."
                />
                <Card.Content>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>Rent 🏡</DataTable.Cell>
                            <DataTable.Cell numeric>£1,000.00</DataTable.Cell>
                            <DataTable.Cell numeric>58.8%</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Food 🍕</DataTable.Cell>
                            <DataTable.Cell numeric>£500.00</DataTable.Cell>
                            <DataTable.Cell numeric>29.4%</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Utilities⚡</DataTable.Cell>
                            <DataTable.Cell numeric>£200.00</DataTable.Cell>
                            <DataTable.Cell numeric>11.8%</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* TODO Remove below*/}
                    <Text> </Text>
                    <Paragraph>❌ Estimated other costs £1300 ❌</Paragraph>
                </Card.Content>
            </Card>
        </FettKontanterView>
    );
}
