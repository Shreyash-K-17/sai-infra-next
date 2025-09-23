"use client";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6", "#64748b"];

export default function WorkforceChart({ data }: { data: { role: string; count: number }[] }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 px-2 py-3">
      {/* Legend section - This will appear first in the vertical stack. */}
      <div className="flex flex-col justify-center space-y-3 lg:space-y-4 w-full lg:w-auto">
        {data.map((d, i) => {
          const total = data.reduce((sum, d) => sum + d.count, 0);
          const percentage = ((d.count / total) * 100).toFixed(1);
          return (
            <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="font-semibold">{d.role} ({percentage}%)</span>
            </div>
          );
        })}
      </div>

      {/* Pie chart section - This will now appear below the legend on small screens. */}
      <div className="w-full lg:flex-1 h-64 sm:h-80 lg:h-96 mt-4 lg:mt-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="role"
              outerRadius={80}
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
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>




  );
}
