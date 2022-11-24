interface TProps {
  children: JSX.Element[] | JSX.Element | String;
}

const H1 = ({ children }: TProps) => (
  <h1 className="text-[140px] tablet:text-[100px] font-bold text-dark leading-[125px]">
    {children}
  </h1>
);

const H2 = ({ children }: TProps) => (
  <h2 className="text-[48px] text-dark leading-[58px] font-bold">{children}</h2>
);

const H3 = ({ children }: TProps) => (
  <h2 className="text-[20px] leading-[40px] text-gray font-normal opacity-80">{children}</h2>
);

const H4 = ({ children }: TProps) => (
  <h2 className="text-[16px] leading-[40px] text-gray font-normal opacity-80">{children}</h2>
);

const H5 = ({ children }: TProps) => (
  <h2 className="text-[12px] leading-[15px] text-dark font-normal">{children}</h2>
);

const Typography = { H1, H2, H3, H4, H5 };

export default Typography;
