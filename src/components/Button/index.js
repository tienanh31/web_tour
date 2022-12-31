import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  CircleBorder38: "rounded-radius38",
  RoundedBorder33: "rounded-radius335",
  RoundedBorder26: "rounded-radius265",
  RoundedBorder15: "rounded-radius15",
  RoundedBorder19: "rounded-radius195",
  icbCircleBorder15: "rounded-radius1531",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  OutlineBlack9003f: "bg-deep_orange_500_e5 shadow-bs text-white_A700",
  FillYellow50cc: "bg-yellow_50_cc text-deep_orange_500",
  FillDeeporange500: "bg-deep_orange_500 text-white_A700",
  OutlineDeeporange500:
    "bg-white_A700 border-4 border-deep_orange_500 border-solid text-deep_orange_500",
  OutlineDeeporange5001_2:
    "bg-white_A700 border-bw5 border-deep_orange_500 border-solid",
  FillDeeporange5004c: "bg-deep_orange_500_4c text-deep_orange_500",
  icbFillDeeporange500: "bg-deep_orange_500",
  icbOutlineTeal300: "bg-white_A700 border-bw3 border-solid border-teal_300",
  icbFillTeal300: "bg-teal_300",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px]",
  lg: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  xl: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  "2xl": "lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
  "3xl": "lg:p-[26px] xl:p-[30px] p-[34px] 3xl:p-[40px]",
  smIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdIcn: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "CircleBorder38",
    "RoundedBorder33",
    "RoundedBorder26",
    "RoundedBorder15",
    "RoundedBorder19",
    "icbCircleBorder15",
    "icbCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9003f",
    "FillYellow50cc",
    "FillDeeporange500",
    "OutlineDeeporange500",
    "OutlineDeeporange5001_2",
    "FillDeeporange5004c",
    "icbFillDeeporange500",
    "icbOutlineTeal300",
    "icbFillTeal300",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smIcn",
    "mdIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder15",
  variant: "FillDeeporange500",
  size: "lg",
};

export { Button };
