import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step2Props {
  formData: {
    loanProduct: string;
    journeyDuration: string;
    totalPackageCharges: string;
    loanAmountRequired: string;
    emiTenor: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Step2({ formData, handleChange }: Step2Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Loan Product</Label>
        <Select defaultValue={formData.loanProduct}>
          <SelectTrigger>
            <SelectValue placeholder="Select loan product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NO-COST">No Cost EMI</SelectItem>
            <SelectItem value="LOW-COST">Low Cost EMI</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="journeyDuration">Journey Duration (Days)</Label>
        <Input
          id="journeyDuration"
          name="journeyDuration"
          type="number"
          value={formData.journeyDuration}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="totalPackageCharges">Total Package Charges</Label>
        <Input
          id="totalPackageCharges"
          name="totalPackageCharges"
          type="number"
          value={formData.totalPackageCharges}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="loanAmountRequired">Loan Amount Required</Label>
        <Input
          id="loanAmountRequired"
          name="loanAmountRequired"
          type="number"
          value={formData.loanAmountRequired}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}