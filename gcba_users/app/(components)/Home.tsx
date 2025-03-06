"use client";
import Image from "next/image";
import { useFormik } from 'formik';
import { validate, handleSubmit } from "../utils";
import { SelectRole } from "./SelectRole";
import type { Role } from "@/types";


interface HomeProps {
  roles: Role[]
}

export default function Home({ roles }: HomeProps) {

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dni: "",
      role: "",
      dateOfBirth: "",
      description: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <header className={`mt-10 p-0.5 border-b text-xl text-center font-bold w-[35%] font-mono`}>
        Complete el formulario con los datos solicitados para dar de alta un nuevo empleado.
      </header>

      <form className="grid grid-cols-2 min-w-[48%] rounded-xl px-4 py-10 shadow-2xl border-2 border-[#192c3f]  gap-4 bg-[#1f374f]" onSubmit={formik.handleSubmit}>


        <div className="flex flex-col  font-mono">
          <label className="gap-1 flex items-center" htmlFor="firstName">D.N.I<p className="text-red-500">*</p></label>
          <input
            className="rounded-lg "
            id="dni"
            name="dni"
            type="number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.dni}
          />
          <p className={`invisible h-6 ml-2 ${formik.touched.dni && formik.errors.dni && "visible text-red-500"}`}>{formik.errors.dni}</p>
        </div>

        <div className="flex flex-col  font-mono">
          <label className="gap-1 flex items-center" htmlFor="fullName">Nombre completo<p className="text-red-500">*</p></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          <p className={`invisible h-6  ml-2 ${formik.touched.fullName && formik.errors.fullName && "visible text-red-500"}`}>{formik.errors.fullName}</p>
        </div>

        <div className="flex flex-col  font-mono">
          <label className="gap-1 flex items-center" htmlFor="role">Puesto de trabajo <p className="text-red-500">*</p></label>
          <SelectRole
            roles={roles}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.role}
          />
          <p className={`invisible h-6  ml-2 ${formik.touched.role && formik.errors.role && "visible text-red-500"}`}>{formik.errors.role}</p>
        </div>

        <div className="flex flex-col  font-mono">
          <label className="gap-1 flex items-center" htmlFor="dateOfBirth">Fecha de nacimiento<p className="text-red-500">*</p></label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
          <p className={`invisible h-6  ml-2  ${formik.touched.dateOfBirth && formik.errors.dateOfBirth && "visible text-red-500"}`}>{formik.errors.dateOfBirth}</p>
        </div>

        <div className="col-span-2 flex flex-col  font-mono">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="overflow-hidden min-h-20"
            id="description"
            name="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <p className={`invisible h-6 border ml-2  ${formik.touched.description && formik.errors.description && "visible text-red-500"}`}>{formik.errors.description}</p>
        </div>

        <button
          disabled={Object.keys(formik.errors).length ? true : false}
          className={`font-mono place-self-center border col-span-2 bg-gray-200 text-black rounded-lg text-md px-4 py-2 hover:bg-[#4a5d75] hover:text-white hover:border-white transition-colors hover:cursor-pointer disabled:opacity-15 disabled:pointer-events-none ${!Object.keys(formik.errors).length && formik.values.fullName.length > 1 && "animate-pulse"}`}
          type="submit"
        >
          HABILITAR EMPLEADO
        </button>
      </form>

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
