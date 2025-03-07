import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

interface NewData {
  fullName?: string;
  description?: string;
  roleId?: number;
  dateOfBirth?: Date;
}

export async function PUT(request: Request): Promise<Response> {
  try {
    const prisma = new PrismaClient();

    const { dni, newData } = await request.json();
    const { fullName, dateOfBirth, description, roleId } = newData;

    const parseNewData: NewData = {};
    if (fullName) parseNewData.fullName = fullName.trim();
    if (dateOfBirth) {
      parseNewData.dateOfBirth = DateTime.fromISO(dateOfBirth).toJSDate();
    }
    if (description) parseNewData.description = description.trim();
    if (roleId) parseNewData.roleId = parseInt(roleId);
    // console.log("DESDE SERVER", parseNewData.roleId, Role);
    const updatedEmployee = await prisma.employee.update({
      where: {
        dni,
      },
      data: parseNewData
    });

    return Response.json(updatedEmployee);

  } catch (err) {
    const message = `Err editing employee ${err}`;
    console.log(message);
    return Response.error() ;
  }
}