import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { TextField as MUITextField } from "@material-ui/core";

export default function TextField({ name, helperText, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const props = {
    ...rest,
    defaultValue,
    inputRef,
    name: fieldName,
    error: !!error,
    helperText: error || helperText,
    inputProps: {
      id: fieldName,
      "aria-label": fieldName,
    },
  };

  return <MUITextField {...props} />;
}
