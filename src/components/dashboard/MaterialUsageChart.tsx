import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Real data from SFI_TPSB.xlsx - Paper usage by month (in thousands of sheets)
const data = [
  { month: "Jan", paper: 0, carton: 0, ink: 0 },
  { month: "Feb", paper: 0, carton: 0, ink: 0 },
  { month: "Mar", paper: 0, carton: 0, ink: 0 },
  { month: "Apr", paper: 0, carton: 0, ink: 0 },
  { month: "May", paper: 285.4, carton: 125.6, ink: 45.2 },
  { month: "Jun", paper: 298.7, carton: 132.8, ink: 48.5 },
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
