import { AveragesCards } from '../AveragesCards'

export default function AveragesCardsExample() {
  const mockAverages = [
    { matiere: 'Mathématiques', moyenne: 14.5, trend: 'up' as const },
    { matiere: 'Français', moyenne: 12.8, trend: 'stable' as const },
    { matiere: 'Anglais', moyenne: 15.2, trend: 'up' as const },
    { matiere: 'Histoire-Géo', moyenne: 11.5, trend: 'down' as const },
  ];

  return <AveragesCards averages={mockAverages} generalAverage={13.5} />
}
