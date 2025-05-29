import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect('/login');
  }
  
  const { data: userRole } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single();

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {userRole?.role === 'admin' ? (
          <AdminDashboard userId={session.user.id} />
        ) : (
          <StudentDashboard userId={session.user.id} />
        )}
      </div>
    </main>
  );
}