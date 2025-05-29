'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface Student {
  id: number;
  name: string;
  student_id: string;
  grade_level: number;
}

interface Subject {
  id: number;
  name: string;
  grade_level: number;
}

export function AdminDashboard({ userId }: { userId: string }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form states
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [score, setScore] = useState('');
  const [term, setTerm] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [studentsResponse, subjectsResponse] = await Promise.all([
          supabase.from('students').select('*'),
          supabase.from('subjects').select('*')
        ]);

        if (studentsResponse.error) throw studentsResponse.error;
        if (subjectsResponse.error) throw subjectsResponse.error;

        setStudents(studentsResponse.data || []);
        setSubjects(subjectsResponse.data || []);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('grades')
        .insert({
          student_id: parseInt(selectedStudent),
          subject_id: parseInt(selectedSubject),
          score: parseFloat(score),
          term,
          academic_year: academicYear
        });

      if (error) throw error;

      // Reset form
      setSelectedStudent('');
      setSelectedSubject('');
      setScore('');
      setTerm('');
      setAcademicYear('');

      alert('Grade added successfully!');
    } catch (err) {
      setError('Failed to add grade');
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Grade</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="student">Student</Label>
            <Select
              id="student"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
              className="mt-1"
            >
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.student_id})
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              required
              className="mt-1"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name} (Grade {subject.grade_level})
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="score">Score (%)</Label>
            <Input
              id="score"
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="term">Term</Label>
            <Select
              id="term"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              required
              className="mt-1"
            >
              <option value="">Select Term</option>
              <option value="First">First Term</option>
              <option value="Second">Second Term</option>
              <option value="Third">Third Term</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="academicYear">Academic Year</Label>
            <Input
              id="academicYear"
              type="text"
              placeholder="e.g., 2024-2025"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full">
            Add Grade
          </Button>
        </form>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Students List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="p-6">
              <h3 className="font-semibold">{student.name}</h3>
              <p className="text-sm text-gray-600">ID: {student.student_id}</p>
              <p className="text-sm text-gray-600">Grade Level: {student.grade_level}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}