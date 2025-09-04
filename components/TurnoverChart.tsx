"use client";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";


export default function TurnoverChart({ data }: { data: { year: string; amount: number }[] }) {
return (
<div className="h-72 w-full">
<ResponsiveContainer>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="year" />
<YAxis tickFormatter={(v) => `₹${(v/1_00_000).toFixed(0)}L`} />
<Tooltip formatter={(value: number | string) => [`₹${Number(value).toLocaleString("en-IN")}`, "Turnover"]} />
<Bar dataKey="amount" radius={[6,6,0,0]} />
</BarChart>
</ResponsiveContainer>
</div>
);
}