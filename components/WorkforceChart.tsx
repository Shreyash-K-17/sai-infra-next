"use client";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6", "#64748b"];

export default function WorkforceChart({ data }: { data: { role: string; count: number }[] }) {
  const total = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 px-2 py-3"
    >
      {/* ===== Legend Section ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="flex flex-col justify-center space-y-3 lg:space-y-4 w-full lg:w-auto"
      >
        {data.map((d, i) => {
          const percentage = ((d.count / total) * 100).toFixed(1);
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -15 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm sm:text-base"
            >
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="font-semibold text-gray-900">
                {d.role} ({percentage}%)
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ===== Pie Chart Section ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:flex-1 h-64 sm:h-80 lg:h-96 mt-4 lg:mt-0"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="role"
              outerRadius={90}
              label={(props: { percent?: number }) =>
                props.percent !== undefined
                  ? `${(props.percent * 100).toFixed(1)}%`
                  : ""
              }
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, _: any, props: any) => {
                const percentage = ((value / total) * 100).toFixed(1);
                return [`${value} (${percentage}%)`, props?.payload?.role];
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
