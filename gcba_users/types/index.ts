export interface Error {
  message: string;
}

export interface Employee {
  dni: bigint;
  fullName: string;
  description: string;
  Role: number;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type Role = {
  id: number;
  value: string;
  name: string;
};