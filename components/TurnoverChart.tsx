"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export default function TurnoverChart({
  data,
}: {
  data: { year: string; amount: number }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-72 w-full"
    >
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(v) => `₹${(v / 1_00_000).toFixed(0)}L`}
          />
          <Tooltip
            formatter={(value: number | string) => [
              `₹${Number(value).toLocaleString("en-IN")}`,
              "Turnover",
            ]}
          />
          <Bar
            dataKey="amount"
            radius={[6, 6, 0, 0]}
            fill="#000"
            className="hover:fill-neutral-600 transition-all duration-300"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
