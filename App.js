import React from "react";
import "./styles.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { time: "11:00:01", tx: 0, rx: -40},
  { time: "11:00:02", tx: 40, rx: -120},
  { time: "11:00:03", tx: 0, rx: -70},
  { time: "11:00:04", tx: 39, rx: -120},
  { time: "11:00:05", tx: 38, rx: -120},
];

export default function App() {
  return (
    <LineChart width={600} height={300} data={data}>
      <Tooltip />
      <Line yAxisId="txv" type="monotone" dataKey="tx" stroke="#FF1111" />
      <Line yAxisId="rxv" type="monotone" dataKey="rx" stroke="#11FF11" />
      <CartesianGrid stroke="#ccc" storokeDasharray="5 5"/>
      <XAxis dataKey="time" tick={{fontSize:10}}/>
      <YAxis yAxisId="txv" domain={[0,'dataMax+5']} unit="dBm"
        tick={{fontSize: 10}}/>
      <YAxis yAxisId="rxv" orientation="right" domain={[-100,'dataMax']} unit="dBm"
        tick={{fontSize: 10}}/>
      <Tooltip/>
      <Legend />
    </LineChart>
  );
}
