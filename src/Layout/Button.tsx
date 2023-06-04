interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element | string;
  color?: string;
  size?: "large" | "medium" | "small";
}

export const Button = ({
  children,
  color = "primary",
  size = "medium",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button {...buttonProps} className={`btn btn--${color} btn--${size}`}>
      {children}
    </button>
  );
};


