import Home from './(components)/Home';
import getRoles  from '@/actions/getRoles';

export default async function Page() {
  let roles = [];
  try {
    roles = await getRoles();
  } catch (error) {
    console.error('Error fetching roles:', error);
  }

  return <Home roles={roles} />;
}