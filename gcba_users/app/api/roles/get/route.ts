import { PrismaClient } from "@prisma/client";

export async function GET() :Promise<Response> {
  try {
    const prisma = new PrismaClient();

    const roles = await prisma.role.findMany({});

    if(!roles) throw new Error("No roles saved in DB");

    return Response.json({
      roles
    });

  } catch (err) {
    console.log("Err fetching roles", err);
    return Response.json({
      err,
    });
  }
}