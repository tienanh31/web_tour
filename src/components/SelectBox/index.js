import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const variants = {
  FillDeeporange500: "bg-deep_orange_500",
  OutlineDeeporange500:
    "bg-white_A700 border-4 border-deep_orange_500 border-solid",
  OutlineDeeporange5001_2:
    "bg-white_A700 border-bw5 border-deep_orange_500 border-solid",
};
const shapes = {
  CircleBorder26: "rounded-radius26",
  RoundedBorder15: "rounded-radius15",
  RoundedBorder32: "rounded-radius32",
};
const sizes = {
  sm: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
  md: "xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px]",
  lg: "lg:px-[16px] xl:px-[18px] px-[21px] 3xl:px-[25px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px]",
  xl: "lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[14px] xl:px-[16px] px-[18px] 3xl:px-[21px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#ffffff",
              "&:hover": { backgroundColor: "#ffffff", color: "#ff6828" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf([
    "CircleBorder26",
    "RoundedBorder15",
    "RoundedBorder32",
  ]),
  variant: PropTypes.oneOf([
    "FillDeeporange500",
    "OutlineDeeporange500",
    "OutlineDeeporange5001_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "CircleBorder26",
  variant: "FillDeeporange500",
  size: "sm",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };
