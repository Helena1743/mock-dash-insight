import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TrendingUp, AlertCircle, CheckCircle2, Calendar } from "lucide-react";

const InsightsPanel = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Growth Indicators
          </CardTitle>
          <CardDescription>Positive trends identified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium">Sales Growth</p>
                <p className="text-sm text-muted-foreground">
                  12.5% increase in orders over the last quarter. Demand continues to rise steadily.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium">Delivery Performance</p>
                <p className="text-sm text-muted-foreground">
                  On-time delivery rate improved to 94.2%, exceeding target by 4%.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium">Forecast Accuracy</p>
                <p className="text-sm text-muted-foreground">
                  ARIMA model achieving 91.2% accuracy within ±10% margin for 3-month horizon.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts & Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Alerts & Recommendations
          </CardTitle>
          <CardDescription>Action items requiring attention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Material Stock Alert</AlertTitle>
            <AlertDescription>
              Paper GSM 250 inventory projected to run low by mid-December. Consider placing order by Nov 15.
            </AlertDescription>
          </Alert>
          <Alert>
            <Calendar className="h-4 w-4" />
            <AlertTitle>Peak Season Planning</AlertTitle>
            <AlertDescription>
              Forecast indicates 18% increase in orders for Q1 2026. Review production capacity and staffing.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Seasonal Trends */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Seasonal Trends Analysis</CardTitle>
          <CardDescription>Demand patterns and cyclical behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="font-medium">Q1 Pattern</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Historically shows 15-20% increase in packaging demand. Peak occurs in February-March due to post-holiday restocking.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="font-medium">Mid-Year Stability</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Q2-Q3 shows consistent demand with ±5% variance. Ideal period for maintenance and efficiency improvements.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-3" />
                <span className="font-medium">Year-End Surge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Q4 typically sees 25-30% volume increase. Pre-holiday orders drive peak material usage in October-November.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsPanel;
