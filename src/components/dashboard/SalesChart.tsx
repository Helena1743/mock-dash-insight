import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

// Real data from SO_PO.xls - Sales orders by month (Jan-Aug 2025)
const data = [
  { month: "Jan", actual: 120, forecast: null },
  { month: "Feb", actual: 0, forecast: null },
  { month: "Mar", actual: 0, forecast: null },
  { month: "Apr", actual: 85, forecast: null },
  { month: "May", actual: 0, forecast: null },
  { month: "Jun", actual: 0, forecast: null },
  { month: "Jul", actual: 13, forecast: null },
  { month: "Aug", actual: 22, forecast: null },
  { month: "Sep", actual: null, forecast: 95 },
  { month: "Oct", actual: null, forecast: 100 },
  { month: "Nov", actual: null, forecast: 105 },
  { month: "Dec", actual: null, forecast: 110 },
];

const SalesChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Orders (K)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#colorActual)"
            name="Actual Sales"
          />
          <Area
            type="monotone"
            dataKey="forecast"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorForecast)"
            name="Forecast"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
