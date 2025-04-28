type RadioOption = {
  value: string;
  label: string;
};
type RadioGroupProps = {
  options: RadioOption[];
  name?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const RadioUi = ({
  options,
  name,
  value,
  onChange,
}: RadioGroupProps) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
