import { ScheduleView, type CourseSlot } from "@/components/ScheduleView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Schedule() {
  //todo: remove mock functionality
  const mockCourses: CourseSlot[] = [
    { id: '1', matiere: 'Mathématiques', professeur: 'M. Dupont', salle: 'B201', heureDebut: '08:00', heureFin: '09:00', jour: 'Lundi' },
    { id: '2', matiere: 'Français', professeur: 'Mme Martin', salle: 'A105', heureDebut: '09:00', heureFin: '10:00', jour: 'Lundi' },
    { id: '3', matiere: 'Anglais', professeur: 'Mme Smith', salle: 'C302', heureDebut: '10:15', heureFin: '11:15', jour: 'Lundi' },
    { id: '4', matiere: 'Histoire-Géo', professeur: 'M. Bernard', salle: 'A201', heureDebut: '14:00', heureFin: '15:00', jour: 'Lundi' },
    { id: '5', matiere: 'Physique-Chimie', professeur: 'Mme Laurent', salle: 'Lab 1', heureDebut: '08:00', heureFin: '09:00', jour: 'Mardi' },
    { id: '6', matiere: 'SVT', professeur: 'M. Rousseau', salle: 'Lab 2', heureDebut: '09:00', heureFin: '10:00', jour: 'Mardi' },
    { id: '7', matiere: 'Mathématiques', professeur: 'M. Dupont', salle: 'B201', heureDebut: '10:15', heureFin: '11:15', jour: 'Mardi' },
    { id: '8', matiere: 'Anglais', professeur: 'Mme Smith', salle: 'C302', heureDebut: '08:00', heureFin: '09:00', jour: 'Mercredi' },
    { id: '9', matiere: 'Français', professeur: 'Mme Martin', salle: 'A105', heureDebut: '09:00', heureFin: '10:00', jour: 'Mercredi' },
    { id: '10', matiere: 'EPS', professeur: 'M. Legrand', salle: 'Gymnase', heureDebut: '08:00', heureFin: '10:00', jour: 'Jeudi' },
    { id: '11', matiere: 'Histoire-Géo', professeur: 'M. Bernard', salle: 'A201', heureDebut: '10:15', heureFin: '11:15', jour: 'Jeudi' },
    { id: '12', matiere: 'Mathématiques', professeur: 'M. Dupont', salle: 'B201', heureDebut: '08:00', heureFin: '09:00', jour: 'Vendredi' },
    { id: '13', matiere: 'Physique-Chimie', professeur: 'Mme Laurent', salle: 'Lab 1', heureDebut: '09:00', heureFin: '10:00', jour: 'Vendredi' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Emploi du temps</h1>
        <p className="text-muted-foreground mt-1">Consultez votre planning de la semaine</p>
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList>
          <TabsTrigger value="week" data-testid="tab-week">Semaine</TabsTrigger>
          <TabsTrigger value="today" data-testid="tab-today">Aujourd'hui</TabsTrigger>
        </TabsList>
        <TabsContent value="week" className="mt-4">
          <ScheduleView courses={mockCourses} />
        </TabsContent>
        <TabsContent value="today" className="mt-4">
          <ScheduleView courses={mockCourses.filter(c => c.jour === 'Lundi')} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
