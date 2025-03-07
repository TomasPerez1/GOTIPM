import { PrismaClient } from "@prisma/client";

export async function GET():Promise<Response> {
  try {
    const prisma = new PrismaClient();

    const employees = await prisma.employee.findMany();
    return Response.json(employees);

  } catch (err) {
    const message = `Err geting employee ${err}`;
    console.log(message);
    return Response.error() ;
  }
}