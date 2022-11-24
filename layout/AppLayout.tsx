interface CProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: CProps) => {
  return (
    <main>
      <div className="mx-auto max-w-[1535px] relative">{children}</div>
    </main>
  );
};

export default AppLayout;
