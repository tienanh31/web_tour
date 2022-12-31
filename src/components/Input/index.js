import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineDeeporange500:
    "bg-white_A700 border-4 border-deep_orange_500 border-solid",
  UnderLineDeeporange500: "border-b-[1px] border-deep_orange_500",
  srcFillDeeporange500: "bg-deep_orange_500",
};
const shapes = {
  RoundedBorder26: "rounded-radius265",
  RoundedBorder15: "rounded-radius15",
  srcCircleBorder35: "rounded-radius35",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  md: "lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px]",
  lg: "lg:pb-[17px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px]",
  xl: "lg:pb-[20px] xl:pb-[23px] pb-[26px] 3xl:pb-[31px]",
  smSrc:
    "lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[14px] xl:px-[16px] px-[19px] 3xl:px-[22px]",
  mdSrc:
    "lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[19px] xl:pt-[22px] pt-[25px] 3xl:pt-[30px] lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder26",
    "RoundedBorder15",
    "srcCircleBorder35",
  ]),
  variant: PropTypes.oneOf([
    "OutlineDeeporange500",
    "UnderLineDeeporange500",
    "srcFillDeeporange500",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineDeeporange500",
  size: "md",
};

export { Input };
