import { FC } from "react";
import TopBar from "./TopBar";

interface IProps {
  children: JSX.Element;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <main className="bg-[url('/landing-bg.png')] bg-no-repeat mx-auto max-w-[1535px] ">
      <TopBar />
      <div className="relative overflow-x-hidden">{children}</div>
    </main>
  );
};

export default AppLayout;
