import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export interface Note {
  id: string;
  matiere: string;
  note: number;
  noteSur: number;
  coefficient: number;
  date: string;
}

interface NotesTableProps {
  notes: Note[];
}

export function NotesTable({ notes }: NotesTableProps) {
  const getGradeColor = (note: number, noteSur: number) => {
    const percentage = (note / noteSur) * 20;
    if (percentage >= 14) return "bg-chart-2 text-white";
    if (percentage >= 10) return "bg-chart-3 text-white";
    return "bg-destructive text-white";
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Matière</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Coefficient</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id} data-testid={`row-note-${note.id}`}>
              <TableCell className="font-medium">{note.matiere}</TableCell>
              <TableCell>
                <Badge className={getGradeColor(note.note, note.noteSur)} data-testid={`badge-note-${note.id}`}>
                  {note.note}/{note.noteSur}
                </Badge>
              </TableCell>
              <TableCell>{note.coefficient}</TableCell>
              <TableCell className="text-muted-foreground">{note.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
