import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", delivered: 42, scheduled: 45 },
  { week: "Week 2", delivered: 38, scheduled: 40 },
  { week: "Week 3", delivered: 51, scheduled: 48 },
  { week: "Week 4", delivered: 47, scheduled: 50 },
  { week: "Week 5", delivered: 55, scheduled: 52 },
  { week: "Week 6", delivered: 52, scheduled: 55 },
  { week: "Week 7", delivered: null, scheduled: 58 },
  { week: "Week 8", delivered: null, scheduled: 60 },
];

const DeliveryChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="week" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Shipments", angle: -90, position: "insideLeft" }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="delivered"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            name="Delivered"
          />
          <Line
            type="monotone"
            dataKey="scheduled"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--accent))", r: 4 }}
            name="Scheduled"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DeliveryChart;
