import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Calculator, TrendingUp } from "lucide-react";

export default function Dashboard() {
  //todo: remove mock functionality
  const stats = [
    { title: "Dernière note", value: "16/20", icon: FileText, description: "Mathématiques" },
    { title: "Prochain cours", value: "14:00", icon: Calendar, description: "Anglais - Salle C302" },
    { title: "Moyenne générale", value: "13,5", icon: Calculator, description: "Sur 20" },
    { title: "Progression", value: "+0,8", icon: TrendingUp, description: "Ce trimestre" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Tableau de bord</h1>
        <p className="text-muted-foreground mt-1">Vue d'ensemble de vos résultats scolaires</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase()}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-chart-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Nouvelle note en Mathématiques</p>
                <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-chart-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">Emploi du temps mis à jour</p>
                <p className="text-xs text-muted-foreground">Il y a 1 jour</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-chart-1" />
              <div className="flex-1">
                <p className="text-sm font-medium">Nouvelle note en Français</p>
                <p className="text-xs text-muted-foreground">Il y a 3 jours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Matières à améliorer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Histoire-Géo</span>
                <span className="text-sm text-destructive">11,5/20</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-destructive w-[57.5%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Français</span>
                <span className="text-sm text-chart-3">12,8/20</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-chart-3 w-[64%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
