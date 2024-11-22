import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step4Props {
  formData: {
    totalWorkExperience: string;
    currentlyWorking: string;
    employmentType: string;
    currentEmployerName: string;
    netMonthlyIncome: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step4({ formData, handleChange }: Step4Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="totalWorkExperience">Total Work Experience (Years)</Label>
        <Input
          id="totalWorkExperience"
          name="totalWorkExperience"
          type="number"
          value={formData.totalWorkExperience}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Currently Working</Label>
        <Select defaultValue={formData.currentlyWorking}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Employment Type</Label>
        <Select defaultValue={formData.employmentType}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Salaried">Salaried</SelectItem>
            <SelectItem value="Self-Employed">Self-Employed</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="currentEmployerName">Current Employer Name</Label>
        <Input
          id="currentEmployerName"
          name="currentEmployerName"
          value={formData.currentEmployerName}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="netMonthlyIncome">Net Monthly Income</Label>
        <Input
          id="netMonthlyIncome"
          name="netMonthlyIncome"
          type="number"
          value={formData.netMonthlyIncome}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}