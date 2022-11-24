interface IButton {
  label: String;
  icon: JSX.Element[] | JSX.Element;
}

const Button = ({ label, icon }: IButton) => {
  return (
    <button className="py-2 px-6 bg-primary rounded-3xl">
      {label} {}
    </button>
  );
};

export default Button;
