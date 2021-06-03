import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ children, className, disabled = false, isLoading, ...rest }) => (
  <button
    className={clsx("bg-black text-white py-9 px-40 flex items-center transform hover:scale-110 duration-300", {
      [className]: !!className,
      "opacity-30": disabled,
    })}
    {...rest}
  >
    {(isLoading && (
      <div className={"px-10 py-4"}>
        <svg
          className="animate-spin h-20 w-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    )) ||
      children}
  </button>
);

export default Button;
