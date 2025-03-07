import { PrismaClient } from "@prisma/client";

export async function PUT(request: Request): Promise<Response> {
  try {
    const prisma = new PrismaClient();
    const { dni, newData } = await request.json();


    const updatedEmployee = await prisma.employee.update({
      where: {
        dni,
      },
      data: newData
    });

    return Response.json(updatedEmployee);

  } catch (err) {
    const message = `Err editing employee ${err}`;
    console.log(message);
    return Response.error() ;
  }
}