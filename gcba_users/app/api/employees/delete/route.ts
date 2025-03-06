import { PrismaClient } from "@prisma/client";

export async function DELETE(request: Request): Promise<Response> {
  try {

    const { dni } = await request.json();
    console.log("dni", dni);
    const prisma = new PrismaClient();

    const deletedEmployee = await prisma.employee.delete({
      where: {
        dni
      }
    });

    console.log("deletedEmployee", deletedEmployee);
    return Response.json({
      deletedEmployee
    });

  } catch (err) {
    const message = `Err deleting employee ${err}`;
    console.log(message);
    return Response.json({
      message,
    }) ;
  }
}