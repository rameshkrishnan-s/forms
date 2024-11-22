import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/ui/stepper";
import { Step1 } from "@/components/forms/step1";
import { Step2 } from "@/components/forms/step2";
import { Step3 } from "@/components/forms/step3";
import { Step4 } from "@/components/forms/step4";
import { Step5 } from "@/components/forms/step5";
import { Summary } from "@/components/forms/summary";

const steps = [
  "Trip Details",
  "Package Details",
  "Personal Information",
  "Employment Information",
  "Guardian Information",
  "Summary",
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    journeyDate: "",
    destination: "",
    numberOfPeople: "",
    loanProduct: "NO-COST",
    journeyDuration: "",
    totalPackageCharges: "",
    loanAmountRequired: "",
    emiTenor: 3,
    panNo: "",
    fullName: "",
    mobileNo: "",
    email: "",
    dateOfBirth: "",
    gender: "Male",
    pincode: "",
    city: "",
    totalWorkExperience: "",
    currentlyWorking: "No",
    employmentType: "Salaried",
    currentEmployerName: "",
    netMonthlyIncome: "",
    relationship: "",
    fullNameRelative: "",
    referenceMobileNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 1:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step4 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step5 formData={formData} handleChange={handleChange} />;
      case 5:
        return <Summary formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="w-full py-16 bg-card border-b">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-24">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-6 py-12 mb-24">
        <div className="bg-card p-8 rounded-xl shadow-lg">
          {renderStep()}
        </div>
      </div>

      {/* Fixed Button Container */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t py-4 shadow-lg">
        <div className="max-w-2xl mx-auto px-6 flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="min-w-[100px]"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="min-w-[100px]"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}