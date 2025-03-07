import Home from './(components)/Home';
import getRoles  from '@/actions/getRoles';
import { Role } from '@/types';

export default async function Page() {
  let roles: Role[] | [] = [];
  try {
    roles = await getRoles();
  } catch (error) {
    console.error('Error fetching roles', error);
  }

  return <Home roles={roles} />;
}