import { FC } from "react";

interface TProps {
  children: JSX.Element[] | JSX.Element | String;
  bold?: Boolean;
}

const H1: FC<TProps> = ({ children }) => (
  <h1 className="text-[140px] tablet:text-[100px] font-bold text-dark leading-[125px] tablet:leading-[90px] mobile:text-[60px] mobile:leading-[50px]">
    {children}
  </h1>
);

const H2: FC<TProps> = ({ children }) => (
  <h2 className="text-[48px] tablet:text-[40px] tablet:leading-[40px] text-dark leading-[58px] font-bold">
    {children}
  </h2>
);

const H3: FC<TProps> = ({ children, bold }) => (
  <h2
    className={`text-[20px] leading-[40px] tablet:leading-[30px] mobile:text-[18px] mobile:leading-[30px] text-gray opacity-80 ${
      bold ? "font-bold" : "font-normal"
    }`}
  >
    {children}
  </h2>
);

const H4: FC<TProps> = ({ children }) => (
  <h2 className="text-[16px] leading-[40px] text-gray font-normal opacity-80 mobile:leading-[20px]">
    {children}
  </h2>
);

const H5: FC<TProps> = ({ children }) => (
  <h2 className="text-[12px] leading-[15px] text-dark font-normal">{children}</h2>
);

const Typography = { H1, H2, H3, H4, H5 };

export default Typography;
