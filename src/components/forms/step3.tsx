import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step3Props {
  formData: {
    panNo: string;
    fullName: string;
    mobileNo: string;
    email: string;
    dateOfBirth: string;
    gender: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step3({ formData, handleChange }: Step3Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="panNo">PAN Number</Label>
        <Input
          id="panNo"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mobileNo">Mobile Number</Label>
        <Input
          id="mobileNo"
          name="mobileNo"
          type="tel"
          value={formData.mobileNo}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Gender</Label>
        <Select defaultValue={formData.gender}>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}