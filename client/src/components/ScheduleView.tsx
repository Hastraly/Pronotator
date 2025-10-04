import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface CourseSlot {
  id: string;
  matiere: string;
  professeur: string;
  salle: string;
  heureDebut: string;
  heureFin: string;
  jour: string;
}

interface ScheduleViewProps {
  courses: CourseSlot[];
}

const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const subjectColors: Record<string, string> = {
  "Mathématiques": "bg-chart-1 text-white",
  "Français": "bg-chart-2 text-white",
  "Anglais": "bg-chart-3 text-white",
  "Histoire-Géo": "bg-chart-4 text-white",
  "Physique-Chimie": "bg-chart-5 text-white",
  "default": "bg-primary text-white",
};

export function ScheduleView({ courses }: ScheduleViewProps) {
  const coursesByDay = jours.reduce((acc, jour) => {
    acc[jour] = courses.filter(c => c.jour === jour).sort((a, b) => 
      a.heureDebut.localeCompare(b.heureDebut)
    );
    return acc;
  }, {} as Record<string, CourseSlot[]>);

  return (
    <ScrollArea className="h-[600px]">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jours.map((jour) => (
          <Card key={jour}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{jour}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {coursesByDay[jour].length === 0 ? (
                <p className="text-sm text-muted-foreground">Pas de cours</p>
              ) : (
                coursesByDay[jour].map((course) => (
                  <div
                    key={course.id}
                    className="space-y-1 p-3 rounded-md border hover-elevate"
                    data-testid={`course-${course.id}`}
                  >
                    <Badge className={subjectColors[course.matiere] || subjectColors.default}>
                      {course.matiere}
                    </Badge>
                    <p className="text-sm font-medium">
                      {course.heureDebut} - {course.heureFin}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {course.professeur} • {course.salle}
                    </p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
