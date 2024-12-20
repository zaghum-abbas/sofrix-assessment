import classNames from "classnames";

export const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      className={classNames(
        "border border-primary rounded-[10px] 2xl:py-5 py-3 px-[10px] max-w-[420px] w-full !hover:border-primary",
        className
      )}
      placeholder={placeholder}
    />
  );
};
