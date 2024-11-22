interface SummaryProps {
  formData: Record<string, any>;
}

export function Summary({ formData }: SummaryProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Application Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </p>
            <p className="text-sm">{value.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}