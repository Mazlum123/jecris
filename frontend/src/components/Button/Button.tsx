// frontend/src/components/Button/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
  }

  export const Button = ({ label, ...props }: ButtonProps) => (
    <button
      {...props}
      aria-label={label}
      className="button"
    >
      {label}
    </button>
  );