interface ButtonProps {
  children: React.ReactNode;
  onclick?: () => void;
  className?: string;
}

export default function Button({
  onclick,
  children,
  className = "",
}: ButtonProps) {
  return <button
    onClick={onclick}
    className={`px-6 py-3 rounded-full outline-none cursor-pointer
    relative overflow-hidden border border-transparent bg-violet-600 ${className}`}
    >
    {children}
  </button>;
}
