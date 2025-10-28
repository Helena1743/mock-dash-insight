import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jul", paper: 12.5, carton: 8.2, ink: 3.1 },
  { month: "Aug", paper: 13.2, carton: 8.8, ink: 3.3 },
  { month: "Sep", paper: 12.8, carton: 8.5, ink: 3.2 },
  { month: "Oct", paper: 14.1, carton: 9.2, ink: 3.5 },
  { month: "Nov", paper: 14.8, carton: 9.8, ink: 3.7 },
  { month: "Dec", paper: 15.2, carton: 10.1, ink: 3.8 },
];

const MaterialUsageChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Usage (Tons)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Bar dataKey="paper" fill="hsl(var(--chart-1))" name="Paper" radius={[4, 4, 0, 0]} />
          <Bar dataKey="carton" fill="hsl(var(--chart-2))" name="Carton" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ink" fill="hsl(var(--chart-3))" name="Ink" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MaterialUsageChart;
