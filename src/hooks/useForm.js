import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

const useForm = (type = "text", required = true) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);

    setValue(target.value);
  }

  function validate(value) {
    if (!type) return true;

    if (!value.length && required) {
      setError("Preencha um valor");
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
};

export default useForm;
