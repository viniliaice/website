"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export function StudentFormFields() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" name="firstName" required />
      </div>
      
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" required />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      
      <div>
        <Label htmlFor="grade">Grade</Label>
        <Select id="grade" name="grade" required>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Grade {i + 1}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}