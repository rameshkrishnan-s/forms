import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepProps {
  step: number;
  currentStep: number;
  label: string;
}

function Step({ step, currentStep, label }: StepProps) {
  const isActive = currentStep === step;
  const isCompleted = currentStep > step;

  return (
    <div className="flex flex-col items-center relative">
      <div
        className={cn(
          "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-200",
          isActive && "border-primary bg-primary text-primary-foreground",
          isCompleted && "border-primary bg-primary text-primary-foreground",
          !isActive && !isCompleted && "border-muted-foreground/30 text-muted-foreground"
        )}
      >
        {isCompleted ? (
          <Check className="h-5 w-5" />
        ) : (
          <span className="text-sm font-semibold">{step + 1}</span>
        )}
      </div>
      <span
        className={cn(
          "absolute mt-14 text-sm font-medium whitespace-nowrap",
          isActive && "text-primary",
          isCompleted && "text-primary",
          !isActive && !isCompleted && "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </div>
  );
}

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="relative flex items-center justify-between w-full">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center flex-1 last:flex-none">
          <Step step={index} currentStep={currentStep} label={label} />
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-[2px] w-full mx-4 transition-colors duration-200",
                currentStep > index ? "bg-primary" : "bg-muted-foreground/30"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}