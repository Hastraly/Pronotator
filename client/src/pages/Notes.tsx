import { NotesTable, type Note } from "@/components/NotesTable";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Notes() {
  //todo: remove mock functionality
  const [searchTerm, setSearchTerm] = useState("");
  
  const mockNotes: Note[] = [
    { id: '1', matiere: 'Mathématiques', note: 16, noteSur: 20, coefficient: 3, date: '15/01/2025' },
    { id: '2', matiere: 'Français', note: 12, noteSur: 20, coefficient: 2, date: '14/01/2025' },
    { id: '3', matiere: 'Anglais', note: 18, noteSur: 20, coefficient: 2, date: '13/01/2025' },
    { id: '4', matiere: 'Histoire-Géo', note: 9, noteSur: 20, coefficient: 1, date: '12/01/2025' },
    { id: '5', matiere: 'Physique-Chimie', note: 15, noteSur: 20, coefficient: 3, date: '11/01/2025' },
    { id: '6', matiere: 'SVT', note: 14, noteSur: 20, coefficient: 2, date: '10/01/2025' },
  ];

  const filteredNotes = mockNotes.filter(note =>
    note.matiere.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Notes</h1>
        <p className="text-muted-foreground mt-1">Consultez toutes vos notes par matière</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher une matière..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
          data-testid="input-search-notes"
        />
      </div>

      <NotesTable notes={filteredNotes} />
    </div>
  );
}
