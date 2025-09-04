"use client";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6", "#64748b"];

export default function WorkforceChart({ data }: { data: { role: string; count: number }[] }) {
  return (
    <div className="h-80 w-full flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="role"
            outerRadius={100}
            // 👇 declare props loosely so TS stops complaining
            label={(props: { percent?: number }) =>
              props.percent !== undefined ? `${(props.percent * 100).toFixed(1)}%` : ""
            }
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, _: any, props: any) => {
              const total = data.reduce((sum, d) => sum + d.count, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return [`${value} (${percentage}%)`, props?.payload?.role];
            }}
          />
          <Legend
            formatter={(value: string, _: any, index: number) => (
              <span style={{ color: COLORS[index % COLORS.length], fontWeight: 600 }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
