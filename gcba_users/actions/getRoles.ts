"use server";
import axios from "axios";

export default async function getRoles() {
  try {
    const response = await axios.get('http://localhost:3001/api/roles/get');
    const roles = response.data.roles;
    if(!roles.length) {
      const createdRoles = await axios.get('http://localhost:3001/api/roles/create');
      return createdRoles;
    }
    return roles;

  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};