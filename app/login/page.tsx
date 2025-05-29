import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Login to Your Account</h1>
        <LoginForm />
      </div>
    </main>
  );
}