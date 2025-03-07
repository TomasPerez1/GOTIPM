"use client";
import { useState } from "react";
import Image from "next/image";
import { Employee, Role } from "@/types";
import SelectRole from "../(components)/SelectRole";
import { DateTime } from "luxon";
import editEmployee from "@/actions/editEmployee";
import { toast } from "sonner";
import deleteEmployee from "@/actions/deleteEmployee";
import Footer from "./Footer";

interface EmployeesTableProps {
  employees: Employee[];
  roles: Role[]
}

interface EmployeeDictionary {
  [key: string]: Employee
}



export default function Dashboard({ employees, roles }: EmployeesTableProps) {
  // ? Creo un diccionario para un mejor rendimien en el caso de exisitir muchos empleados
  const getDictionary = () => {
    const dictionary: EmployeeDictionary = {};
    employees.forEach((employee) => {
      dictionary[`${employee.dni}`] = employee;
    });
    return dictionary;
  };

  const [data, setData] = useState(getDictionary());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, employee: Employee) => {
    setData((prev: EmployeeDictionary): EmployeeDictionary => {
      return {
        ...prev,
        [`${employee.dni}`]: {
          ...prev[`${employee.dni}`],
          [e.target.name]: e.target.value
        }
      };
    });
  };


  const handleEdit = async (dni: number) => {
    const res = await editEmployee({ dni, newData: data[`${dni}`] });
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };


  const handleDelete = async (dni: number) => {
    const res = await deleteEmployee({ dni });
    if (res.success) {
      toast.success(res.message);
      setData(prev => {
        const prevEmployees = { ...prev };
        delete prevEmployees[dni];
        return prevEmployees;
      });
    } else {
      toast.error(res.message);
    }
  };

  const th = ["DNI", "Nombre Completo", "Fecha de Nacimiento", "Puesto de trabajo", "Descripción", "Editar", "Eliminar"];

  return (
    <section className="px-5 overflow-x-auto flex flex-col justify-center gap-7 md:justify-between md:py-10 items-center justify-items-center min-h-screen ">
      <p className="mt-0 p-0.5 border-b text-lg text-center font-bold md:w-[45%] font-mono">
        .Para editar un empleado modifique los campos y oprima el botón de editar
        <br />
        .Para eleiminiar un empleado oprima el botón de eliminar
      </p>
      {!Object.values(data).length ? <h1 className="font-mono">No hay empleados cargados en la DB</h1> :
        <table className=" min-w-[95%] mx-auto border-[#192c3f] border bg-[#1f374f] rounded-xl">
          <thead className="rounded-xl ">
            <tr className="bg-gray-600 text-center">
              {th.map((header) => (
                <th className="py-2 px-4 " key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded-xl border-0">
            {Object.values(data).map((employee) => (
              <tr key={employee.dni} className="hover:bg-gray-600 ">
                {/* //* DNI */}
                <td className="py-2 px-4 font-bold">{employee.dni}</td>

                {/* //* fullName */}
                <td
                  className="py-2 px-4  cursor-pointer"
                >
                  <input
                    onChange={(e) => handleChange(e, employee)}
                    type="text"
                    name="fullName"
                    value={data[`${employee.dni}`].fullName}
                    className="border rounded p-1 w-full"
                  />
                </td>

                {/* //* dateOfBirth */}
                <td className="py-2 px-4  flex">
                  <input
                    onChange={(e) => handleChange(e, employee)}
                    type="date"
                    name="dateOfBirth"
                    value={DateTime.fromJSDate(new Date(data[`${employee.dni}`].dateOfBirth)).toFormat('yyyy-MM-dd')}
                    className="rounded p-1  w-fit mx-auto"
                  />
                </td>

                {/* //* Puesto de trabajo */}
                <td className="py-2 px-4  ">
                  <SelectRole
                    name="roleId"
                    onChange={(e) => handleChange(e, employee)}
                    roles={roles}
                    value={data[`${employee.dni}`].roleId}
                  />
                </td>

                {/* //* description */}
                <td
                  className="py-2 px-4  cursor-pointer  flex"
                >
                  <input
                    onChange={(e) => handleChange(e, employee)}
                    type="text"
                    name="description"
                    value={data[`${employee.dni}`].description}
                    className="rounded p-1 w-fit mx-auto"
                  />
                </td>

                {/* //* Editar */}
                <td className="py-2 px-4 ">
                  <button
                    onClick={() => handleEdit(employee.dni)}
                    className="bg-blue-500 text-white  rounded px-2 py-1  hover:opacity-50"
                  >
                    <Image
                      aria-hidden
                      src="/edit-fill.svg"
                      alt="Edit icon"
                      width={25}
                      height={25}
                    />
                  </button>
                </td>

                {/* //* Eliminar */}
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(employee.dni)}
                    className="bg-red-500 text-white   rounded px-2 py-1  hover:opacity-50"
                  >
                    <Image
                      aria-hidden
                      src="/delete-bin-fill.svg"
                      alt="Edit icon"
                      width={25}
                      height={25}
                    />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>}

      <Footer/>
    </section>
  );
}
