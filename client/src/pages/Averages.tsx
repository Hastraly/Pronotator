import { AveragesCards, type Average } from "@/components/AveragesCards";

export default function Averages() {
  //todo: remove mock functionality
  const mockAverages: Average[] = [
    { matiere: 'Mathématiques', moyenne: 14.5, trend: 'up' },
    { matiere: 'Français', moyenne: 12.8, trend: 'stable' },
    { matiere: 'Anglais', moyenne: 15.2, trend: 'up' },
    { matiere: 'Histoire-Géo', moyenne: 11.5, trend: 'down' },
    { matiere: 'Physique-Chimie', moyenne: 14.0, trend: 'up' },
    { matiere: 'SVT', moyenne: 13.5, trend: 'stable' },
  ];

  const generalAverage = mockAverages.reduce((sum, avg) => sum + avg.moyenne, 0) / mockAverages.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Moyennes</h1>
        <p className="text-muted-foreground mt-1">Calculez et suivez vos moyennes par matière</p>
      </div>

      <AveragesCards averages={mockAverages} generalAverage={generalAverage} />
    </div>
  );
}
