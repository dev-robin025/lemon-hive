import TopBar from "./TopBar";

interface CProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: CProps) => {
  return (
    <main className="bg-[url('/landing-bg.png')] bg-no-repeat">
      <TopBar />
      <div className="mx-auto max-w-[1535px] relative">{children}</div>
    </main>
  );
};

export default AppLayout;
