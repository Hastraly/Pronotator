import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface Average {
  matiere: string;
  moyenne: number;
  trend: "up" | "down" | "stable";
}

interface AveragesCardsProps {
  averages: Average[];
  generalAverage: number;
}

export function AveragesCards({ averages, generalAverage }: AveragesCardsProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-chart-2" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getGradeColor = (moyenne: number) => {
    if (moyenne >= 14) return "text-chart-2";
    if (moyenne >= 10) return "text-chart-3";
    return "text-destructive";
  };

  return (
    <div className="space-y-4">
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Moyenne générale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold" data-testid="text-general-average">
            {generalAverage.toFixed(2).replace('.', ',')}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Sur 20</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {averages.map((avg) => (
          <Card key={avg.matiere} data-testid={`card-average-${avg.matiere.toLowerCase()}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
              <CardTitle className="text-sm font-medium">{avg.matiere}</CardTitle>
              {getTrendIcon(avg.trend)}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getGradeColor(avg.moyenne)}`}>
                {avg.moyenne.toFixed(2).replace('.', ',')}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Sur 20</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
