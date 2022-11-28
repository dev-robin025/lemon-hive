import { FC } from "react";

interface IButton {
  label: String;
  icon: JSX.Element[] | JSX.Element;
}

const Button: FC<IButton> = ({ label, icon }) => {
  return (
    <button className="py-2 px-6 bg-primary rounded-3xl">
      {label} {}
    </button>
  );
};

export default Button;
