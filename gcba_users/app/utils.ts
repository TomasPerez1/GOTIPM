import axios  from "axios";

interface Values {
  fullName: string,
  dni: number | "",
  role: number | "",
  dateOfBirth: string,
  description: string,
}

interface ValuesErrors {
  fullName?: string,
  dni?: string,
  role?: string,
  dateOfBirth?: string,
  description?: string,
}


export const validate = (values: Values) => {
  const errors: ValuesErrors = {};
  if (!values.dni) {
    errors.dni = 'ingrese su dni';
  } else if (`${values.dni}`.length > 9) {
    errors.dni = 'DNI demasiado largo';
  } else if (`${values.dni}`.length < 7) {
    errors.dni = 'DNI demasiado corto';
  }

  if (!values.fullName) {
    errors.fullName = 'Ingrese un nombre';
  } else if (values.fullName.length > 40) {
    errors.fullName = 'Nombre demasiado largo';
  } else if (values.fullName.length < 5) {
    errors.fullName = 'Nombre demasiado corto';
  }

  if (!values.role) {
    errors.role = 'Required';
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  }

  return errors;
};

export const handleSubmit = async (values: Values) => {
  try {
    const createdEmployee = await axios.post("/api/employees/create", { employeeData: values });
    console.log("SUBmitio", createdEmployee);
  }
  catch (err) {
    console.log(err);
  }
  finally {
    // setLoading(false);
  }
};