"use client";
import type { Role } from "@/types";
import Image from "next/image";
import { useFormik } from 'formik';
import { validate, handleSubmit, getDefaultDate } from "../utils";
import  SelectRole  from "./SelectRole";
import  Loader  from "./Loader";
import { useState } from "react";

interface HomeProps {
  roles: Role[]
}

interface FormValues {
  dni: string;
  fullName: string;
  Role: string;
  dateOfBirth: string;
  description: string;
}

interface Field {
  id: keyof FormValues;
  label: string;
  type: string;
  required: boolean;
}

const fields: Field[] = [
  { id: "dni", label: "D.N.I", type: "number", required: true },
  { id: "fullName", label: "Nombre completo", type: "text", required: true },
  { id: "Role", label: "Puesto de trabajo", type: "select", required: true },
  { id: "dateOfBirth", label: "Fecha de nacimiento", type: "date", required: true },
  { id: "description", label: "Descripción", type: "textarea", required: false },
];

export default function Home({ roles }: HomeProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dni: "",
      Role: roles[0]?.id,
      dateOfBirth: getDefaultDate(),
      description: "",
    },
    validate,
    onSubmit: (values) => {
      handleSubmit(values, setLoading);
      formik.resetForm();
    }
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <header className={`mt-10 p-0.5 border-b text-xl text-center font-bold w-[35%] font-mono`}>
        Complete el formulario con los datos solicitados para dar de alta un nuevo empleado.
      </header>
      <form className="grid grid-cols-2 min-w-[48%] rounded-xl px-4 py-10 shadow-2xl border-2 border-[#192c3f]  gap-4 bg-[#1f374f]" onSubmit={formik.handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className={`flex flex-col font-mono ${field.type === "textarea" && "col-span-2"}`}>
            <label className="gap-1 flex items-center" htmlFor={field.id}>
              {field.label}
              {field.required && <p className="text-red-500">*</p>}
            </label>
            {field.type === "select" ? (
              <SelectRole
                roles={roles}
                name="Role"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[field.id]}
              />
            ) : field.type === "textarea" ? (
              <textarea
                className="overflow-hidden min-h-20 "
                id={field.id}
                name={field.id}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[field.id]}
              />
            ) : (
              <input
                className="rounded-lg"
                id={field.id}
                name={field.id}
                type={field.type}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[field.id]}
              />
            )}
            <p className={`invisible h-6 ml-2 ${formik.touched[field.id] && formik.errors[field.id] && "visible text-red-500"}`}>
              {formik.errors[field.id]}
            </p>
          </div>
        ))}

        <button
          disabled={Object.keys(formik.errors).length ? true : false}
          className={`default-button place-self-center border col-span-2  ${!Object.keys(formik.errors).length && formik.values.fullName.length > 1 && "animate-pulse"}`}
          type="submit"
        >
          {!loading ? "HABILITAR EMPLEADO" : <Loader text="creando empleado"/>}
        </button>
      </form>


      {/* // ? Refactorizar footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://buenosaires.gob.ar/inicio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/gcba_title_logo.svg"
            alt="Globe icon"
            width={250}
            height={250}
          />
        </a>
      </footer>
    </div>
  );
}
