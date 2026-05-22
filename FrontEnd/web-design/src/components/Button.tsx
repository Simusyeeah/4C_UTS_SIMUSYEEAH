interface ButtonProps {
  label?: string; // ✅ optional
  title?: string; // ✅ biar support kode lama
  variant?: "primary" | "secondary" | "outline"; // ✅ tambah outline
  type?: "button" | "submit";
  onClick?: () => void;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  title,
  variant = "primary",
  type = "button",
  isLoading = false,
}) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition";

  const varianStyle = {
    primary: "bg-[#802D43] text-white hover:bg-[#6b2437]",
    secondary: "border border-[#802D43] text-[#802D43] hover:bg-[#802D43] hover:text-white",
    outline: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${baseStyle} ${varianStyle[variant]}`}
    >
      {isLoading ? "Loading..." : label || title}
    </button>
  );
};

export default Button;