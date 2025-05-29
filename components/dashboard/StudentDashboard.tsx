'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Card } from '@/components/ui/card';

interface Grade {
  id: number;
  subject: { name: string };
  score: number;
  term: string;
  academic_year: string;
}

export function StudentDashboard({ userId }: { userId: string }) {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGrades() {
      try {
        const { data: student } = await supabase
          .from('students')
          .select('id')
          .eq('user_id', userId)
          .single();

        if (student) {
          const { data: grades, error } = await supabase
            .from('grades')
            .select(`
              id,
              score,
              term,
              academic_year,
              subject:subjects(name)
            `)
            .eq('student_id', student.id)
            .order('subject->name');

          if (error) throw error;
          setGrades(grades || []);
        }
      } catch (err) {
        setError('Failed to load grades');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGrades();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Grades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grades.map((grade) => (
          <Card key={grade.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{grade.subject.name}</h3>
            <div className="space-y-2">
              <p>Score: {grade.score}%</p>
              <p>Term: {grade.term}</p>
              <p>Year: {grade.academic_year}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}