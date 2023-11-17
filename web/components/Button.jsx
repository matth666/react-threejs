import classNames from "classnames";

const base =
  "bg-green-200 rounded px-4 py-2 text-white text-md font-semibold shadow-sm";

const variants = {
  primary:
    "bg-blue-500 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  secondary: "bg-red-600 text-sky-100",
  disable: "opacity-50 bg-sky-800 text-sky-100",
};

const Button = (props) => {
  const { className, variant = "primary", children, ...otherProps } = props;

  return (
    <button
      className={classNames(base, className, variants[variant], otherProps)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
