"use server";
import axios from "axios";
import { Employee } from "@/types";

export default async function getEmployees(): Promise<Employee[] | []> {
  try {
    const response = await axios.get('http://localhost:3000/api/employees/get'); //? poner en el .env
    const employees = response.data;
    if(!employees) {
      return [];
    }
    return employees;
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  }
};