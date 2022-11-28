import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FiMenu } from "react-icons/fi";

const TopBar: FC = () => {
  return (
    <header className="w-full max-w-[1320px] py-4 mx-auto flex items-center justify-between px-32 tablet:px-16 mobile:px-10">
      <Link href="/">
        <div className="relative">
          <Image src="/logo-big.png" alt="Logo" width={136} height={63} />
        </div>
      </Link>
      <nav className="tablet:hidden">
        <ul className="flex items-center gap-10 text-lg">
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">What We do</li>
          <li className="cursor-pointer">Our work</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Say hi</li>
        </ul>
      </nav>
      <FiMenu className="text-2xl cursor-pointer" />
    </header>
  );
};

export default TopBar;
