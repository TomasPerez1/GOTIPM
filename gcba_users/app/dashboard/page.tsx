import getEmployees from '@/actions/getEmployees';
import Dashboard from '../(components)/Dashboard';
import getRoles  from '@/actions/getRoles';
import { Employee, Role } from '@/types';

export default async function Page() {
  let roles: Role[] | [] = [];
  let employees: Employee[] | [] = [];
  try {
    roles = await getRoles();
    employees = await getEmployees();
  } catch (error) {
    console.error('Error fetching roles', error);
  }
  return <Dashboard employees={employees} roles={roles} />;
}