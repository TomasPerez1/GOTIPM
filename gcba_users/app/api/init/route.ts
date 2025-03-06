import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const _roles = [
      { value: "dev" },
      { value: "rrhh" },
      { value: "ceo" },
      { value: "marketing" },
    ];

    const prisma = new PrismaClient();

    const main = async () => {
      await prisma.role.createMany({
        data: _roles
      });
    };
    const res = await main();

    return Response.json({
      res
    });

  } catch (err) {
    console.log("Err creating roles", err);
    return Response.json({
      err,
    });
  }
}