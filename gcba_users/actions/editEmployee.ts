"use server";
import axios from "axios";
import { NewEmployeeData, Response } from "@/types";

interface EditEmployeeProps {
  dni: number;
  newData: NewEmployeeData
}


export default async function editEmployee({ dni, newData }: EditEmployeeProps): Promise<Response> {
  try {
    //? Se podria usar el Prisma Client para modificar la DB directamente pero de esta forma no se aprovehcarian los endpoints creados.
    const updatedEmployee = await axios.put('http://localhost:3000/api/employees/edit', { dni, newData });

    if (!updatedEmployee) {
      throw new Error("No se pudo actualizar el empleado");
    }

    return { success: true, message: `Empleado con DNI ${dni} actualizado correctamente` };
  } catch (error) {
    return { success: false, message: `Error al actualizar el empleado: ${error}` };
  }
};