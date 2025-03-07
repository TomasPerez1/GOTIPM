"use server";
import axios from "axios";
import { Response } from "@/types";
interface DeleteEmployee {
  dni: number;
}

export default async function deleteEmployee({ dni }: DeleteEmployee): Promise<Response>  {
  try {
    await axios.delete('http://localhost:3000/api/employees/delete', {
      data: { dni }
    });

    return { success: true, message: `Empleado con DNI ${dni} eliminado` };
  } catch (error) {
    console.error("Error deleting employee:", error);
    return { success: false, message: `Error al eliminar el empleado: ${error}` };
  }
};