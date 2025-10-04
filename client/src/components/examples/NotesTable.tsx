import { NotesTable } from '../NotesTable'

export default function NotesTableExample() {
  const mockNotes = [
    { id: '1', matiere: 'Mathématiques', note: 16, noteSur: 20, coefficient: 3, date: '15/01/2025' },
    { id: '2', matiere: 'Français', note: 12, noteSur: 20, coefficient: 2, date: '14/01/2025' },
    { id: '3', matiere: 'Anglais', note: 18, noteSur: 20, coefficient: 2, date: '13/01/2025' },
    { id: '4', matiere: 'Histoire-Géo', note: 9, noteSur: 20, coefficient: 1, date: '12/01/2025' },
  ];

  return <NotesTable notes={mockNotes} />
}
