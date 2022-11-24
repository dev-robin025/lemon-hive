import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const TopBar = () => {
  return (
    <header className="w-full max-w-[1320px] py-4 mx-auto flex items-center justify-between px-32">
      <div className="relative">
        <Image src="/logo-big.png" alt="Logo" width={136} height={63} />
      </div>
      <nav className="tablet:hidden">
        <ul className="flex items-center gap-10 text-lg">
          <li>About us</li>
          <li>What We do</li>
          <li>Our work</li>
          <li>Blog</li>
          <li>Say hi</li>
        </ul>
      </nav>
      <FiMenu className="text-2xl cursor-pointer" />
    </header>
  );
};

export default TopBar;