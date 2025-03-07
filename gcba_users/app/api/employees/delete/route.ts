import { PrismaClient } from "@prisma/client";

export async function DELETE(request: Request): Promise<Response> {
  try {

    const { dni } = await request.json();
    const prisma = new PrismaClient();

    const deletedEmployee = await prisma.employee.delete({
      where: {
        dni
      }
    });

    return Response.json({
      deletedEmployee
    });

  } catch (err) {
    const message = `Err deleting employee ${err}`;
    console.log(message);
    return Response.error() ;
  }
}