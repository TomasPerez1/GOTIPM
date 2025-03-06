import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const { employeeData } = await request.json();

    const prisma = new PrismaClient();
    const employee = await prisma.employee.create({
      data: employeeData
    });

    return Response.json({
      employee
    });
  } catch (err) {
    console.log("Err creating an employee", err);
    return Response.json({
      err,
    });
  }
}