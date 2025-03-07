import type { Role } from "@/types";


interface SelectRoleProps {
  roles: Role[];
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
}

export default function SelectRole({ roles, name, value, onChange, onBlur }: SelectRoleProps) {
  return (
    <select name={name} id="Role" onBlur={onBlur} onChange={onChange} value={value}>
      {roles?.map((rol) => <option value={rol.id} key={rol.id}>{rol.name}</option>)}
    </select>
  );
}