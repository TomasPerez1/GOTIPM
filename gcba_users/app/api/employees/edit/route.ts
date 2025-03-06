import { PrismaClient } from "@prisma/client";

export async function PUT(request: Request) {
  try {
    const prisma = new PrismaClient();
    const { dni, newData } = await request.json();

    const updatedEmployee = await prisma.employee.update({
      where: {
        dni,
      },
      data: newData
    });

    return Response.json({
      updatedEmployee
    });

  } catch (err) {
    console.log("Err editing employee", err);
    return Response.json({
      err,
    });
  }
}