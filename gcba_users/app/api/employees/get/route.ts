import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    const employees = await prisma.employee.findMany({});

    return Response.json({
      employees
    });

  } catch (err) {
    console.log("Err geting employees", err);
    return Response.json({
      err,
    });
  }
}