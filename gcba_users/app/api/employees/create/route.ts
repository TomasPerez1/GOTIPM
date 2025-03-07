import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

export async function POST(request: Request): Promise<Response> {
  try {
    const { employeeData } = await request.json();
    const { dni, fullName, Role, dateOfBirth, description } = employeeData;

    const prisma = new PrismaClient();
    const employee = await prisma.employee.create({
      data: {
        dni,
        fullName: fullName.trim(),
        dateOfBirth: DateTime.fromISO(dateOfBirth).toJSDate(),
        description: description.trim(),
        roleId: parseInt(Role),
      }
    });

    if(!employee || !employee.createdAt) {
      throw new Error("Err creating employee");
    }

    return Response.json({
      employee
    });
  } catch (err) {
    const message = `Err creating employee ${err}`;
    console.log(message);
    return Response.error() ;
  }
}