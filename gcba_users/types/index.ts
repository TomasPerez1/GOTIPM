
export interface Error {
  message: string;
}


export interface Employee {
  dni: bigint;
  fullName: string;
  description: string;
  roleId: number;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

