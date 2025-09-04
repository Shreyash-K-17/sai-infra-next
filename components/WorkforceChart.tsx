"use client";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";


const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6", "#64748b"]; // Tailwind-ish hues


export default function WorkforceChart({ data }: { data: { role: string; count: number }[] }) {
return (
<div className="h-72 w-full">
<ResponsiveContainer>
<PieChart>
<Pie data={data} dataKey="count" nameKey="role" outerRadius={100} label>
{data.map((_, i) => (
<Cell key={i} fill={COLORS[i % COLORS.length]} />
))}
</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
</div>
);
}