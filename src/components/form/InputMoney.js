import { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { FormHelperText, TextField } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

export default function InputMoney({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const defaultMaskOptions = {
    prefix: "R$ ",
    suffix: "",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    requireDecimal: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask(defaultMaskOptions);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "state",
      setValue(ref, value) {
        ref.state = value;
        ref.inputElement.value = value;
      },
      getValue: (ref) => {
        return ref.inputElement.value;
      },
      clearValue: (ref) => {
        ref.state = "";
        ref.inputElement.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <MaskedInput
        {...rest}
        ref={inputRef}
        defaultValue={defaultValue}
        mask={currencyMask}
        render={(ref, props) => (
          <TextField inputRef={ref} {...props} error={!!error} />
        )}
      />

      {!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  );
}
