import type { Role } from "@/types";


interface SelectRoleProps {
  roles: Role[];
  value: string | number;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
}

export function SelectRole({ roles, value, onChange, onBlur }: SelectRoleProps) {
  // console.log("DESDE SELECTED", roles);
  return (
    <select name="role" id="role" onBlur={onBlur} onChange={onChange} value={value}>
      {roles?.map((rol) => <option value={rol.value} key={rol.id}>{rol.name}</option>)}
    </select>
  );
}