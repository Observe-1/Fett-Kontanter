import * as React from "react";
import { View } from "react-native";
import { Button } from "react-native-material-ui";
import { Text } from "react-native-svg";
import * as shape from "d3-shape";
import { Grid, AreaChart, PieChart, LineChart } from "react-native-svg-charts";

export default function LabelledPieChart(props) {
    return (
        <PieChart
            style={{ alignSelf: "center", width: 125, height: 125 }}
            valueAccessor={({ item }) => item.value}
            outerRadius={"70%"}
            innerRadius={10}
            data={props.pieData}
            spacing={0}
            animate={true}
        >
            {/* <Labels /> */}
        </PieChart>
    );
}

// export default function LabelledPieChart(props) {
//     return <Text style={props.styles.itemName}>A table goes here</Text>;
// }

// const Labels = ({ slices, height, width }) => {
//     return slices.map((slice, index) => {
//         const { labelCentroid, pieCentroid, data } = slice;
//         return (
//             <Text
//                 key={index}
//                 x={pieCentroid[0]}
//                 y={pieCentroid[1]}
//                 fill={"black"}
//                 textAnchor={"middle"}
//                 alignmentBaseline={"middle"}
//                 stroke={"black"}
//                 strokeWidth={0.2}
//             >
//                 {data.pounds}
//             </Text>
//         );
//     });
// };
// }

// Example
// const pieData = [
//     {
//         key: 1,
//         value: 50,
//         pounds: "£50k",
//         svg: { fill: "#FF6500" },
//         arc: { outerRadius: "130%", cornerRadius: 10 },
//     },
//     {
//         key: 2,
//         value: 50,
//         pounds: "£50k",
//         svg: { fill: "#d02860" },
//     },
//     {
//         key: 3,
//         value: 40,
//         pounds: "£40k",
//         svg: { fill: "#d02800" },
//     },
//     {
//         key: 4,
//         value: 95,
//         pounds: "£95k",
//         svg: { fill: "#d00060" },
//     },
//     {
//         key: 5,
//         value: 35,
//         pounds: "£35k",
//         svg: { fill: "#FF0000" },
//     },
// ];
