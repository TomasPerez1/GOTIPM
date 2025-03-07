"use server";
import { Role } from "@/types";
import { toast } from "sonner";
import axios from "axios";

export default async function getRoles(): Promise<Role[] | []> {
  try {
    const response = await axios.get('http://localhost:3000/api/roles/get'); //? poner en el .env
    const roles = response.data.roles;
    if(!roles.length) {
      const createdRoles = await axios.get('http://localhost:3000/api/roles/create');
      return createdRoles.data;
    }
    return roles;

  } catch (error) {
    toast.error(`Error ${error}`);
    console.error("Error fetching roles:", error);
    return [];
  }
};