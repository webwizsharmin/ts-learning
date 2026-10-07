type ButtonProps = {
  label: string;

  // A callback function that takes no parameters and returns nothing
  onClick: () => void;

  // React.ReactNode allows texts, elements, or arrays passed between tags
  children: React.ReactNode;
};

export function CustomButton({ label, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-gray-100 px-4 py-2 rounded-full cursor-pointer "
    >
      {label}
      {children}
    </button>
  );
}
