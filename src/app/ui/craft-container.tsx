interface CraftContainerProps {
  children: React.ReactNode;
}

const CraftContainer: React.FC<CraftContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center border h-64 bg-[#f8f9f9] rounded-xl">
      {children}
    </div>
  );
};

export default CraftContainer;
