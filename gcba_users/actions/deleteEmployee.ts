"use server";
import axios from "axios";

interface DeleteEmployee {
  dni: number;
}

export default async function deleteEmployee({ dni }: DeleteEmployee) { // ? Poner que retorna
  try {
    const response = await axios.delete('http://localhost:3000/api/employees/delete', {
      data: { dni }
    });
    const deletedEmployee = response.data;
    return { success: true, message: `Empleado con DNI ${dni} eliminado`, deletedEmployee };
  } catch (error) {
    console.error("Error deleting employee:", error);
    return { success: false, message: `Error al eliminar el empleado: ${error}` };
  }
};