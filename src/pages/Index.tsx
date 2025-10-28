import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Package, Truck, AlertCircle } from "lucide-react";
import SalesChart from "@/components/dashboard/SalesChart";
import MaterialUsageChart from "@/components/dashboard/MaterialUsageChart";
import DeliveryChart from "@/components/dashboard/DeliveryChart";
import MetricCard from "@/components/dashboard/MetricCard";
import InsightsPanel from "@/components/dashboard/InsightsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Team Printers Dashboard</h1>
              <p className="text-sm text-muted-foreground">Forecasting & Analytics Platform</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Last updated: Oct 2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Orders"
            value="1,284"
            change="+12.5%"
            trend="up"
            icon={BarChart3}
          />
          <MetricCard
            title="Material Usage"
            value="45.2T"
            change="+8.3%"
            trend="up"
            icon={Package}
          />
          <MetricCard
            title="Deliveries"
            value="892"
            change="-3.2%"
            trend="down"
            icon={Truck}
          />
          <MetricCard
            title="Forecast Accuracy"
            value="91.2%"
            change="+2.1%"
            trend="up"
            icon={TrendingUp}
          />
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-4 lg:inline-grid">
            <TabsTrigger value="sales">Sales Trends</TabsTrigger>
            <TabsTrigger value="materials">Material Usage</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Load</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Order Trends & Forecast</CardTitle>
                <CardDescription>
                  Historical sales data with 3-month forecast projection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SalesChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Material Usage Forecast</CardTitle>
                <CardDescription>
                  Raw material consumption and projection by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MaterialUsageChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Production & Delivery Load</CardTitle>
                <CardDescription>
                  Shipment volumes and logistics capacity planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DeliveryChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <InsightsPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
