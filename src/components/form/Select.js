import { useRef, useEffect, useState } from "react";
import { useField } from "@unform/core";
import { isArray, isEmpty, isObject, toString, uniqueId } from "lodash";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  FormHelperText,
} from "@material-ui/core";

export default function Select({
  name,
  label,
  options,
  multiple,
  native = false,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  function getDefaultValue(value) {
    if (multiple) return isEmpty(value) && !isArray(value) ? [] : value;
    return value;
  }

  const [value, setValue] = useState(getDefaultValue(defaultValue));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "value",
      clearValue: () => {
        setValue("");
      },
      setValue: (ref, value) => {
        setValue(value);
      },
    });
  }, [fieldName, registerField, value]);

  function handleChange(event) {
    if (event.target) {
      const elementValue = event.target.value;

      /** update state only if controlled component */
      if (!native) setValue(elementValue);
    }
  }

  function getOptionKey(source) {
    // generate uniqueId if is object.
    if (isObject(source)) return uniqueId();

    return toString(source);
  }

  const props = {
    ...rest,
    native,
    multiple,
    name: fieldName,
    onChange: handleChange,
    value: native === false ? value : undefined,
    inputProps: {
      ref,
      name: fieldName,
      id: fieldName,
      "aria-label": fieldName,
    },
  };

  return (
    <FormControl fullWidth error={!!error}>
      {!!label && <InputLabel htmlFor={fieldName}>{label}</InputLabel>}

      <MUISelect {...props}>
        {native && <option value="" />}

        {options.map(({ value: optionValue, label: optionLabel }) => {
          if (native) {
            return (
              <option key={getOptionKey(optionValue)} value={optionValue}>
                {optionLabel}
              </option>
            );
          }

          return (
            <MenuItem key={getOptionKey(optionValue)} value={optionValue}>
              {optionLabel}
            </MenuItem>
          );
        })}
      </MUISelect>

      {!!error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
