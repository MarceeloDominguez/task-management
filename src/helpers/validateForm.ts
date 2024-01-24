type InputValues = {
  task: string;
  description: string;
};

export const validateForm = (values: InputValues) => {
  const errors = {
    errorTask: false,
    errorDescription: false,
  };

  if (!values.task) {
    errors.errorTask = true;
  }

  if (!values.description) {
    errors.errorDescription = true;
  }

  return errors;
};
