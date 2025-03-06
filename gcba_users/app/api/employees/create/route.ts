import { PrismaClient } from "@prisma/client";

export async function POST(request: Request): Promise<Response> {
  try {
    const { employeeData } = await request.json();
    console.log("SE RECINIO", employeeData);
    const prisma = new PrismaClient();
    const employee = await prisma.employee.create({
      data: employeeData
    });

    return Response.json({
      employee
    });
  } catch (err) {
    const message = `Err creating employee ${err}`;
    console.log(message);
    return Response.json({
      message,
    }) ;
  }
}