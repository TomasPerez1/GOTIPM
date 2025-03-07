export interface Error {
  message: string;
}
export interface Employee {
  dni: number;
  fullName: string;
  description: string;
  Role?: number;
  roleId: number;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type Role = {
  id: number;
  value: string;
  name: string;
};

export interface NewEmployeeData {
  fullName?: string;
  description?: string;
  roleId: number;
  dateOfBirth?: Date;
}