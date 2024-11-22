import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step1Props {
  formData: {
    journeyDate: string;
    destination: string;
    numberOfPeople: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step1({ formData, handleChange }: Step1Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="journeyDate">Journey Date</Label>
        <Input
          id="journeyDate"
          name="journeyDate"
          type="date"
          value={formData.journeyDate}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="numberOfPeople">Number of People</Label>
        <Input
          id="numberOfPeople"
          name="numberOfPeople"
          type="number"
          value={formData.numberOfPeople}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}