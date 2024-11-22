import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step5Props {
  formData: {
    relationship: string;
    fullNameRelative: string;
    referenceMobileNo: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step5({ formData, handleChange }: Step5Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Relationship</Label>
        <Select defaultValue={formData.relationship}>
          <SelectTrigger>
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Parent">Parent</SelectItem>
            <SelectItem value="Spouse">Spouse</SelectItem>
            <SelectItem value="Sibling">Sibling</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="fullNameRelative">Full Name</Label>
        <Input
          id="fullNameRelative"
          name="fullNameRelative"
          value={formData.fullNameRelative}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="referenceMobileNo">Mobile Number</Label>
        <Input
          id="referenceMobileNo"
          name="referenceMobileNo"
          type="tel"
          value={formData.referenceMobileNo}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}