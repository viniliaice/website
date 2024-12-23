"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  grade: number;
}

export function StudentForm() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      grade: parseInt(formData.get("grade") as string),
    };

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create student");
      }

      const result = await response.json();
      setSuccess(result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>
      )}
      {success && (
        <div className="bg-green-50 text-green-600 p-4 rounded-md">{success}</div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="grade" className="block text-sm font-medium mb-2">
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            required
            className="w-full p-2 border rounded-md"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Student"}
        </Button>
        <Button
          type="button"
          variant="outline"

          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}