import axios  from "axios";
import { DateTime } from "luxon";
import { toast } from "sonner";
interface Values {
  fullName: string,
  dni: number | "",
  Role: number | "",
  dateOfBirth: string,
  description: string,
}

interface ValuesErrors {
  fullName?: string,
  dni?: string,
  Role?: string,
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

  if (!values.Role) {
    errors.Role = 'Required';
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  } else {
    const birthDate = DateTime.fromISO(values.dateOfBirth);
    const age = DateTime.now().diff(birthDate, 'years').years;
    if (age < 18) {
      errors.dateOfBirth = 'Debe tener al menos 18 años';
    }
  }

  return errors;
};

export const handleSubmit = async (values: Values, setLoading: (loading: boolean) => void) => {
  try {
    setLoading(true);
    const createdEmployee = await axios.post("/api/employees/create", { employeeData: values });
    toast.success("Empleado habilitado con exito");
    return createdEmployee.data;
  }
  catch (err) {
    console.log(err);
    toast.error("Erro al habilitar empleado");
  }
  finally {
    setLoading(false);
  }
};

export const getDefaultDate = () => {
  const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() - 19)).toISOString().split('T')[0];
  return defaultDate;
};