import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillDeeporange500: "bg-deep_orange_500",
  FillDeeporange5001_2: "bg-deep_orange_500",
  FillDeeporange502: "bg-deep_orange_502",
  FillDeeporange5021_2: "bg-deep_orange_502",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      variant,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} `}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "FillDeeporange500",
    "FillDeeporange5001_2",
    "FillDeeporange502",
    "FillDeeporange5021_2",
  ]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "FillDeeporange5001_2",
};

export { CheckBox };
