import { ScheduleView } from '../ScheduleView'

export default function ScheduleViewExample() {
  const mockCourses = [
    { id: '1', matiere: 'Mathématiques', professeur: 'M. Dupont', salle: 'B201', heureDebut: '08:00', heureFin: '09:00', jour: 'Lundi' },
    { id: '2', matiere: 'Français', professeur: 'Mme Martin', salle: 'A105', heureDebut: '09:00', heureFin: '10:00', jour: 'Lundi' },
    { id: '3', matiere: 'Anglais', professeur: 'Mme Smith', salle: 'C302', heureDebut: '10:15', heureFin: '11:15', jour: 'Lundi' },
    { id: '4', matiere: 'Histoire-Géo', professeur: 'M. Bernard', salle: 'A201', heureDebut: '08:00', heureFin: '09:00', jour: 'Mardi' },
    { id: '5', matiere: 'Physique-Chimie', professeur: 'Mme Laurent', salle: 'Lab 1', heureDebut: '09:00', heureFin: '10:00', jour: 'Mardi' },
  ];

  return <ScheduleView courses={mockCourses} />
}
